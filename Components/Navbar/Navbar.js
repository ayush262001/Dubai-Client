import React, { useState } from 'react'
import Styles from './Navbar.module.css';
import { Button } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import RightArrow from '@material-ui/icons/ArrowRight';

function Navbar() {

    const [drop, setDrop] = useState(false);
    const [dropone, setDropOne] = useState(false);
    const [droptwo, setDropTwo] = useState(false);

    const onclickOpenMenu = (id) => {
        if (id === "one") {
            if (!dropone) {
                document.getElementById(id).style.display = "block";
                setDropOne(true);
            }
            else {
                setDropOne(false);
                document.getElementById(id).style.display = "none";
            }
        }
        else if (id === "two") {
            if (!droptwo) {
                document.getElementById(id).style.display = "block";
                setDropTwo(true);
            }
            else {
                setDropTwo(false);
                document.getElementById(id).style.display = "none";
            }
        }

        else {
            if (!drop) {
                document.getElementById(id).style.display = "block";
                setDrop(true);
            }
            else {
                setDrop(false);
                document.getElementById(id).style.display = "none";
            }
        }
    }
    return (
        <div className={Styles.navbar}>
            <img src={`/logo.png`} alt="logo" className={Styles.navbarlogo} />
            {/* 1 */}
            <div className={Styles.navbarbox}>
                <p className={Styles.navbaritem} onClick={() => { onclickOpenMenu("dropdown") }}>Categories</p>
                <div className={Styles.dropdown} id="dropdown">
                    <ul>
                        <li className={Styles.navitems}>
                            {/* Creating multiple values */}
                            {/* 2 */}
                            <div className={Styles.navbarbox}>
                                <p onClick={() => { onclickOpenMenu("one") }}>Web Development <RightArrow /></p>

                                <div className={Styles.dropdowntwo} id="one">
                                    <ul>
                                        <li className={Styles.navitems}>
                                            {/* starting from here */}
                                            {/* 3 */}
                                            <div className={Styles.navbarbox}>
                                                <p onClick={() => { onclickOpenMenu("two") }}>Web Development <RightArrow /></p>

                                                <div className={Styles.dropdowntwo} id="two">
                                                    <ul>
                                                        <li className={Styles.navitems}>
                                                            <p >Web Development</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    {/* 3 */}
                                    {/* ending here third */}


                                </div>
                            </div>

                            {/* 2 */}
                            {/* till here */}

                        </li>
                    </ul>
                </div>
                {/* 1 */}
            </div>
            <form className={Styles.navbarform}>
                <SearchIcon className={Styles.navbaricon} />
                <input type="text" className={Styles.navbarinput} placeholder="Search for anything" />
            </form>
            <p className={`${Styles.navbaritem} ${Styles.udemy}`}>Courses</p>
            <p className={`${Styles.navbaritem} ${Styles.teach}`}>Teach on Udemy</p>
            <ShoppingCartOutlinedIcon className={Styles.navbaricon} />


            <Button className={Styles.navbarbuttonwhite}>Log in</Button>

            <Button className={Styles.navbarbuttonblack}>Sign up</Button>
            <Button className={Styles.navbarbuttonwhite}><LanguageOutlinedIcon className="icon-web" /></Button>
        </div>
    )
}

export default Navbar
