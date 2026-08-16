import Widget from "./Widget/Widget";
import NavigationBar from "./NavigationBar/NavigationBar";
import { useState } from "react";
import { VERSE_TEMPLATE } from "./verse";
import FunFact from "./Funfact";

export default function App() {
    // remember to change manifest.json 
    const version = "v.1.4.0";

    const [testament, setTestament] = useState(() => {
        return localStorage.getItem("testament") || "new";
    });
    const [translation, setTranslation] = useState(() => {
        return localStorage.getItem("translation") || "en-kjv";
    });
    const [data, setData] = useState(VERSE_TEMPLATE);
    const [funfact, setFunFact] = useState("Fun fact: give refreshing some time!");

    return (
        <div className="box">
            <p>{version}</p>
            <NavigationBar testament={testament} setTestament={setTestament} translation={translation} setTranslation={setTranslation} setData={setData} />
            <Widget testament={testament} translation={translation} data={data} setData={setData} />
            <FunFact funfact={funfact} setFunFact={setFunFact} />
        </div>
    );
}
