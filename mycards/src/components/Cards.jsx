import React from "react";
import Card from './Card';

const Cards = ({ courses }) => {
    const getCourses = () => {
        let allCourses = [];
        if (courses) {
            // Loop through each category of courses
            Object.values(courses).forEach((courseCategory) => {
                // Ensure courseCategory is an array before looping
                if (Array.isArray(courseCategory)) {
                    courseCategory.forEach((course) => {
                        allCourses.push(course); // Add course to the array
                    });
                }
            });
        }
        return allCourses;
    };

    return (
        <div>
            {getCourses().map((course) => (
                <Card key={course.id} course={course} /> // Assuming course has an `id` property
            ))}
        </div>
    );
};

export default Cards;
