import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Context/UserContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"

export default function App(){
    const [user, setUser] = useState("")

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/sign-up" element={<Register/>}/>
                    <Route path="/home" element={<Home/>}/>
{/*                     <Route path="/users/:ID_DO_USUARIO" element={<Users/>}/>
                    <Route path="/users/:ID_DO_USUARIO/update" element={<Update/>}/> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}