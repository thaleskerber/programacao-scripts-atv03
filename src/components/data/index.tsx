import { WrapperDataSld } from "./styles"

export function Data(props: any){

    const loteria = props.item
    
    return (
        <WrapperDataSld>Concurso {loteria.numeroDoConcurso} - {loteria.dataPorExtenso}</WrapperDataSld>
    )
}