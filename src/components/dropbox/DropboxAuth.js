import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropboxAuth = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const dropboxKey = process.env.REACT_APP_DROPBOX_KEY
    const dropbboxRedirect = process.env.REACT_APP_DROPBOX_REDIRECT
  
    const authUrl = `https://www.dropbox.com/oauth2/authorize?response_type=code&client_id=${dropboxKey}&redirect_uri=${encodeURIComponent(dropbboxRedirect)}`;
  
    const handleLogin = () => {
      window.location.href = authUrl;
    };
  
    return (
      <div>
        <button onClick={handleLogin}>Connect to Dropbox</button>
      </div>
    );
}

export default DropboxAuth;