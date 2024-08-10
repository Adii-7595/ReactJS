import React, { useState } from "react";
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    let setCategory = props.setCategory;

    const [likedCourses, setLikedCourses]= useState([]);

    const getCourses = () => {
        let allCourses = [];

        if (category === 'All'){
             // Loop through each category of courses

            Object.values(courses).forEach(array =>{
                array.forEach(courseData =>{
                    allCourses.push(courseData);
                })
            })
              
            return allCourses;
        }
        else if(category === 'Lifestyles'){
          
            return courses.Lifestyle;

        }
        else{
            //mein sirf specific categoy ka data pass karunga
            // console.log(courses)
            // console.log(category)
            return courses[category] || []
        }
       
    };

    return (
        <div className="mycards">
            {getCourses().map((course) => (
                <Card key={course.id} course={course} likedCourses = {likedCourses} setLikedCourses= {setLikedCourses} /> // Assuming course has an `id` property
            ))}
        </div>
    );
};

export default Cards;
