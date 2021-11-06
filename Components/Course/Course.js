import React from 'react'
import Styles from './Course.module.css';
import { Button } from '@material-ui/core';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
import BusinessIcon from '@material-ui/icons/BusinessCenterOutlined';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import NotificationIcon from '@material-ui/icons/NotificationImportantOutlined';
import {Avatar} from '@material-ui/core';
import NavBar from '../Navbar/Navbar';
function Course() {
    return (
        <>
        
        <div className={Styles.coursediv}>
            <div className={Styles.navoptions}>
                <a href="" className={Styles.option}>Student</a>
                <NotificationIcon className={Styles.notify}/>
                <Avatar src={``} className={Styles.avatar}></Avatar>
            </div>
            <div className={Styles.top}>
                <h3 className={Styles.h3}>Jump Into Course Creation</h3>
                <Button className={Styles.button}>Create Your Course</Button>
            </div>
            <h3 className={Styles.h32}>Based on your experience, we think these resources will be helpful.</h3>
            <div className={Styles.d}>
                <img src="/course.jpg" className={Styles.i}></img>
                <div className={Styles.right}>
                    <h2 className={Styles.h3}>Create an Engagin Course</h2>
                    <p className={Styles.para}>Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.</p>
                    <a href="" className={Styles.started}>Get Started</a>
                </div>
            </div>

            <div className={Styles.f}>
                <div className={Styles.dd}>
                    <img src="/course.jpg" className={Styles.i}></img>
                    <div className={Styles.right}>
                        <h2 className={Styles.h3}>Get Started with Video</h2>
                        <p className={Styles.para}>Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
                        <a href="" className={Styles.started}>Get Started</a>
                    </div>
                </div>

                <div className={Styles.dd}>
                    <img src="/course.jpg" className={Styles.i}></img>
                    <div className={Styles.right}>
                        <h2 className={Styles.h3}>Build Your Audience</h2>
                        <p className={Styles.para}>Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
                        <a href="" className={Styles.started}>Get Started</a>
                    </div>
                </div>
            </div>
            <div className={Styles.d}>
                <img src="/course.jpg" className={Styles.i}></img>
                <div className={Styles.right}>
                    <h2 className={Styles.h3}>Create an Engagin Course</h2>
                    <p className={Styles.para}>Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.</p>
                    <a href="" className={Styles.started}>Get Started</a>
                </div>
            </div>

            <h3 className={Styles.h32}>Have questions? Here are our most popular instructor resources.</h3>

            <div className={Styles.allitems}>
            <div className={Styles.items}>
                <MovieCreationIcon />
                <a href="" className={Styles.anchor}>Test Video</a>
                <p className={Styles.para}>Send us your video and get our expert advice</p>
            </div>
            <div className={Styles.items}>
                <ThumbUpIcon />
                <a href="" className={Styles.anchor}>Instructor Community</a>
                <p className={Styles.para}>Send us your video and get our expert advice</p>
            </div>
            <div className={Styles.items}>
                <BusinessIcon />
                <a href="" className={Styles.anchor}>Teaching Center</a>
                <p className={Styles.para}>Send us your video and get our expert advice</p>
            </div>
            <div className={Styles.items}>
                <InsertChartIcon/>
                <a href="" className={Styles.anchor}>MarketPlace Insight</a>
                <p className={Styles.para}>Send us your video and get our expert advice</p>
            </div>
            <div className={Styles.items}>
                <SentimentSatisfiedIcon />
                <a href="" className={Styles.anchor}>Help and Support</a>
                <p className={Styles.para}>Send us your video and get our expert advice</p>
            </div>
            </div>

            <h2 className={Styles.h32}>Are you ready to begin ?</h2>
            <Button className={Styles.buttonnew}>Create Your Course</Button>
        </div>
        </>
    )
}

export default Course
