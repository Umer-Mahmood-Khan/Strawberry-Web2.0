// src/components/SendVerificationEmail.js
import React from 'react';
import { auth } from '../firebaseConfig';
import { sendEmailVerification } from 'firebase/auth';

const SendVerificationEmail = () => {
  const handleSendVerificationEmail = async () => {
    if (auth.currentUser) {
      try {
        await sendEmailVerification(auth.currentUser);
        alert('Verification email sent');
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    } else {
      alert('No user is signed in');
    }
  };

  return (
    <div>
      <button onClick={handleSendVerificationEmail}>Send Verification Email</button>
    </div>
  );
};

export default SendVerificationEmail;
