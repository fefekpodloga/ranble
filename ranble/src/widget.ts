const OLD_TESTAMENT = [
    { book: 'genesis', chapters: 50 },
    { book: 'exodus', chapters: 40 },
    { book: 'leviticus', chapters: 27 },
    { book: 'numbers', chapters: 36 },
    { book: 'deuteronomy', chapters: 34 },
    { book: 'joshua', chapters: 24 },
    { book: 'judges', chapters: 21 },
    { book: 'ruth', chapters: 4 },
    { book: '1samuel', chapters: 31 },
    { book: '2samuel', chapters: 24 },
    { book: '1kings', chapters: 22 },
    { book: '2kings', chapters: 25 },
    { book: '1chronicles', chapters: 29 },
    { book: '2chronicles', chapters: 36 },
    { book: 'ezra', chapters: 10 },
    { book: 'nehemiah', chapters: 13 },
    { book: 'esther', chapters: 10 },
    { book: 'job', chapters: 42 },
    { book: 'psalms', chapters: 150 },
    { book: 'proverbs', chapters: 31 },
    { book: 'ecclesiastes', chapters: 12 },
    { book: 'songofsolomon', chapters: 8 },
    { book: 'isaiah', chapters: 66 },
    { book: 'jeremiah', chapters: 52 },
    { book: 'lamentations', chapters: 5 },
    { book: 'ezekiel', chapters: 48 },
    { book: 'daniel', chapters: 12 },
    { book: 'hosea', chapters: 14 },
    { book: 'joel', chapters: 3 },
    { book: 'amos', chapters: 9 },
    { book: 'obadiah', chapters: 1 },
    { book: 'jonah', chapters: 4 },
    { book: 'micah', chapters: 7 },
    { book: 'nahum', chapters: 3 },
    { book: 'habakkuk', chapters: 3 },
    { book: 'zephaniah', chapters: 3 },
    { book: 'haggai', chapters: 2 },
    { book: 'zechariah', chapters: 14 },
    { book: 'malachi', chapters: 4 },
];
const NEW_TESTAMENT = [
    { book: 'matthew', chapters: 28 },
    { book: 'mark', chapters: 16 },
    { book: 'luke', chapters: 24 },
    { book: 'john', chapters: 21 },
    { book: 'acts', chapters: 28 },
    { book: 'romans', chapters: 16 },
    { book: '1corinthians', chapters: 16 },
    { book: '2corinthians', chapters: 13 },
    { book: 'galatians', chapters: 6 },
    { book: 'ephesians', chapters: 6 },
    { book: 'philippians', chapters: 4 },
    { book: 'colossians', chapters: 4 },
    { book: '1thessalonians', chapters: 5 },
    { book: '2thessalonians', chapters: 3 },
    { book: '1timothy', chapters: 6 },
    { book: '2timothy', chapters: 4 },
    { book: 'titus', chapters: 3 },
    { book: 'philemon', chapters: 1 },
    { book: 'hebrews', chapters: 13 },
    { book: 'james', chapters: 5 },
    { book: '1peter', chapters: 5 },
    { book: '2peter', chapters: 3 },
    { book: '1john', chapters: 5 },
    { book: '2john', chapters: 1 },
    { book: '3john', chapters: 1 },
    { book: 'jude', chapters: 1 },
    { book: 'revelation', chapters: 22 }
];
const BIBLE = [...OLD_TESTAMENT, ...NEW_TESTAMENT];

type Verse = {
    book: string,
    chapter: number,
    verse: number,
    text: string,
};

export async function getRandomVerse(testament: string): Promise<Verse | undefined> {
    try {
        let field: { book: string, chapters: number }[];
        if (testament === "old") field = OLD_TESTAMENT;
        else if (testament === "new") field = NEW_TESTAMENT;
        else field = BIBLE;

        const bookIndex = Math.floor(Math.random() * field.length) + 1;
        const getBookData = field[bookIndex];
        const book = getBookData.book;
        
        // get a random chapter not the ammount of chapters
        const chapter = Math.floor(Math.random() * getBookData.chapters) + 1;

        const getChapterData = await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${book}/chapters/${chapter}.json`)
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