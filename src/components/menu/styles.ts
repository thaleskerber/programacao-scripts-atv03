import styled from 'styled-components'

export const WrapperSld = styled.nav`
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
`;

export const UlSld = styled.ul`
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
`;

export const LiSld = styled.li`
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
`;

export const SelectedSld = styled.p`
    color: #aaa;
    text-decoration: none;
`

export const TitleSld = styled.p`
    color: ${(props) => props.color}
`