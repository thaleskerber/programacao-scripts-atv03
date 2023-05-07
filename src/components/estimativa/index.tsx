import { UseTheme } from "../../hooks";
import { ValorPremioSld, WrapperEstimativaSld } from "./styles";

export function Estimativa(props: any) {

    const { theme } = UseTheme()

    function converterValor(value: number) {
        return value.toLocaleString("pt-br", { style: "currency", currency: "BRL"})
    }

    return (
        <>
            <WrapperEstimativaSld>
            Estimativa de prêmio do próximo concurso. Sorteio em {props.item.dataProximoConcurso}:
            </WrapperEstimativaSld>
            <ValorPremioSld color={theme.loteria}>{converterValor(props.item.valorEstimadoProximoConcurso)}</ValorPremioSld>
        </>
    )
}