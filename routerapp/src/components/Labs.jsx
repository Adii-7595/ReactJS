import React from "react";

import { useNavigate } from "react-router-dom";

const Labs = () => {

const navigate = useNavigate();


function backHandler(){
    navigate(-1)
}


function clickHandler(){
    navigate("/")

}

    return (

        <div>
            <div>
                This is Labs Page

            </div>
            <br></br>
            <button onClick={clickHandler}> Move To Home Page</button>
            <button onClick={backHandler}>Go back</button>


        </div>
    )
}

export default Labs;