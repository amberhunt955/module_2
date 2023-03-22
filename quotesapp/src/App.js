// Import data and components
import { getQuotes } from './services/qg-api';
import Header from './components/Header';
import Button from './components/Button';
import QuoteCard from './components/QuoteCard';

import { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);

  useMemo(() => {
    const fetchData = async () => {
      const data = await getQuotes();
      setQuote(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      
      <Button getQuotes={getQuotes} setQuote={setQuote} />
      
      {<QuoteCard quote={quote} />}
    </div>
  );
}

export default App;
