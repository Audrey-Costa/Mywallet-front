import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserContext from '../Context/UserContext'
import OperationButton from './OperationButton'
import {GiExitDoor} from 'react-icons/gi'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { Audio } from 'react-loader-spinner'

export default function Home(){
    const {user} = useContext(UserContext);
    const [data, setData] = useState("")

    useEffect(()=>{
        const promise = axios.get("https://audrey-mywallet.herokuapp.com/sign-in/user", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
    
        promise.then(response => {
            setData(response.data);
        
        })
    },[user.token]);

    return (
        <Container>
            {data !== "" ? 
            <><div><h1>Olá, {data.name}</h1><GiExitDoor /></div><div><ul> {data.map((element, index) => <Link key={index} style={{ textDecoration: "none" }} to={`/home/${element.id}`}><li>{element.description}</li></Link>)}</ul></div><div><OperationButton><AiOutlinePlusCircle />Nova Entrada</OperationButton><OperationButton><AiOutlineMinusCircle />Nova Entrada</OperationButton></div></> : <Audio height="100" width="100" color='white' ariaLabel='loading'/>}
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:nth-child(3){
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center
    }
`