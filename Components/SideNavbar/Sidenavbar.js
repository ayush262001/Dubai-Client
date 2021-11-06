import React, {useState, useEffect} from 'react'
import Styles from './Sidenavbar.module.css'
import {OndemandVideo, Chat, Equalizer, Build, HelpOutline, LocalLibrary, NotificationsActive, AccountCircle, ExitToApp} from '@material-ui/icons';
import Courses from '../Course/Course';
import Overview from '../OverviewPage/Overview';
import MenuIcon from '@material-ui/icons/Menu';
function Sidenavbar() {

    
    const[value, setValue] = useState("course");
    const[sn, setSn] = useState(false);

     useEffect(()=>{
          var ele = document.querySelectorAll("#items");
          for(var i =0; i<ele.length; i++) {
              ele[i].style.borderLeft = "none";
          }

          ele[0].style.borderLeft="2px solid #a435f0";

     }, []);

     const makeActive = (e, v) => {
        var ele = document.querySelectorAll("#items");
        for(var i =0; i<ele.length; i++) {
            ele[i].style.borderLeft = "none";
        }

        ele[e].style.borderLeft="2px solid #a435f0";
        setValue(v);
     }

     const openMenu = ()=>{
         if(sn){
             setSn(false);
             document.getElementById('sn').style.display="none";
         }
         else{
            setSn(true);
            document.getElementById('sn').style.display="block";
         }
     }


    return (
        <div className={Styles.main}>
           <div className={Styles.menudiv} onClick={() =>openMenu()}> <MenuIcon className={Styles.menuicon} /></div>
        <div className={Styles.sn} id="sn">
             <h3 id="items" onClick={()=> makeActive(0, "course")}><OndemandVideo  className={Styles.icon}/> <span className={Styles.span}>Course</span></h3>
             <h3 id="items" onClick={()=> makeActive(1, "communiction")}><Chat className={Styles.icon}/> <span className={Styles.span}>Communication</span></h3>
             <h3 id="items" onClick={()=> makeActive(2, "performance")}><Equalizer  className={Styles.icon}/> <span className={Styles.span}>Performance</span></h3>
             <h3 id="items" onClick={()=> makeActive(3, "tool")}><Build className={Styles.icon}/> <span className={Styles.span}>Tool</span></h3>
             <h3 id="items" onClick={()=> makeActive(4, "resources")}><HelpOutline className={Styles.icon}/> <span className={Styles.span}>Recourses</span></h3>
             <h3 id="items" className={Styles.hide} onClick={()=> makeActive(5, "student")}><LocalLibrary className={Styles.icon}/> <span className={Styles.span}>Students</span></h3>
             <h3 id="items" className={Styles.hide} onClick={()=> makeActive(6, "notification")}><NotificationsActive className={Styles.icon}/> <span className={Styles.span}>Notification</span></h3>
             <h3 id="items" className={Styles.hide} onClick={()=> makeActive(7, "profile")}><AccountCircle className={Styles.icon}/> <span className={Styles.span}>Profile</span></h3>
             <h3 id="items" className={Styles.hide} onClick={()=> makeActive(8, "logout")}><ExitToApp className={Styles.icon}/> <span className={Styles.span}>Logout</span></h3>
        </div>
           <div className={Styles.content}>
               {{
                   "course" : (<Courses/>),
                   "communiction" : (<h1>Communication</h1>),
                   "performance" : (<Overview/>),
                   "tool" : (<h1>Tool</h1>),
                   "resources" : (<h1>Resources</h1>)
               }[value]}
           </div>
        </div>
    )
}

export default Sidenavbar
