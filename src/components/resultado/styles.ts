import styled from 'styled-components'

export const WrapperResultadosSld = styled.div`
    display: flex;
    margin-left: 25px;
`

export const BolaResultadoSld = styled.div`
    padding: 15px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    margin: 45px 0px 0 25px;
    background-color: ${(props) => props.color}
`

export const NumeroResultadosSld = styled.div`
    font-size: 20px;
    color: ${(props) => props.color}
`