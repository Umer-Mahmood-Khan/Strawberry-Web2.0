// src/components/SignOut.js
import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Signed out');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
