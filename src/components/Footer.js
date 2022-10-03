import styled from "styled-components"

const colorButton = [
    "#FF3030",
    "#FF922E",
    "#2FBE34"
]

const Footerzin = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const Contador = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`
const ContainerButtons = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`

const Buttonzin = styled.button`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${(props) => props.color};
    border-radius: 5px;
    border: 1px solid ${(props) => props.color};
    padding:5px;
    width: 90px;
    cursor: pointer;
`

export default function Footer(props) {
    console.log(props)
    return (
        <Footerzin>
            <ContainerButtons>
                <Buttonzin color={colorButton[0]} type="button" onClick={() => props.onClick("Não lembrei")}>Não lembrei</Buttonzin>
                <Buttonzin color={colorButton[1]} type="button" onClick={() => props.onClick("Quase não lembrei")}>Quase não lembrei</Buttonzin>
                <Buttonzin color={colorButton[2]} type="button" onClick={() => props.onClick("Zap!")}>Zap!</Buttonzin>
            </ContainerButtons>
            <Contador>{props.questionsDefined.filter((n) => n !== undefined).length}/{props.questionsDefined.length} CONCLUÍDOS</Contador>
        </Footerzin>
    )
}
