import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='link'><small>New to ema-john? <Link to="/signUp">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;