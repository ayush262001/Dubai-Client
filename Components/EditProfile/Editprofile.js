import React, { useState } from 'react'
import Styles from "./Editprofile.module.css";
import { Button, Avatar } from '@material-ui/core';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Popup from '../Popup';
function Editprofile() {
    
    const [stateofpage, setStateofpage] = useState("profile");
    const[displaypopup, setDisplaypopup] = useState(false);

     

    return (
        <>
        <div className={Styles.edit}>
            {{
                "profile": (
                    <>
                        <div className={Styles.left}>
                            <img src="/red.jpg" className={Styles.pimg} />
                            <h4>AYUSH GOUR</h4>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("vpp")}>View Public Profile</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("profile")}>Profile</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("photo")}>Photo</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("account")}>Acount</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("payment")}>Payment Method</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("privacy")}>Privacy</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("notification")}>Notifications</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("apiclient")}>Api Client</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("closeaccount")}>Close Account</p>
                        </div>
                        <div className={Styles.right}>
                            <h2 className={Styles.pp}>Public Profile</h2>
                            <p className={Styles.pppara}>Add information about yourself</p>
                            <div className={Styles.inputbox}>
                                <h5 className={Styles.heading}>
                                    Basics:
                                </h5>

                                <input type="text" className={Styles.input} placeholder="First Name" />
                                <input type="text" className={Styles.input} placeholder="Last Name" />
                                <input type="text" id="heading" className={Styles.input} placeholder="Heading (limit 60 words)" />
                                <label for="headline" className={Styles.label}>Add a professional headline like, "Engineer at Udemy" or "Architect."</label>
                                <div className={Styles.option}>
                                    <p className={Styles.flexparabold}>B</p>
                                    <p className={Styles.flexparaitalic}>I</p>
                                </div>
                                <textarea className={Styles.textarea} id="caption" />
                                <label for="headline" className={Styles.label}>Links and coupon codes are not permitted in this section.</label>
                                <select className={Styles.select}>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Urdu">Urdu</option>
                                    <option value="French">French</option>
                                    <option value="German">German</option>
                                </select>
                                <hr />

                                <h5 className={Styles.heading}>
                                    Links:
                                </h5>

                                <input type="url" className={Styles.input} placeholder="Website (https://...)" />
                                <div className={Styles.extra}>
                                    <input type="text" className={Styles.inputnew} value="http://twitter.com/" />
                                    <input type="text" className={Styles.inputnewmain} placeholder="Twitter Profile" />
                                    <input type="text" className={Styles.inputnew} value="http://www.facebook.com/" />
                                    <input type="text" className={Styles.inputnewmain} placeholder="Facebook Profile" />
                                    <input type="text" className={Styles.inputnew} value="http://www.linkedin.com/" />
                                    <input type="text" className={Styles.inputnewmain} placeholder="Linkedin Profile" />
                                    <input type="text" className={Styles.inputnew} value="http://www.youtube.com/" />
                                    <input type="text" className={Styles.inputnewmain} placeholder="Youtube Profile" />
                                </div>
                            </div>
                            <div className={Styles.buttonsection}>
                                <Button className={Styles.button}>Save</Button>
                            </div>
                        </div>
                    </>
                ),

                "photo": (
                    <>

                        <div className={Styles.left}>
                            <img src="/red.jpg" className={Styles.pimg} />
                            <h4>AYUSH GOUR</h4>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("vpp")}>View Public Profile</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("profile")}>Profile</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("photo")}>Photo</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("account")}>Acount</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("payment")}>Payment Method</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("privacy")}>Privacy</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("notification")}>Notifications</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("apiclient")}>Api Client</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("closeaccount")}>Close Account</p>
                        </div>
                        <div className={Styles.right}>
                            <h2 className={Styles.pp}>Photo</h2>
                            <p className={Styles.para}>Minimum 200x200 pixels, Maximum 6000x6000 pixels</p>
                            <hr className={Styles.hr} />

                            <h4 className={Styles.ppleft}>Image Preview</h4>
                            <div className={Styles.imagesection}>
                                <Avatar className={Styles.Avatar} />
                            </div>

                            <h4 className={Styles.ppleft}>Change or Upload Image</h4>
                            <label for="imgupload">
                                <div className={Styles.imagename}>
                                    <p className={Styles.para}>No File Selected</p>
                                    <Button >Upload Image</Button>
                                </div>
                            </label>

                            <input type="file" id="imgupload" className={Styles.imgupload} />
                            <hr className={Styles.hr} />

                            <Button className={Styles.button}>Save</Button>
                        </div>
                    </>
                ),

                "account" : (
                    <>

                        <div className={Styles.left}>
                            <img src="/red.jpg" className={Styles.pimg} />
                            <h4>AYUSH GOUR</h4>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("vpp")}>View Public Profile</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("profile")}>Profile</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("photo")}>Photo</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("account")}>Acount</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("payment")}>Payment Method</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("privacy")}>Privacy</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("notification")}>Notifications</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("apiclient")}>Api Client</p>
                            <p className={Styles.menuoption} onClick={() => setStateofpage("closeaccount")}>Close Account</p>
                        </div>
                        <div className={Styles.right}>
                            <h2 className={Styles.pp}>Account</h2>
                            <p className={Styles.para}>Edit your account settings and change your password here.</p>
                            <hr className={Styles.hr} />

                            <h4 className={Styles.ppl}>Email: </h4>
                            <div className={Styles.inputboxs} onClick={()=>setDisplaypopup(true)}>
                                <input type="email" className={Styles.input} placeholder="your current email is *******"/>
                                <EditIcon  className={Styles.editicon}/>
                            </div>

                            <hr className={Styles.hr} />
                            <h4 className={Styles.ppl}>Password: </h4>
                            <div className={Styles.inputbox}>
                            <input type="password" className={Styles.input} placeholder="Enter Current Password" />
                            <br/>
                            <input type="password" className={Styles.input} placeholder="Enter New Password" />
                            <br/>
                            <input type="password" className={Styles.input} placeholder="RE-Enter New Password" />
                            </div>

                            <hr className={Styles.hr} />

                            <Button className={Styles.button}>Change Password</Button>
                            
                        </div>
                    </>
                )

            }[stateofpage]}

        </div>
        {displaypopup ? <Popup />:<></>}
        </>
    )
}

export default Editprofile
