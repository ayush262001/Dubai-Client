import React, {useState} from 'react'
import Styles from './Navbar.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { StyleTwoTone } from '@material-ui/icons';
import {Avatar} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import WebIcon from '@material-ui/icons/LanguageOutlined';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
function NavbarMobile() {

    const [opened, setOpened] = useState(false);
    const [item, setItem] = useState(false);

    //this will open menu box
    const openMenu = ()=>{
        //here the code for menu box opening and state management will go
        if(!opened){
            setOpened(true);
            console.log("menu opened");
        }
        else{
            setOpened(false);
            console.log("menu Closed");
        }
    }

    //this will manage the state for the menu in menu box
    const innerMenu = ()=>{
        if(!item){
            setItem(true);
            console.log("open");
        }
        else{
            setItem(false);
            console.log("closed");
        }
    }

    

    return (
        <div className={Styles.navbarmobile}>
            <div className={Styles.open} onClick={()=>openMenu()}><MenuIcon className={Styles.navbaricon}/></div>
            <img src="/Images/logo.png" className={Styles.navbarlogo} />
            <div>
            <SearchIcon className={Styles.navbaricon} />
            <ShoppingCartOutlinedIcon className={Styles.navbaricon} />
            </div>
            {opened ? (<div className={Styles.menubox} id="menubox">
                {item ? (<div className={Styles.itemsdeep} id="itemsdeep">
                    <div className={Styles.menuback} onClick={()=>innerMenu()}>
                        <p className={Styles.itemin}><ArrowLeftIcon />Menu</p>
                    </div>
                    <a href="" className={Styles.item}>React Js</a><br/>
                    <a href="" className={Styles.item}>React Js</a><br/>
                    <a href="" className={Styles.item}>React Js</a><br/>
                    <a href="" className={Styles.item}>React Js</a><br/>
                    <a href="" className={Styles.item}>React Js</a><br/>
                    <a href="" className={Styles.item}>React Js</a><br/>
                </div>): (<div className={Styles.one} id="one">
                <div className={Styles.linkeddiv}>
                    <Avatar className={Styles.avatar} src="" />
                    <div className={Styles.innerdiv}>
                        <h2 className={Styles.name}>Ayush Gour</h2>
                        <p className={Styles.tag}>Welcome Back</p>
                    </div>
                </div>
                <h2 className={Styles.heading}>Learn</h2>
                <p className={Styles.item} onClick={()=>innerMenu()}>My Learning</p>
                <hr/>
                <h2 className={Styles.heading} onClick={()=>innerMenu()}>Most Popular</h2>
                <p className={Styles.item} onClick={()=>innerMenu()}>Web Development</p>
                <p className={Styles.item} onClick={()=>innerMenu()}>App Development</p>
                <p className={Styles.item} onClick={()=>innerMenu()}>Marketing</p>
                <p className={Styles.item} onClick={()=>innerMenu()}>Music</p>
                <hr/>
                <h2 className={Styles.heading}>More from Udemy</h2><br/>
                <a href="" className={Styles.item}>Udemy Business</a><br/><br/>
                <a href="" className={Styles.item}>Get the App</a><br/><br/>
                <a href="" className={Styles.item}>Invite Friends</a><br/><br/>
                <a href="" className={Styles.item}>Help</a><br/><br/>
                <div className={Styles.lang}>
                    <WebIcon className={Styles.langicon} />
                    <p className={Styles.language}>English</p>
                </div>
                </div>)}
                
            </div>) : <></>}
        </div>
    )
}

export default NavbarMobile
