import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({ setUserEmail }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setEmail('');
        setPassword('');
        setError('');
        setSuccess('');
    }, []);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user.emailVerified) {
                setSuccess('Successfully signed in');
                setError('');
                setUserEmail(user.email); // Set user email in App component
                navigate('/'); // Redirect to the home page
            } else {
                setError('Please verify your email address');
                await auth.signOut(); // Optional: sign out the user if they are not verified
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signin-page">
            <div className="signin-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSignIn}>
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
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <a href="/signup" className="signup-link-text">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
