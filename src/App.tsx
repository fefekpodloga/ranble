import Widget from "./Widget";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
import { VERSE_TEMPLATE } from "./widget";

export default function App() {
    // remember to change manifest.json 
    const version = "v.1.3.0";

    const [testament, setTestament] = useState(() => {
        return localStorage.getItem("testament") || "new";
    });
    const [translation, setTranslation] = useState(() => {
        return localStorage.getItem("translation") || "en-kjv";
    });
    const [data, setData] = useState(VERSE_TEMPLATE);

    return (
        <div className="box">
            <NavigationBar testament={testament} setTestament={setTestament} translation={translation} setTranslation={setTranslation} setData={setData} />
            <Widget testament={testament} translation={translation} data={data} setData={setData}/>
            <p>Tip: remember to give refreshing some time! {version}</p>
        </div>
    );
}
