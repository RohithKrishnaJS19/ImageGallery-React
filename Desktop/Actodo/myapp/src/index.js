import TodoApp from './TodoApp';
import './index.css';
import ReactDOM from "react-dom/client";
import Login from "./Pages/login";
import Signup from "./Pages/signup"
import "./index.css";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import {useState} from "react";

const root = ReactDOM.createRoot(document.getElementById("root"))

function App()
{
    const [users,setusers] = useState(
            [
                {
                    user:"Rohith",
                    password:"1234"
                }
            ]
        )
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login users={users} />}></Route>
                <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
                <Route path='/Todo' element={<TodoApp/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

root.render(<App/>)

