import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import {toast} from 'react-toastify';

const Card = (props ) => {  // Destructure course from props
    let course = props.course
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;



    function clickHandler(){

        if(likedCourses.includes(course.id)){
            //agar pehle se like h 
            setLikedCourses((prev)=>prev.filter((cid)=>(cid != course.id)));
            toast.warning('like removed')
        }
        else{
            //agar oehle se like nhi h
            //insert karna h liked courses me

            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev, course.id]);
            }

            toast.success('liked Successfully');


        }


    };
    return (
        <div className="card-container">
            <div className="card-container-img">
                <img src={course.image.url} alt={course.title} />

                <div >
                    <button onClick = {clickHandler}>
                        {likedCourses.includes(course.id) ?(<FcLike fontSize="1.75rem" />): (<FcLikePlaceholder fontSize="1.75rem" />)}
                    </button>
                </div>
            </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>
    )
};

export default Card;
