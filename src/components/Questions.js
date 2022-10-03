import play from "../img/seta_play.png"
import styled from "styled-components"
import React from "react"
import setavirar from "../img/seta_virar.png"
import { Icon } from "./Icones";

const ClosedQuestions = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const OpenedQuestions = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const QuestionsText = styled.p`
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`

const TextClose = styled.p`

  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color:${({ isClosed }) => AppFinish(isClosed)};
  text-decoration: line-through;
`

function AppFinish(isClosed) {
  if (isClosed === "Zap!") {
    return "#2FBE34"
  }
  else if (isClosed === "Quase não lembrei") {
    return "#FF922E"
  } else {
    return "#FF3030"
  }

}

export default function Questions({ QuestionNumber, perguntas, respostas, onClick, isClosed }) {
  const [textCard, setTextCard] = React.useState(QuestionNumber)
  const [DivCard, setDiv] = React.useState(ClosedQuestions)
  const [imageCard, setImageCard] = React.useState(play)


  if (isClosed) {
    return (
    <ClosedQuestions>
      <TextClose isClosed={isClosed}> {QuestionNumber} </TextClose>
      <Icon img={isClosed} />
    </ClosedQuestions>);
  }
  function ChosenQuestion() {
    if (textCard === QuestionNumber) {
      setTextCard(perguntas)
      setDiv(OpenedQuestions)
      setImageCard(setavirar)

    }
    if (textCard === perguntas) {
      setTextCard(respostas)
      setImageCard()
    }
  }

  let img = ""

  if (imageCard === setavirar) {
    img = "virar"
  }

  if (imageCard === play) {
    img = "play"
  }
  return (<DivCard>
    <QuestionsText> {textCard} </QuestionsText>
    <Icon img={img} onClick={() => { onClick(); ChosenQuestion() }} />
  </DivCard>

  )
}

