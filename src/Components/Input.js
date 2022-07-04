import styled from "styled-components"

export default function Input({type, formData, inputChange, inputName, placeholder, disabled}){
    return <INPUT type={type} value={formData} onChange={inputChange} name={inputName} placeholder={placeholder} disabled={disabled} required></INPUT>
}

const INPUT = styled.input`
    width: 300px;
    height: 50px;
    margin-bottom: 16px;
    background: #FFFFFF;
    padding-left: 10px;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    ::placeholder{color: #7E7E7E};
`