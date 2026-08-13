import { useEffect, useState } from "react";
import Widget from "./Widget";

export default function App() {
    const [testament, setTestament] = useState(() => {
        return localStorage.getItem("testament") || "new";
    });

    const changeTestament = (e: any) => setTestament(e.target.value);

    useEffect(() => {
        localStorage.setItem("testament", testament);
    }, [testament]);
    
    return (
        <div className="box">
            <select className="select" value={testament} onChange={changeTestament}>
                <option value={"old"}>Old Testament</option>
                <option value={"new"}>New Testament</option>
                <option value={"both"}>Both</option>
            </select>
            <Widget testament="new" />
        </div>
    );
}