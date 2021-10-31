import React from 'react'
import Styles from './Categories.module.css';

function Categories() {
    return (
        <div className="categories">
             <h1 className={Styles.heading}>Top Categories</h1>
             <div className={Styles.categoryitem}>
                 <div className={Styles.ci}>
                     <img src="/Images/categories/one.jpg" className={Styles.cimage} />
                     <p>Business</p>
                 </div>

                 <div className={Styles.ci}>
                     <img src="/Images/categories/two.jpg" className={Styles.cimage} />
                     <p>Photography</p>
                 </div>

                 <div className={Styles.ci}>
                     <img src="/Images/categories/three.jpg" className={Styles.cimage} />
                     <p>Personal Development</p>
                 </div>

                 <div className={Styles.ci}>
                     <img src="/Images/categories/four.jpg" className={Styles.cimage} />
                     <p>Music</p>
                 </div>

                 <div className={Styles.ci}>
                     <img src="/Images/categories/five.jpg" className={Styles.cimage} />
                     <p>Marketing</p>
                 </div>

                 <div className={Styles.ci}>
                     <img src="/Images/categories/six.jpg" className={Styles.cimage} />
                     <p>IT & Software</p>
                 </div>

                 <div className={Styles.ci}>
                     <img src="/Images/categories/seven.jpg" className={Styles.cimage} />
                     <p>Development</p>
                 </div>

                 <div className={Styles.ci}>
                     <img src="/Images/categories/eight.jpg" className={Styles.cimage} />
                     <p>Design</p>
                 </div>
             </div>
        </div>
    )
}

export default Categories
