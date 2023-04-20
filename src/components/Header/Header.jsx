import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
        .catch(error => console.log(error))
    }
    return ( 
        <nav className='header'>
            <img src={logo}alt="" />
            <div>
                {user && <span className='text-white'>{ user.email } <button onClick={handleLogOut}>Sign Out</button></span>}
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signUp">Sign Up</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;