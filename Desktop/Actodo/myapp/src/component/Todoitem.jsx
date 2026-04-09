function Todoitem(props)
{
    function deletebtn(id)
    {
        const temp =props.activityarr.filter(function(item)
    {
        if(id==item.id)
        {
            return false
        }
        else{
            return true
        }
    })
    props.setactarr(temp)
    }
    return(
        <div className="flex justify-between">
            <p>{props.index+1}. {props.item.Activity}</p>
            <button className="text-red-500" onClick={()=>{deletebtn(props.item.id)}}>Delete</button>
        </div>
        
    )
}

export default Todoitem;