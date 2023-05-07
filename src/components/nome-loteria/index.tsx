import { UseTheme } from "../../hooks"
import { ImgNomeLoteriaSld, NomeLoteriaSld } from "./styles"

export function NomeLoteria() {

    const { theme } = UseTheme()

    return (
        <>
            <ImgNomeLoteriaSld src={theme.logo} alt={"Logo " + theme.nome} />
            <NomeLoteriaSld color={theme.loteria}>{theme.nome?.toUpperCase()}</NomeLoteriaSld>
        </>
    )
}