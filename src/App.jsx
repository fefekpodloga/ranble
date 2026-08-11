import { useState, useEffect } from "react";
import Widget from "./Widget/Widget";

export default function App() {
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("list");
        // get saved data. if data exists return JSON.parse(savedList) if not return []
        // JSON.parse(savedList) converts datra saved in the JSON format to an array
        return savedList ? JSON.parse(savedList) : [];
    });
    const [testament, setTestament] = useState(() => {
        // return saved testament value or default value "new"
        return localStorage.getItem("testament") || "new";
    });

    // save both list and testament after every change made in the app (like adding a new widget)
    useEffect(() => {
        // it saves the value of 'list' under the key "list". because it's not an string it need JSON.stringify()
        localStorage.setItem("list", JSON.stringify(list));
        // [list] is an dependency array. it saves the value only if it's changed
    }, [list]);
    
    useEffect(() => {
        // here is no need for JSON.stringify() because 'testament' is a string
        localStorage.setItem("testament", JSON.stringify(testament));
    }, [testament]);

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