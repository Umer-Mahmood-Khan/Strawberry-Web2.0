// src/components/SignInWithEmailLink.js
import React, { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

const SignInWithEmailLink = () => {
  useEffect(() => {
    const handleSignInWithEmailLink = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }
        try {
          await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem('emailForSignIn');
          alert('Successfully signed in with email link!');
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
      }
    };

    handleSignInWithEmailLink();
  }, []);

  return <></>; // This component doesn't render anything, it just handles the sign-in logic
};

export default SignInWithEmailLink;
