import styled from "styled-components"

export default function Button(props){
    return <BUTTON type={props.type} onClick={props.onClick}>{props.children}</BUTTON> 
}

const BUTTON = styled.button`
    width: 310px;
    height: 50px;
    background: #a328d6;
    border-radius: 8px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
`