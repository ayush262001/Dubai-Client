import React from 'react'
import Styles from './Navbar.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { StyleTwoTone } from '@material-ui/icons';
function NavbarMobile() {
    return (
        <div className={Styles.navbarmobile}>
            <MenuIcon className={Styles.navbaricon}/>
            <img src="/Images/logo.png" className={Styles.navbarlogo} />
            <div>
            <SearchIcon className={Styles.navbaricon} />
            <ShoppingCartOutlinedIcon className={Styles.navbaricon} />
            </div>
        </div>
    )
}

export default NavbarMobile
