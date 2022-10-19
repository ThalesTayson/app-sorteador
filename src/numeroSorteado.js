import {React} from "react"

function NumeroSorteado(props){
    var numero = props.numero;
    return(
        <>  
            <div className="numeroSort"> {numero} </div>
        </>
    )
}

export default NumeroSorteado;