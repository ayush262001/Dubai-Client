import React, { useState } from 'react'
import Styles from './Course.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@material-ui/icons/Star';
import {Button} from '@material-ui/core';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 15
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

const responsiveTwo = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1270 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1270, min: 900 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 900, min: 550 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 550, min: 0},
        items: 1
    }
};
function Course() {

    const [course, setCourse] = useState("python");

    const bottomLine = (e, s) => {
        var elements = document.querySelectorAll("#para");
        elements.forEach((element) => {
            element.style.color = "grey";
        });
        elements[e].style.color = "black";

        setCourse(s);
    }

    return (
        <div className={Styles.course}>
            <Carousel responsive={responsive}>
                <div><p className={Styles.para} id="para" onClick={() => bottomLine(0, "python")}>Python</p></div>
                <div><p className={Styles.para} id="para" onClick={() => bottomLine(1, "excel")}>Excel</p></div>
            </Carousel>
            <div className={Styles.courses}>
                    {{
                        "python": (
                            <>
                            <div className={Styles.itemtop}>
                            <h1 className={Styles.top}>Expand your career opportunities with Python</h1>
                            <p  className={Styles.top}>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was</p>
                            <Button className={Styles.buttontop}>Explore Python</Button>
                            </div>
                            <Carousel responsive={responsiveTwo}>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/six.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/two.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/three.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/four.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/five.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/one.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            </Carousel>
                            </>
                        ),
                        "excel": (
                            <>
                            <div className={Styles.itemtop}>
                            <h1 className={Styles.top}>Expand your career opportunities with Excel</h1>
                            <p  className={Styles.top}>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was</p>
                            <Button className={Styles.buttontop}>Explore Python</Button>
                            </div>
                            <Carousel responsive={responsiveTwo}>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/six.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/two.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/three.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/four.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/five.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            <div className={Styles.item}>
                                <img src="/Images/coursesarea/python/one.jpg" className={Styles.itemimage} />
                                <h3 className={Styles.heading}>2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className={Styles.teacher}>Jose Portilla</p>
                                <h3 className={Styles.rating}>5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className={Styles.heading}>₹8,640</h3>
                            </div>
                            </Carousel>
                            </>
                        )
                    }[course]}
            </div>

        </div>
    )
}

export default Course
