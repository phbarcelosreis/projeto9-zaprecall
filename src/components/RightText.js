import styled from "styled-components"


const CorrectText = styled.p`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #2FBE34;
  text-decoration: line-through;
`

function TextAcert (props) {  

    if (props.img === "Zap!") {
        <CorrectText></CorrectText>
    }

    if (props.img === "Quase não lembrei") {
        
    }

    if (props.img === "Não lembrei") {
       
    }

    return   <CorrectText></CorrectText>
}

export { TextAcert };