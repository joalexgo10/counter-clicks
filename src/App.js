import React from "react";
import "./App.css";
import logo from "./imagenes/fcc_primary_large.svg";
import Button from "./componentes/button.js";
import Contador from "./componentes/contador";

function App() {
 
  const [numClick, setNumClick]= React.useState(0) 

  const manejadorClicks = () => {
    
    setNumClick(numClick+1)
  };
  const reiniciarContador = () => {
    setNumClick(0)
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="Logo FreecodeCamp" />
        
      </div>

      <div>
        <div className="contenedor-principal">
         <Contador
         numClicks={numClick}/>

          <Button
            esBotonClic={true}
            manejadorClicks={manejadorClicks}
            texto="Click"
          />
          <Button
            esBotonClic={false}
            manejadorClicks={reiniciarContador}
            texto="Reiniciar"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
