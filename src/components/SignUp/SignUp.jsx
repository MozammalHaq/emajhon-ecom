import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('')
        if (password !== confirm) {
            setError('Password not match')
        } else if (password.length < 6) {
            setError('Password at least 6 character')
        }

        console.log(email, password, confirm)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm" required />
                    <input type="submit" value="Sign Up" /><br />
                    <small>Already have an Account <Link to='/login'>Login</Link> </small>
                    <p className='error-text'>{error}</p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;