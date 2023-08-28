import "./App.css";
import ProductCard from "./components/ProductCard";
import productData from "./data/productData";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="main-title">E-commerce with React.js</h2>
      </header>
      <main className="cards-container">
        <ProductCard
          title={productData[0].title}
          price={productData[0].price}
          description={productData[0].description}
          image={productData[0].image}
        />
        <ProductCard
          title={productData[1].title}
          price={productData[1].price}
          description={productData[1].description}
          image={productData[1].image}
        />
        <ProductCard
          title={productData[2].title}
          price={productData[2].price}
          description={productData[2].description}
          image={productData[2].image}
        />
        <ProductCard
          title={productData[3].title}
          price={productData[3].price}
          description={productData[3].description}
          image={productData[3].image}
        />
        <ProductCard
          title={productData[4].title}
          price={productData[4].price}
          description={productData[4].description}
          image={productData[4].image}
        />
        <ProductCard
          title={productData[5].title}
          price={productData[5].price}
          description={productData[5].description}
          image={productData[5].image}
        />
      </main>
    </div>
  );
}

export default App;
