import { useState, useEffect } from 'react';
import styles from './Widget.module.css';
import { getRandomVerse } from './widget';

export default function Widget({ testament }) {
    const [data, setData] = useState({
        book: "none",
        chapter: 0,
        verse: 0,
        text: "Cannot load...",
    });

    useEffect(() => {
        getRandomVerse(testament).then(response => {
            setData({
                book: response.book,
                chapter: response.chapter,
                verse: response.verse,
                text: response.text,
            });
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