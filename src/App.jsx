import { useState } from "react";
import Widget from "./Widget/Widget";

export default function App() {
    const [list, setList] = useState([]);
    const [testament, setTestament] = useState("new");
    
    const add = () => setList([...list, 1]);
    const changeTestament = (e) => setTestament(e.target.value);
    
    return (
        <>
            <button className="add" onClick={add}>Add</button>
            <select className="select" value={testament} onChange={changeTestament}>
                <option value={"old"}>Old Testament</option>
                <option value={"new"}>New Testament</option>
                <option value={"both"}>Both</option>
            </select>

            {
                // add an widget to list show it
                list.map((_, index) => (
                    <Widget key={index} testament={testament}/>
                ))
            }
        </>
    );
}