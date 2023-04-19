import React from "react";
import "../styles/contador.css"


function Contador({ numClicks }){
    return(
    <div 
    className = "contador">
        {<iframe width="300" height="154" src="https://w2.countingdownto.com/4703000" frameborder="0"></iframe>}


    </div>
    )
}

export default Contador
