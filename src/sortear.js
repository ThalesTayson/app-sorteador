import {React, useState, useEffect } from "react"
import Resultado from './resultado';


function Sortear(props){
    
    const [quant, setQuant] = useState(1);
    const [de, setDe] = useState(1);
    const [ate, setAte] = useState(100);
    const [display, setDisplay] = useState(false);
    
    const styleResult = {
        position: 'fixed',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        left: '0px',
        top: '0px',
        zIndex: '9',
        font: 'bold sans-serif',
        visibility:display,
        display:`${display? 'block':'none'}`

    }

    useEffect(()=>{});
    return(
        <>
            <div>
                <span>Sortear </span><input type="number" id="quant" value={quant} onChange={(evt)=>{setQuant(evt.target.value)}} /><br/>
                <span>entre </span>
                <input type="number" id="de" value={de} onChange={(evt)=>{setDe(evt.target.value)}}/> 
                <span> e </span>
                <input type="number" id="ate" value={ate} onChange={(evt)=>{setAte(evt.target.value)}}/>
            </div>
            <div>
                <input type="button" value="SORTEAR AGORA" onClick={() => {setDisplay(display? false : true)}} />
            </div>
            <div style={styleResult}>
                <Resultado quant={quant} de={de} ate={ate}/>
                <input type="button" value="Sortear Novamente" onClick={() => {setDisplay(display? false : true)}}/>
            </div>
        </>
    )
}

export default Sortear;