import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form>
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