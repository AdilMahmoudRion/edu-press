// course section
import React from "react";
import "./Course.css";
import img1 from "./CourseImg/course_03-370x200_c.jpg";
import img2 from "./CourseImg/course_04-370x200_c.jpg";
import img3 from "./CourseImg/course_05-370x200_c.jpg";
import img4 from "./CourseImg/course_06-370x200_c.jpg";
import img5 from "./CourseImg/course_07-370x200_c.jpg";
import img6 from "./CourseImg/course_08-370x200_c.jpg";

const Course = () => {
  return (
    <div className="container pt-5">

      {/* heading */}
      <p className="text-center fs-4">
        The EduPress template compatible with all mobile devices and modern
        browsers. <br />
        This template coded with Bootstrap Framework
      </p>
      {/* Popular courses */}
      <div className="popular-courses">
        <div className="course">
          <div>
            <img className="course-img" src={img1} alt="" />
          </div>
          <div className="course-title ">
            <p>Learning Email Marketing</p>
            <p className="price">FREE</p>
          </div>
        </div>
        <div className="course">
          <div>
            <img className="course-img" src={img2} alt="" />
          </div>
          <div className="course-title ">
            <p>Put Your Site Online</p>
            <p className="price">$30.00</p>
          </div>
        </div>
        <div className="course">
          <div>
            <img className="course-img" src={img3} alt="" />
          </div>
          <div className="course-title ">
            <p>Develop IOS & Android</p>
            <p className="price">$89.00</p>
          </div>
        </div>
        <div className="course">
          <div>
            <img className="course-img" src={img4} alt="" />
          </div>
          <div className="course-title ">
            <p>Onepage Design (Landing)</p>
            <p className="price">FREE</p>
          </div>
        </div>
        <div className="course">
          <div>
            <img className="course-img" src={img5} alt="" />
          </div>
          <div className="course-title ">
            <p>Web Design</p>
            <p className="price">$15.00</p>
          </div>
        </div>
        <div className="course">
          <div>
            <img className="course-img" src={img6} alt="" />
          </div>
          <div className="course-title ">
            <p>SEO Strategy</p>
            <p className="price">$10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
