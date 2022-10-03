import styled from "styled-components";
import logo from "../img/logo.png";

const LogoContainer = styled.div` 
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`
const LogoIMG = styled.img`
    width: 52px;
`

const ContainerText = styled.h1`
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
`

export default function HeadContainer() {
    return (<LogoContainer>
        <LogoIMG src={logo} />
        <ContainerText>ZapRecall</ContainerText>
    </LogoContainer>
    )
}
