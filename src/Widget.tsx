import { useEffect, useState } from 'react';
import { getRandomVerse } from './widget';

export default function Widget(pops: { testament: string }) {
    const [data, setData] = useState({
        book: "none",
        chapter: 0,
        verse: 0,
        text: "Loading...",
    });

    useEffect(() => {
        getRandomVerse(pops.testament).then(response => {
            if (response !== undefined) {
                setData({
                    book: response.book,
                    chapter: response.chapter,
                    verse: response.verse,
                    text: response.text,
                });
            } else {
                console.log("response is undefined..?");
            }
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="widget">
            <h2>{data.text}</h2>
            <h3>{data.book} {data.chapter}:{data.verse}</h3>
        </div>
    );
}