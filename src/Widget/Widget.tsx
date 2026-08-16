import { useEffect } from 'react';
import { getRandomVerse, type Verse } from '../verse';
import styles from './Widget.module.css';

type WidgetProps = {
    testament: string,
    translation: string,
    data: Verse,
    setData: React.Dispatch<React.SetStateAction<Verse>>,
};

export default function Widget({ testament, translation, data, setData }: WidgetProps) {
    useEffect(() => {
        getRandomVerse(testament, translation).then(response => {
            if (response !== undefined) setData(response);
        });
    }, [])

    return (
        <div className={styles.widget}>
            <h2>{data.text}</h2>
            <h3>{data.book} {data.chapter}:{data.verse}</h3>
            <p>{translation} using <a href='https://github.com/wldeh/bible-api'>Henok Woldesenbet's bible-api (github)</a></p>
        </div>
    );
}