import { useEffect, useState } from 'react';
import styles from './Widget.module.css';
import { getRandomVerse } from './widget';

export default function Widget(pops: { testament: string }) {
    const [data, setData] = useState({
        book: "none",
        chapter: 0,
        verse: 0,
        text: "Cannot load...",
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
        <div className={styles.widget}>
            <h1>{data.text}</h1>
            <h2>{data.book} {data.chapter}:{data.verse}</h2>
        </div>
    );
}