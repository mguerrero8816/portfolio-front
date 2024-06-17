import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropboxRefreshCall = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const dropboxKey = process.env.REACT_APP_DROPBOX_KEY
    const dropbboxRedirect = process.env.REACT_APP_DROPBOX_REDIRECT
  
    const authUrl = `https://www.dropbox.com/oauth2/authorize?response_type=code&client_id=${dropboxKey}&token_access_type=offline&redirect_uri=${encodeURIComponent(dropbboxRedirect)}`;
  




    // curl https://api.dropbox.com/oauth2/token \
    // -d refresh_token=REFRESHTOKENHERE \
    // -d grant_type=refresh_token \
    // -d client_id=APPKEYHERE \
    // -d client_secret=APPSECRETHERE

    // const [accessToken, setAccessToken] = useState(null);
    // const [refreshToken, setRefreshToken] = useState(null);
  
    // const clientId = process.env.REACT_APP_DROPBOX_KEY
    // const clientSecret = process.env.REACT_APP_DROPBOX_SECRET
    // const redirectUri = process.env.REACT_APP_DROPBOX_REDIRECT
  
    // const getAccessToken = async () => {
    //   const tokenUrl = 'https://api.dropboxapi.com/oauth2/token';
    //   const data = new URLSearchParams();
    //   data.append('code', dropboxCode);
    //   data.append('grant_type', 'authorization_code');
    //   data.append('redirect_uri', redirectUri);
  
    //   try {
    //     const response = await axios.post(tokenUrl, data, {
    //       auth: {
    //         username: clientId,
    //         password: clientSecret
    //       }
    //     });
    //     console.log(response)
    //     setAccessToken(response.data.access_token);
    //     setRefreshToken(response.data.refresh_token)
    //   } catch (error) {
    //     console.error('Error obtaining access token:', error);
    //   }
    // };
  
    // return (
    //   <div>
    //     {accessToken && (
    //       <p>Access Token: {accessToken}</p>
    //     )}
    //     {refreshToken && (
    //       <p>Refresh Token: {refreshToken}</p>
    //     )}
    //     <button onClick={getAccessToken}>Get Access Token</button>
    //   </div>
    // );

    const handleLogin = () => {
      window.location.href = authUrl;
    };

    return (
      <div>
        {dropboxCode && (
          <div>Current Code: {dropboxCode}</div>
        )}
        <button onClick={handleLogin}>Get New Code</button>
      </div>
    );
}

export default DropboxRefreshCall;