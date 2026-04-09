import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import {useState} from "react";


function Addlist() {

    
    const [activityarr,setactarr]=useState([
        {
            id:1,
            Activity:"Go to a walk"
        },
        {
            id:2,
            Activity:"Wake up early in the morning and go for a jogin"
        }
    ])

    return (
        <div className="flex gap-4 flex-wrap">
            <Addtodoform activityarr={activityarr} setactarr={setactarr}></Addtodoform>
            <Todolist activityarr={activityarr} setactarr={setactarr}></Todolist>
        </div>
    )
}

export default Addlist;