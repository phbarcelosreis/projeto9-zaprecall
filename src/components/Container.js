import styled from "styled-components"
import HeadContainer from "./Head"
import Footer from "./Footer"
import Questions from "./Questions"
import React from "react"

const questions = [{
    perguntas: "O que é JSX?",
    respostas: "Uma extensão de linguagem do JavaScript"
},
{

    perguntas: "O React é __?",
    respostas: "uma biblioteca JavaScript para construção de interfaces"
},
{
    perguntas: "Componentes devem iniciar com __",
    respostas: "letra maiúscula"
},
{
    perguntas: "Podemos colocar __ dentro do JSX",
    respostas: "expressões"
},
{
    perguntas: "O ReactDOM nos ajuda __",
    respostas: "interagindo com a DOM para colocar componentes React na mesma"
},
{
    perguntas: "Usamos o npm para __",
    respostas: "gerenciar os pacotes necessários e suas dependências"
},
{
    perguntas: "Usamos props para __",
    respostas: "passar diferentes informações para componentes "
},
{
    perguntas: "Usamos estado (state) para __",
    respostas: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
}];

const ContainerTela = styled.div
    `
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`

export default function Container() {
    const [questoes, setQuestions] = React.useState(-1);
    const [questionsDefined, setquestionsDefined] = React.useState(new Array(questions.length));

    function QuestionsComplete(props) {
        if (questoes === -1) {
            return;
        }
        const newquestionsDefined = [...questionsDefined];
        if (newquestionsDefined[questoes] === "Zap!") {
            return
        }
        if (newquestionsDefined[questoes] === "Quase não lembrei") {
            return
        }
        if (newquestionsDefined[questoes] === "Não lembrei") {
            return
        }

        newquestionsDefined[questoes] = props;
        setquestionsDefined([...newquestionsDefined]);
    }

    return (
        <ContainerTela>
            <HeadContainer />
            {questions.map((props, i) =>
                <Questions
                    id={i} key={i}
                    QuestionNumber={`Pergunta ${i + 1}`}
                    perguntas={props.perguntas}
                    respostas={props.respostas}
                    onClick={() => setQuestions(i)}
                    isClosed={questionsDefined[i]}
                />
            )}
            <Footer questionsDefined={questionsDefined} onClick={QuestionsComplete} />
        </ContainerTela>
    )
}

