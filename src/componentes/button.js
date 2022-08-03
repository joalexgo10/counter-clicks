import React from "react";
import "../styles/button.css"

function Button({texto, esBotonClic, manejadorClicks}){
    return(
      <button
      className={esBotonClic ? "button-click" : "button-reiniciar"}
      onClick={manejadorClicks} >
        {texto}
      </button>
    )
}

export default Button