import { createContext, useState } from "react";
import { nikeData } from "./data/nike-data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";

import "./styles.css";

// 1. Create the context
export const ProductContext = createContext(null);

function App() {
  const [data, setData] = useState(nikeData);
  const [cart, setCart] = useState([]);

  // 2. Wrap the components inside the 
  // Context Provider and pass the values
  return (
    <ProductContext.Provider value={{ data, cart, setCart }}>
      <div className="">
        <Header shoppingCart={cart} />
        <ProductsList />
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
