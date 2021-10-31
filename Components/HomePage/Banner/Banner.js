import React from 'react'
import Styles from './Banner.module.css';
import SearchIcon from '@material-ui/icons/Search';
function Banner() {
    return (
        <div className={Styles.banner}>
            <img src="/Images/Banner.jpg" alt="image not found" className={Styles.bannerimage} />
            <div className={Styles.bannercontent}>
                  <h1>Welcome back — time to learn & save</h1>
                  <p>We missed you! So here’s an offer just for you: get courses from ₹490. It’s six hours of savings.</p>
                  <form className={Styles.bannerform}>
                      <input type="text" className={Styles.navbarinput} placeholder="What do you want to learn ?"/>
                      <SearchIcon className={`${Styles.navbaricon} ${ Styles.search}`} />
                  </form>
            </div>
        </div>
    )
}

export default Banner
