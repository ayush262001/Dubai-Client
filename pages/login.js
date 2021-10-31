import React from 'react'
import LoginPage from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import Navbarmini from '../Components/Navbar/NavbarMobile';
function login() {
    return (
        <div>
            <Navbar />
            <Navbarmini />
            <LoginPage />
        </div>
    )
}

export default login
