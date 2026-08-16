import type React from "react";
import { useEffect } from "react";
import { getAFunFact } from "./funfacts";

type FunFactProps = {
    funfact: string,
    setFunFact: React.Dispatch<React.SetStateAction<string>>,
};

export default function FunFact({ funfact, setFunFact }: FunFactProps) {
    useEffect(() => {
        const randomFunFunct = getAFunFact();
        setFunFact(randomFunFunct);
    }, []);
    
    return <p>{funfact}</p>;
}