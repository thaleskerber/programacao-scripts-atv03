import { Acumulou } from "../acumulou"
import { Data } from "../data"
import { Resultados } from "../resultado"
import { WrapperDireitaSld } from "./styles"

export function Direita(props: any){
    
    const loteria = props.item

    return (
        <WrapperDireitaSld>
            <Resultados item={loteria}/>
            <Acumulou item={loteria}/>
            <Data item={loteria}/>
        </WrapperDireitaSld>
    )
}