import styled from "styled-components"

export default function OperationButton(props){
    return <BUTTON type={props.type} onClick={props.onClick}>{props.children}</BUTTON> 
}

const BUTTON = styled.button`
    width: 120px;
    height: 120px;
    background: #a328d6;
    border-radius: 12px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
`