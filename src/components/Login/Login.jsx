import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false)
    const { logInUserEmailPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logInUserEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Login</h2>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type={show ? "text" : "password"} id="password" name="password" required />
                    <p onClick={() => setShow(!show)}>
                        {
                            show ? <span>Hide</span> : <span>Show</span>
                        }
                    </p>
                    <input type="submit" value="Login" />
                </form>
                <small>If you no account <Link to='/signup'>Sign Up</Link> </small>
                <h5>or</h5>
                <button>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;