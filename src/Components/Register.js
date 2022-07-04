import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import axios from "axios"

export default function Register(){
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    )
    
    const navigate = useNavigate();
    function register(e){
        e.preventDefault();
        const promise = axios.post('https://audrey-mywallet.herokuapp.com/sign-up', {...formData})


        promise.then(response => navigate('/sign-in'));
        promise.catch(error => {
            if(error.response.status === 409){
                alert("Usuário já cadastrado!")
            }
        })
    }

    function inputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    

    return (
        <Container>
            <form onSubmit={register}>
                <Input type={"text"} formData={formData.name} inputChange={inputChange} inputName={"name"} placeholder={"Nome"}/>
                <Input type={"text"} formData={formData.email} inputChange={inputChange} inputName={"email"}  placeholder={"E-email"}/>
                <Input type={"password"} formData={formData.password} inputChange={inputChange} inputName={"password"} placeholder={"Senha"}/>
                <Input type={"password"} formData={formData.confirmPassword} inputChange={inputChange} inputName={"confirmPassword"} placeholder={"Confirmar Senha"}/>
                <Button type={'submit'}>CADASTRAR</Button>
            </form> 
            <Link style={{color: "#52B6FF"}} to={"/"}><h1>Já tem uma conta? Entre agora!</h1></Link>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #8C11BE;

    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }

    button{
        margin-top: 8px;
        margin-bottom: 25px;
    }
`