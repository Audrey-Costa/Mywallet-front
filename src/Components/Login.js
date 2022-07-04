import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import UserContext from "../Context/UserContext"
import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Logo from "../saco-de-dinheiro.png"

export default function Login(){
    const {setUser} = useContext(UserContext)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    function login(e){
        e.preventDefault();
        const promise = axios.post('https://audrey-mywallet.herokuapp.com/sign-in', {...formData});

        promise.then(response => {
            setUser(response.data);
            navigate('/home');
        });
        promise.catch(error=> {alert("Email ou senha incorretos!")});
    }

    function inputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <Container>
            <IMG src={Logo} alt="Logo MyWallet" />
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                <Input type={"text"} formData={formData.email} inputName={"email"} inputChange={inputChange} placeholder={"E-mail"}/>
                <Input type={"password"} formData={formData.password} inputName={"password"} inputChange={inputChange} placeholder={"Senha"}/>
                <Button type={'submit'}>ENTRAR</Button>
            </form>
            <Link style={{color: "#52B6FF"}} to={`/sign-up`}><h2>Não possui uma conta? Cadastre-se</h2></Link>
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
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 50px;
        margin-bottom: 20px;
        color: #e6cc04;
    }

    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        text-align: center;
    }

    button{
        margin-top: 8px;
        margin-bottom: 25px;
    }
`

const IMG = styled.img`
    width: 200px;
    margin-top: 68px;
    margin-bottom: 12px;
`