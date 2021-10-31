import React from 'react'
import Styles from './Featured.module.css';
function Featured() {
    return (
        <div className={Styles.featured}>
             <div className={Styles.main}>
                 <h1>Featured Topics By Categories</h1>
                 <div className={Styles.itemoptions}>
                          <div className={Styles.option}>
                              <h3>Development</h3>
                              <div>
                                  <a href="">Python</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">Web Development</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">Android Development</a>
                                  <p>33,200 students</p>
                              </div>
                          </div>

                          <div className={Styles.option}>
                              <h3>IT & Software</h3>
                              <div>
                                  <a href="">Java</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">Excel</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">C++</a>
                                  <p>33,200 students</p>
                              </div>
                          </div>

                          <div className={Styles.option}>
                              <h3>Design</h3>
                              <div>
                                  <a href="">Figma</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">Adobe XD</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">Premiere Pro</a>
                                  <p>33,200 students</p>
                              </div>
                          </div>

                          <div className={Styles.option}>
                              <h3>Business</h3>
                              <div>
                                  <a href="">Analytics</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">SQL</a>
                                  <p>33,200 students</p>
                              </div>

                              <div>
                                  <a href="">PMP</a>
                                  <p>33,200 students</p>
                              </div>
                          </div>
                 </div>
             </div>
        </div>
    )
}

export default Featured
