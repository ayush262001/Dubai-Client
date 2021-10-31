import React, {useState, useEffect} from 'react'
import Styles from './Sidenavbar.module.css'
import {OndemandVideo, Chat, Equalizer, Build, HelpOutline} from '@material-ui/icons';
function Sidenavbar() {

    
    const[value, setValue] = useState("course");

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


    return (
        <div className={Styles.main}>
        <div className={Styles.sn}>
             <h3 id="items" onClick={()=> makeActive(0, "course")}><OndemandVideo  className={Styles.icon}/> <span className={Styles.span}>Course</span></h3>
             <h3 id="items" onClick={()=> makeActive(1, "communiction")}><Chat className={Styles.icon}/> <span className={Styles.span}>Communication</span></h3>
             <h3 id="items" onClick={()=> makeActive(2, "performance")}><Equalizer  className={Styles.icon}/> <span className={Styles.span}>Performance</span></h3>
             <h3 id="items" onClick={()=> makeActive(3, "tool")}><Build className={Styles.icon}/> <span className={Styles.span}>Tool</span></h3>
             <h3 id="items" onClick={()=> makeActive(4, "resources")}><HelpOutline className={Styles.icon}/> <span className={Styles.span}>Recourses</span></h3>
        </div>
           <div className={Styles.content}>
               {{
                   "course" : (<h1>Course</h1>),
                   "communiction" : (<h1>Communication</h1>),
                   "performance" : (<h1>Performance</h1>),
                   "tool" : (<h1>Tool</h1>),
                   "resources" : (<h1>Resources</h1>)
               }[value]}
           </div>
        </div>
    )
}

export default Sidenavbar
