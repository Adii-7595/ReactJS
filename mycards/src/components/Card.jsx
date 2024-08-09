import React from "react";
import { FcLike } from 'react-icons/fc';

const Card = ({ course }) => {  // Destructure course from props
    return (
        <div>
            <div>
                <img src={course.image.url} alt={course.title} /> {/* Added alt text for better accessibility */}

                <div>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
                <div>
                    <p>{course.title}</p>
                    <p>{course.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
