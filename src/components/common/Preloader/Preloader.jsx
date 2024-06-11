import React from "react";
import preloader from "../../../image/loading.gif";


let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt="loading" /> 
        </div>
    )
}

export default Preloader;
