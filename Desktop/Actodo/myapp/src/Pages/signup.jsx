import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import { Navigate } from "react-router-dom";

function Signup(props) {
    const navigate = useNavigate()
    const [suser,setsuser] = useState()
    function handleuser(event)
    {
        setsuser(event.target.value.trim())
    }
    const [spass,setspass]=useState()
    function handlepassword(event)
    {
        setspass(event.target.value.trim())
    }
    function Signup()
    {
        props.setusers([...props.users,{user:suser,password:spass}])
        navigate('/')
    }

    return (
        <div className="bg-black px-5 py-10 h-full">
            <div className="bg-[#EFEFEF] p-10 rounded flex flex-col gap-3">
                <div>
                    <h1 className="text-4xl font-medium">Hey Hi 👋</h1>
                    <p>You can Signup here : )</p>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <input onChange={handleuser} placeholder="username" className="p-2 rounded border border-black bg-transparent"></input>
                    <input onChange={handlepassword} placeholder="password" className="p-2 rounded border border-black bg-transparent"></input>
                    <input placeholder="Confirm password" className="p-2 rounded border border-black bg-transparent"></input>
                    <button onClick={Signup} className="px-5 py-2 bg-orange-500 rounded">Sign Up</button>
                </div>
                <div>
                    <p className="font-medium">Don't have an account ? <Link to='/'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;