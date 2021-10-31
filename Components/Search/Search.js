import { Typography } from '@material-ui/core'
import React, {useState} from 'react'
import Styles from './Search.module.css';
import FilterIcon from '@material-ui/icons/Sort';
import StarIcon from '@material-ui/icons/Star';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
function Search() {

    function Ratingstar({rating}) {
        return (
            <div className="stars">
                {{
                    1: (<><StarIcon style={{ color: "gold", fontSize: "15px" }} /><StarIcon style={{ color: "grey" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} /></>),

                    2: (<><StarIcon style={{ color: "gold", fontSize: "15px" }} /><StarIcon style={{ color: "gold", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} /></>),

                    3: (<><StarIcon style={{ color: "gold", fontSize: "15px" }} /><StarIcon style={{ color: "gold", fontSize: "15px" }} />
                        <StarIcon style={{ color: "gold", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} /></>),

                    4: (<><StarIcon style={{ color: "gold", fontSize: "15px" }} /><StarIcon style={{ color: "gold", fontSize: "15px" }} />
                        <StarIcon style={{ color: "gold", fontSize: "15px" }} />
                        <StarIcon style={{ color: "gold", fontSize: "15px" }} />
                        <StarIcon style={{ color: "grey", fontSize: "15px" }} /></>),

                    5: (<><StarIcon style={{ color: "gold" }} /><StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} /></>)
                }[rating]}
            </div>
        )
    }

    const searchedItem = "python";

    const[displayTopic, setDT] = useState(false);
    const[displayPrice, setDP] = useState(false);
    // to verify sidebar exist or not
    const[sidebar, setSidebar] = useState(false);

    const setSidebarValue =()=>{
        if(!sidebar){
            setSidebar(true);
        }
        else{
            setSidebar(false);
        }
    }

    const displayTopics = ()=>{
        if(!displayTopic){
            document.getElementById("topicshide").style.display="block";
            setDT(true);
        }

        else{
            document.getElementById("topicshide").style.display="none";
            setDT(false);
        }
    }

    const displayPrices = ()=>{
        if(!displayPrice){
            document.getElementById("priceshide").style.display="block";
            setDP(true);
        }

        else{
            document.getElementById("priceshide").style.display="none";
            setDP(false);
        }
    }

    const courses = 
    [
        {
            title: "100 days of python programming",
            description: "Master python by building 100 projects in 100 days. This is one of the most famous coruse on udemy.  This is one of the most famous coruse on udemy",
            creator: "Raju Raman",
            rating: 4.0,
            timing: 65.4,
            lectures:605,
            level:"All levels",
            image:"/Images/coursesarea/python/two.jpg",
        },
        {
            title: "100 days of python programming",
            description: "Master python by building 100 projects in 100 days. This is one of the most famous coruse on udemy.  This is one of the most famous coruse on udemy",
            creator: "Raju Raman",
            rating: 4.0,
            timing: 65.4,
            lectures:605,
            level:"All levels",
            image:"/Images/coursesarea/python/three.jpg",
        },
        {
            title: "100 days of python programming",
            description: "Master python by building 100 projects in 100 days. This is one of the most famous coruse on udemy.  This is one of the most famous coruse on udemy",
            creator: "Raju Raman",
            rating: 4.0,
            timing: 65.4,
            lectures:605,
            level:"All levels",
            image:"/Images/coursesarea/python/four.jpg",
        },
        {
            title: "100 days of python programming",
            description: "Master python by building 100 projects in 100 days. This is one of the most famous coruse on udemy.  This is one of the most famous coruse on udemy",
            creator: "Raju Raman",
            rating: 4.0,
            timing: 65.4,
            lectures:605,
            level:"All levels",
            image:"/Images/coursesarea/python/five.jpg",
        },
        {
            title: "100 days of python programming",
            description: "Master python by building 100 projects in 100 days. This is one of the most famous coruse on udemy.  This is one of the most famous coruse on udemy",
            creator: "Raju Raman",
            rating: 4.0,
            timing: 65.4,
            lectures:605,
            level:"All levels",
            image:"/Images/coursesarea/python/one.jpg",
        }
    ]

    return (
        <div className={Styles.searchdiv}>
            <Typography variant="h4" component="h4" className={Styles.typography}>10,000 results for “{searchedItem}”</Typography>
            <Typography variant="h6" component="h6" className={Styles.typography}>Explore <span className={Styles.span}>Python Courses</span></Typography>
            <div className={Styles.filters}>
                <div className={Styles.f1} onClick={()=> setSidebarValue()}>
                    <FilterIcon /><p>Filter</p>
                </div>
                <div className={Styles.f2}>
                    <p>Sort by</p>
                    <select className={Styles.sort}>
                        <option default value="Most relevent">Most relevent</option>
                        <option value="Most reviewed">Most reviewed</option>
                        <option value="Highest rated">Highest rated</option>
                        <option value="Newest">Newest</option>
                    </select>
                </div>
            </div>

            {/* code for the sidebar filters & main content of courses */}
            <div className={Styles.main}>
                {/* sidebar */}
                {sidebar ? (<div className={Styles.sidebar}>
                    {/* topics */}
                    <h3 className={Styles.heading} onClick={()=>{displayTopics()}}>Topics <ArrowDownIcon className={Styles.icon}/></h3>
                    <div className={Styles.hidden} id="topicshide">
                    <input type="checkbox" name="wd" id="topic" value="**"></input>
                    <label className={Styles.label} for="wd">Web development</label><br/><br/>

                    <input type="checkbox" name="ad" id="topic" value="**"></input>
                    <label className={Styles.label} for="ad">Android development</label><br/><br/>

                    <input type="checkbox" name="rd" id="topic" value="**"></input>
                    <label className={Styles.label} for="rd">React development</label><br/><br/>

                    <input type="checkbox" name="nd" id="topic" value="**"></input>
                    <label className={Styles.label} for="nd">Native development</label><br/><br/>

                    <input type="checkbox" name="p" id="topic" value="**"></input>
                    <label className={Styles.label} for="p">Python</label><br/><br/>
                    </div>
                    
                    {/* prices */}
                    <h3 className={Styles.heading} onClick={()=>{displayPrices()}}>Prices <ArrowDownIcon className={Styles.icon}/></h3>
                    <div className={Styles.hidden} id="priceshide">
                    <input type="checkbox" name="paid" id="price" value="paid"></input>
                    <label className={Styles.label} for="paid">Paid</label><br/><br/>

                    <input type="checkbox" name="free" id="price" value="free"></input>
                    <label className={Styles.label} for="free">Free</label><br/><br/>

                    </div>
                </div>): <></>}
                {/* courses */}
                <div className={Styles.courses}>
                    {courses.map(ele=>(
                        <>
                        <div className={Styles.course}>
                            <img src={ele.image} className={Styles.cleft}></img>
                            <div className={Styles.cright}>
                                <h2 className={Styles.coursename}>{ele.title}</h2>
                                <p className={Styles.desc}>{ele.description}</p>
                                <p className={Styles.descs}>{ele.creator}</p>
                                <h3 className={Styles.rating}>{ele.rating}<Ratingstar rating={ele.rating} /></h3>
                                <p className={Styles.descs}>{ele.timing} total hours | {ele.lectures} leactures | {ele.level}</p>
                            </div>
                            <div className={Styles.crr}>
                                <h3>$255</h3>
                                <p className={Styles.cut}>$400</p>
                            </div>
                        </div>
                        <hr/>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search
