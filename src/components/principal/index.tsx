import { Direita } from "../direita"
import { Esquerda } from "../esquerda"
import { WrapperPrincipalSld } from "./styles"

export function Principal(props: any){

    const loteria = props.item

    return (
        <WrapperPrincipalSld>
            <Esquerda item={loteria} />
            <Direita item={loteria} />
        </WrapperPrincipalSld>
    )
}