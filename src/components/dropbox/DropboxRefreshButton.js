import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropboxRefresh = () => {

}

const DropboxRefreshButton = ({ dropboxCode }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const dropboxKey = process.env.REACT_APP_DROPBOX_KEY
    const dropbboxRedirect = process.env.REACT_APP_DROPBOX_REDIRECT
  
    const authUrl = `https://www.dropbox.com/oauth2/authorize?response_type=code&client_id=${dropboxKey}&token_access_type=offline&redirect_uri=${encodeURIComponent(dropbboxRedirect)}`;
  
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

export default DropboxRefresh;

export {DropboxRefresh, DropboxRefreshButton}