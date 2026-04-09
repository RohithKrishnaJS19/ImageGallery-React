import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate()
    const [euser, seteuser] = useState()
    function handleuser(event) {
        seteuser(event.target.value.trim())
    }

    const [epassword, setepassword] = useState()
    function handlepassword(event) {
        setepassword(event.target.value.trim())
    }

    function login() {
        var userfound=false
        props.users.forEach(function (item) {
            if (euser == item.user && epassword == item.password) {
                console.log("Login Successful")
                userfound=true
                navigate("/Todo",{state:{euser}})
            }
        })
        if(userfound == false)
        {
            console.log("Login faild")
            setadvice(false)
        }
    }

    const [advice, setadvice] = useState(true)
    return (
        <div className="bg-black px-5 py-10 h-full">
            <div className="bg-[#EFEFEF] p-10 rounded-md flex flex-col gap-3">
                <div>
                    <h1 className="text-2xl font-medium">Hey Hi 👋</h1>
                    {advice ? <p className="font-medium">I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Signup before you login</p>}
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <input onChange={handleuser} placeholder="username" className="p-2 border border-black rounded bg-transparent"></input>
                    <input onChange={handlepassword} placeholder="password" className="p-2 border border-black rounded bg-transparent"></input>
                    <button onClick={login} className="bg-[#9286dc] px-5 py-2 rounded">Login</button>
                </div>
                <div>
                    <p className="font-medium">Don't have an account ?<Link to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;