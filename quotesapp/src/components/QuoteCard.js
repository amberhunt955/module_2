
function QuoteCard( {quote} ) {
    console.log(quote);

    const loaded = () => {
        return (
            <div>
                <h2>"{quote.quoteText}" - {quote.quoteAuthor}</h2>
            </div>
        )
    }
    
    const loading = () => <h2>Quote loading...</h2>
    
    return quote ? loaded() : loading();

}

export default QuoteCard;