import React from 'react';
import './course.css';

const Course = (props) => {
    // console.log(props.course);
    const {title, img, price, description} = props.course ;

    return (
        <div className="course-container">
            <div className="course-img">
                <img  className="" src={img} alt=""/>
            </div>
            <div className="course-description">
                <h4>{title}</h4>
                <p><small>{description}</small></p>
                <p>Price: ${price}</p>
                <button className="btn btn-primary enroll-btn" onClick={() => props.handleAddCourse(props.course)}>
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Course;