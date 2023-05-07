import { WrapperAcumulouSld } from "./styles"

export function Acumulou(props: any){

    const loteria = props.item

    const exibirResultado = () => {
        if(loteria.acumulado){
            return "ACUMULOU!"
        }

        if (loteria.quantidadeGanhadores > 0) {
            const quantidadeGanhadores = loteria.quantidadeGanhadores
            return `${quantidadeGanhadores} GANHADOR${quantidadeGanhadores > 1 ? 'ES' : ''}`
        } else{
            return "ACUMULOU!"
        }
    }

    return <WrapperAcumulouSld>{exibirResultado()}</WrapperAcumulouSld>
}