import React from 'react'
import AboveCourses from '../Components/HomePage/AboveCourses/AboveCourses';
import Banner from '../Components/HomePage/Banner/Banner';
import Categories from '../Components/HomePage/Categories/Categories';
import Courses from '../Components/HomePage/Courses/Course';
import EnglishCourse from '../Components/HomePage/EnglishCourses/English';
import Featured from '../Components/HomePage/Featured/Featured';
import NavBar from '../Components/Navbar/Navbar';
import NavbarMobile from '../Components/Navbar/NavbarMobile';
function Home() {
    return (
        <div>
            <NavBar />
            <NavbarMobile/>
            <Banner /><br/>
            <AboveCourses /><br/>
            <Categories /><br/>
            <Courses /><br/>
            <EnglishCourse /><br/>
            <Featured /><br/>
        </div>
    )
}

export default Home
