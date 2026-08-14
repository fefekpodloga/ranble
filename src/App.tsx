import { useEffect, useState } from "react";
import Widget from "./Widget";

export default function App() {
    const [testament, setTestament] = useState(() => {
        return localStorage.getItem("testament") || "new";
    });
    const [translation, setTranslation] = useState(() => {
        return localStorage.getItem("translation") || "en-kjv";
    });

    const changeTestament = (e: any) => setTestament(e.target.value);
    const changeTranslation = (e: any) => setTranslation(e.target.value);

    useEffect(() => {
        localStorage.setItem("testament", testament);
    }, [testament]);
    useEffect(() => {
        localStorage.setItem("translation", translation);
    });
    
    return (
        <div className="box">
            <nav className="navigation">
                <select className="select" value={testament} onChange={changeTestament}>
                    <option value={"old"}>Old Testament</option>
                    <option value={"new"}>New Testament</option>
                    <option value={"both"}>Both</option>
                </select>
                <select className="select" value={translation} onChange={changeTranslation}>
                    <option value={"en-kjv"}>en-kjv</option>
                    <option value={"en-asv"}>en-asv</option>
                    <option value={"en-bsb"}>en-bsb</option>
                    <option value={"en-dra"}>en-dra</option>
                </select>
            </nav>
            <Widget testament={testament} translation={translation}/>
        </div>
    );
}