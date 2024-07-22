// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('Verification email sent');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
