import Header from "./component/header";
import Card from "./component/card";
import Todocontainer from "./component/Todocontainer";
import { useLocation } from "react-router-dom";

function TodoApp() {
  const location = useLocation()
  return (
    <div className="bg-black px-5 py-10 h-full">
      <div className="bg-[#EFEFEF] p-10 border rounded">
        <Header username={location.state.euser} ></Header>
        <div className="flex gap-5 flex-wrap my-5">
          <Card title={"23"} sub={"Chennai"} bg={"#8272DA"}></Card>
          <Card title={"December"} sub={"14:37:02"} bg={"#FD6663"}></Card>
          <Card title={"Built Using"} sub={"React"} bg={"#FCA201"}></Card>
        </div>
        <Todocontainer></Todocontainer>
      </div>
    </div>
  );
}

export default TodoApp;
