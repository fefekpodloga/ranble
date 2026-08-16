const FUNFACTS = [
    "Fun fact: give refreshing some time!",
    "Fun fact: change your Bible translations to feed your needs",
    "Fun fact: you can also refresh by closing and opening up the extension",
    "Fun fact: updates aren't always about features"
];

export function getAFunFact(): string {
    const funfactIndex = Math.floor(Math.random() * FUNFACTS.length) + 1;
    const funfact = FUNFACTS[funfactIndex];
    return funfact;
}