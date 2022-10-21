import {React, useState, useEffect } from "react"
import Resultado from './resultado';


function Sortear(props){
    
    const [quant, setQuant] = useState(1);
    const [de, setDe] = useState(1);
    const [ate, setAte] = useState(100);
    const [display, setDisplay] = useState(true);

    useEffect(()=>{});
    return(
        <>
            <div className={display? 'main' : 'oculto'}>
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
            </div>
            <div className={display? 'oculto' : 'main'}>
                <Resultado quant={quant} de={de} ate={ate}/>
                <div>
                    <input type="button" value="Sortear Novamente" onClick={() => {setDisplay(display? false : true)}}/>
                </div>
            </div>
        </>
    )
}

export default Sortear;