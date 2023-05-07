import { Estimativa } from "../estimativa"
import { NomeLoteria } from "../nome-loteria"
import { WrapperEsquerdaSld } from "./styles"

export function Esquerda(props: any){

    const loteria = props.item

    return (
        <WrapperEsquerdaSld>
            <NomeLoteria />
            <Estimativa item={loteria}/>
        </WrapperEsquerdaSld>
    )
}
