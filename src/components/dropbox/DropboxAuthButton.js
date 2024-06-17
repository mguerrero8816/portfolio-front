import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';

const DropboxAuthButton = ({dropboxCode}) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const clientId = process.env.REACT_APP_DROPBOX_KEY
  const clientSecret = process.env.REACT_APP_DROPBOX_SECRET
  const redirectUri = process.env.REACT_APP_DROPBOX_REDIRECT

  const getAccessToken = async () => {
    const tokenUrl = 'https://api.dropboxapi.com/oauth2/token';
    const data = new URLSearchParams();
    data.append('code', dropboxCode);
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', redirectUri);

    try {
      const response = await axios.post(tokenUrl, data, {
        auth: {
          username: clientId,
          password: clientSecret
        }
      });
      console.log(response)
      setAccessToken(response.data.access_token);
      setRefreshToken(response.data.refresh_token)
    } catch (error) {
      console.error('Error obtaining access token:', error);
    }
  };

  return (
    <div>
      {accessToken && (
        <p>Access Token: {accessToken}</p>
      )}
      {refreshToken && (
        <p>Refresh Token: {refreshToken}</p>
      )}
      <button onClick={getAccessToken}>Get Access Token</button>
    </div>
  );
};

export default DropboxAuthButton;