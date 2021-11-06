import React, {useState, useEffect} from 'react'
import Styles from './Overview.module.css';
import NotificationIcon from '@material-ui/icons/NotificationImportantOutlined';
import {Avatar} from '@material-ui/core';
function Overview() {
    const[value, setValue] = useState("revenue");
    const changeActive = (v ,e)=>{
             var elements = document.querySelectorAll('#option');
             elements.forEach(element=>{
                 element.style.borderBottom="none";
             });
             elements[e].style.borderBottom="6px solid grey";

             setValue(v);
    }

    useEffect(()=>{
           changeActive("revenue" , 0);
    }, []);

    return (
        <div className={Styles.overview}>
            <div className={Styles.navoptions}>
                <a href="" className={Styles.option}>Student</a>
                <NotificationIcon className={Styles.notify}/>
                <Avatar src={``} className={Styles.avatar}></Avatar>
            </div>
            <h2 className={Styles.mh}>Overview</h2>
            <p className={Styles.tag}>Get top insights about your performance</p>

            <div className={Styles.main}>
                   <div className={Styles.maintop}>
                   <div className={Styles.point} id="option" onClick={()=> changeActive("revenue",0)}>
                       <p className={Styles.sm}>Total Revenue</p>
                       <h1 className={Styles.data}>$0.00</h1>
                       <p className={Styles.sm}>$0.00 this month</p>
                   </div>
                   <div className={Styles.point} id="option" onClick={()=> changeActive("enrollment",1)}>
                       <p className={Styles.sm}>Total Enrollment</p>
                       <h1 className={Styles.data}>0</h1>
                       <p className={Styles.sm}>0 this month</p>
                   </div>
                   <div className={Styles.point} id="option" onClick={()=> changeActive("rating" , 2)}>
                       <p className={Styles.sm}>Instructor Rating</p>
                       <h1 className={Styles.data}>0.00</h1>
                       <p className={Styles.sm}>0 Rating this month</p>
                   </div>
                   </div>
                   <div className={Styles.mainbottom}>
                       <div className={Styles.select}><p>Date range</p>
                       <select className={Styles.selectoption}>
                           <option>7 days</option>
                           <option>30 days</option>
                           <option>12 month</option>
                           <option>All</option>
                       </select>
                       </div>

                       {{
                           "revenue":(
                            <p className="notfound">Not Found</p>
                           ),
                           "enrollment": (
                            <p className="notfound">Not Found</p>
                           ),
                           "rating": (
                            <p className="notfound">Not Found</p>
                           )
                       }[value]}
                   </div>
            </div>
            
            <div className={Styles.bottom}>
                       <a href="" className={Styles.link}>Revenue Report {`>`}</a>
                   </div>
        </div>
    )
}

export default Overview
