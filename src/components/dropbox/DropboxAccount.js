import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropboxAccount = () => {
    const [accountInfo, setAccountInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccountInfo = async () => {
            try {
            const accessToken = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN
            const response = await axios.post(
                'https://api.dropboxapi.com/2/users/get_current_account',
                null,
                {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                }
            );
                setAccountInfo(response.data);
            } catch (error) {
                console.log(error.response)
                setError(error);
            }
        };

        fetchAccountInfo();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!accountInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dropbox Account Information</h1>
            <p><strong>Account ID:</strong> {accountInfo.account_id}</p>
            <p><strong>Name:</strong> {accountInfo.name.display_name}</p>
            <p><strong>Email:</strong> {accountInfo.email}</p>
        </div>
    );
};

export default DropboxAccount;
