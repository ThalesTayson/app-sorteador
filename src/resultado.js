import {React} from "react"
import NumeroSorteado from './numeroSorteado';

const randonNumero = (de, ate) => {
    return Math.floor((Math.random() * (ate - de + 1)) + de);
}

const listaDeNumeros = (quant, de, ate) => {
    let lista = [];
    for (let i = 0; i < quant; i++){
        lista.push(randonNumero(de, ate));
    }
    return lista;
}

function Resultado(props){
    var quant = props.quant;
    var de = props.de;
    var ate = props.ate;
    var lista = listaDeNumeros(quant, de, ate);
    
    return(
        <>  
            {lista.map((num) =>{
                return <NumeroSorteado numero={num}/>
            })}
        </>
    )
}

export default Resultado;