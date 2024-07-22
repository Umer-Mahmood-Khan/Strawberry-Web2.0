// src/components/SignIn.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        await signOut(auth);
        alert('Please verify your email before signing in.');
      } else {
        alert('Signed in successfully');
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
