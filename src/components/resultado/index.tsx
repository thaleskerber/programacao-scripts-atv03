import { UseTheme } from "../../hooks"
import { BolaResultadoSld, NumeroResultadosSld, WrapperResultadosSld } from "./styles"

export function Resultados(props: any){

    const loteria = props.item
    const { theme } = UseTheme()

    return (
        <WrapperResultadosSld>
            {loteria.dezenas.map((item: any) => (
                <BolaResultadoSld key={item} color={theme.bola}>
                    <NumeroResultadosSld color={theme.bolafonte}>{item}</NumeroResultadosSld>
                </BolaResultadoSld>
            ))}
        </WrapperResultadosSld>
    )
}