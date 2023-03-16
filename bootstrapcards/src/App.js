import "./index.css";
import Card from "./components/Card";
import cardsArr from './data';

export default function App() {
  const cards = cardsArr.map((ele, index) => {
    return (
      <Card
        {...ele}
        key={index}
        />
    );
  })

  console.log('this is cards:', cards);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
        <Card2 /> */}
      </section>
    </div>
  );
}
