import { checkTranslation } from "./translations";

export type Verse = {
    book: string,
    chapter: number,
    verse: number,
    text: string,
};

export const VERSE_TEMPLATE = {
    book: "Loading...",
    chapter: 0,
    verse: 0,
    text: "Loading..."
}

export async function getRandomVerse(testament: string, translation: string): Promise<Verse | undefined> {
    try {
        const field = checkTranslation(testament, translation);
        if (field === undefined) return;

        const bookIndex = Math.floor(Math.random() * field.length) + 1;
        const getBookData = field[bookIndex];
        const book = getBookData.book;

        // get a random chapter not the ammount of chapters
        const chapter = Math.floor(Math.random() * getBookData.chapters) + 1;

        const getChapterData = await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${translation}/books/${book}/chapters/${chapter}.json`)
        // gottenChapterData returns something like OLD_TESTAMENT but the verse number is "verse" and the verse's content is "text"
        const gottenChapterData = await getChapterData.json();

        const verseIndex = Math.floor(Math.random() * gottenChapterData.data.length) + 1;
        const getVerseData = gottenChapterData.data[verseIndex];
        const verse = getVerseData.verse;
        const text = getVerseData.text;

        return {
            book: book,
            chapter: chapter,
            verse: Number(verse),
            text: text,
        };
    } catch (error) {
        console.error(error);
    }
}
