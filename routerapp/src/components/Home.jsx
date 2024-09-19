import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    function backHandler(){
        navigate(-1)
    }


    function clickHandler() {
        navigate("/about")

    }
    return (
        <div>

            <div>

                This is my Home Page

            </div>
            <br />
            <button onClick={clickHandler}>Move to About Page</button>
            <button onClick={backHandler}>Go back</button>



        </div>
    )
}

export default Home;