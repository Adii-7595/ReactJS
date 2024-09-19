import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();



    function backHandler(){
        navigate(-1)
    }
    function clickHandler() {
        navigate("/support")

    }
    return (
        <div>
            <div>
                This is About Page

            </div>
            <br />
            <button onClick={clickHandler}>Move To Support Page</button>
            <button onClick={backHandler}>Go back</button>

        </div>
    )
}

export default About