import styled from "styled-components"
import React from "react"
import rightIcon from "../img/icone_certo.png"
import wrongIcon from "../img/icone_erro.png"
import almostIcon from "../img/icone_quase.png"
import playSet from "../img/seta_play.png"
import turn from "../img/seta_virar.png"

const Image = styled.img`
    width: 20px;
    cursor: pointer;
`

const Open = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
`

function Icon(props) {
    
    let icon = ""

    if (props.img === "virar") {
        return <Open src={turn} onClick={props.onClick} />
    }

    if (props.img === "play") {
        icon = playSet
    }    

    if (props.img === "Zap!") {
        icon = rightIcon
    }

    if (props.img === "Quase não lembrei") {
        icon = almostIcon
    }

    if (props.img === "Não lembrei") {
        icon = wrongIcon
    }

    return (
    <Image src={icon} onClick={props.onClick} />
    )
}

export { Icon };