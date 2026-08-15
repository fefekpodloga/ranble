import React, { useEffect } from "react";
import { getRandomVerse, type Verse } from "./widget";

type NavigationBarProps = {
    testament: string,
    setTestament: React.Dispatch<React.SetStateAction<string>>,
    translation: string,
    setTranslation: React.Dispatch<React.SetStateAction<string>>,
    setData: React.Dispatch<React.SetStateAction<Verse>>,
};

export default function NavigationBar({ testament, setTestament, translation, setTranslation, setData }: NavigationBarProps) {
    const changeTestament = (event: any) => setTestament(event.target.value);
    const changeTranslation = (event: any) => setTranslation(event.target.value);

    const refresh = () => {
        getRandomVerse(testament, translation).then(response => {
            if (response !== undefined) setData(response);
        });
    }

    useEffect(() => {
        localStorage.setItem("testament", testament);
    }, [testament]);
    useEffect(() => {
        localStorage.setItem("translation", translation);
    }, [translation]);
    
    return (
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
            <button className="refresh" onClick={refresh}>⟳ Refresh</button>
        </nav>
    );
}