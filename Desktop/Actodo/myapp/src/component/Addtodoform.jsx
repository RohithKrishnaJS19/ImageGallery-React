import {useState} from "react";

function Addtodoform(props) {

    const activityarr = props.activityarr
    const setactarr= props.setactarr

    const [entered,setentered] = useState("")
    function input(event)
    {
        setentered(event.target.value)
    }
    function add()
    {
        setactarr([...activityarr,{id:activityarr.length+1,Activity:entered}])
        setentered("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={entered} onChange={input} className="bg-transparent border border-black p-1" placeholder="Next Activity ?"></input>
                <button className="bg-black text-white p-1 border border-black" onClick={add} disabled={!entered.trim()}>Add</button>
            </div>
        </div>
    )
}
export default Addtodoform;