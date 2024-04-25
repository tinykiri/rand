import {useState} from 'react';
import quotes from './quotes';

export default function RandomGenerator() {
    const [random, setRandom] = useState(0);
    const quote = quotes[random];
    const nextQuote = () => setRandom(Math.floor(Math.random() * quotes.length));

    return (
        <>
        <h1>Quote of the day:</h1>
            <h3>{quote}</h3>
            <button onClick={nextQuote}>One more!</button>
        </>
    );
}