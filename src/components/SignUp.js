import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import './SignUp.css'; // Import your CSS file

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordRequirements, setPasswordRequirements] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    length: false,
  });

  const validatePassword = (password) => {
    setPasswordRequirements({
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      length: password.length >= 8,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!passwordRequirements.lowercase || !passwordRequirements.uppercase || !passwordRequirements.number || !passwordRequirements.length) {
      setError('Password does not meet the requirements');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('A verification email has been sent. Please verify your email and then sign in.');
      setError('');
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              required
            />
            <div className="password-requirements">
              <p>Password must Contain:</p>
              <p className={passwordRequirements.lowercase ? 'valid' : 'invalid'}>
                At least one lowercase letter
              </p>
              <p className={passwordRequirements.uppercase ? 'valid' : 'invalid'}>
                At least one uppercase letter
              </p>
              <p className={passwordRequirements.number ? 'valid' : 'invalid'}>
                At least one number
              </p>
              <p className={passwordRequirements.length ? 'valid' : 'invalid'}>
                Minimum 8 characters
              </p>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">Sign Up</button>
          <p>Already have an account? <a href="/signin" className="signin-link-text">Sign In</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
