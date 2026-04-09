import Todoitem from "./Todoitem";

function Todolist(props) {
    const activityarr = props.activityarr
    const setactarr= props.setactarr

    return (
        <div className="bg-[#CDC6EB] p-3 rounded-xl flex flex-col flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityarr.length==0?<p>You haven't added any activity yet</p>:""}
            {
                activityarr.map(function(item,index)
            {
                return <Todoitem item={item} index={index} activityarr={activityarr} setactarr={setactarr}></Todoitem>
            })
            }
        </div>
    )
}
export default Todolist;