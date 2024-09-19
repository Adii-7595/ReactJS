import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {


    const navigate = useNavigate();


    function backHandler(){
        navigate(-1)
    }


    function clickHandler() {
        navigate("/labs")

    }
    return (
        <div>
            <div>
                This is Support Page

            </div>
            <br />
            <button onClick={clickHandler}>Move To Labs Page</button>
            <button onClick={backHandler}>Go back</button>
        </div>
    )
}

export default Support;