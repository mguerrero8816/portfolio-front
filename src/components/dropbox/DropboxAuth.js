import React, { useState } from 'react';
import axios from 'axios';

const DropboxAuth = () => {
  const [accessToken, setAccessToken] = useState(null);

  const clientId = process.env.REACT_APP_DROPBOX_KEY
  const clientSecret = process.env.REACT_APP_DROPBOX_SECRET

  const redirectUri = process.env.REACT_APP_DROPBOX_REDIRECT

  const handleAuthClick = () => {
    const authUrl = `https://www.dropbox.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
  };

  const getAccessToken = async (code) => {
    const tokenUrl = 'https://api.dropboxapi.com/oauth2/token';
    const data = new URLSearchParams();
    data.append('code', code);
    data.append('grant_type', 'authorization_code');
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    data.append('redirect_uri', redirectUri);

    try {
      const response = await axios.post(tokenUrl, data);
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error('Error obtaining access token:', error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      getAccessToken(code);
    }
  }, []);

  return (
    <div>
      <button onClick={handleAuthClick}>Authenticate with Dropbox</button>
      {accessToken && <p>Access Token: {accessToken}</p>}
    </div>
  );
};

export default DropboxAuth;