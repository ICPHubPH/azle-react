import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosConfig'; // Assuming you have axios config

const VerifyAuth: React.FC = () => {
  const [verificationMessage, setVerificationMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the token from localStorage (or the route query params, depending on your backend)
    const token = localStorage.getItem('token');
    
    if (!token) {
      setVerificationMessage('No token found');
      setLoading(false);
      return;
    }

    // Send the token to the backend for verification
    axiosInstance
      .post('/auth/verify', { token }) // Adjust the API endpoint based on your backend
      .then((response) => {
        setVerificationMessage(response.data.message);
      })
      .catch((error) => {
        setVerificationMessage('Token verification failed');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1>Token Verification</h1>
      <p>{verificationMessage}</p>
    </div>
  );
};

export default VerifyAuth;
