import QuoteCard from "./QuoteCard";

function Button( { getQuotes, setQuote }) {
    const handleClick = async () => {
        console.log("clicked");

        const data = await getQuotes();
        setQuote(data);
      }

    return <button onClick={handleClick}>Choose a different quote</button>
}

export default Button;