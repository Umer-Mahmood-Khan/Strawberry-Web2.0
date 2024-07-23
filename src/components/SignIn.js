import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignIn.css'; // Import your CSS file

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user.emailVerified) {
                setSuccess('Successfully signed in');
                setError('');
                navigate('/'); // Redirect to the Banner page (home page)
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
