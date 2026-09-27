import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${count * 20}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setTotal(data.total);

        setProducts((prevProducts) => {
          const existingIds = new Set(
              prevProducts.map((product) => product.id)
          );

          const newProducts = data.products.filter(
              (product) => !existingIds.has(product.id)
          );

          return [...prevProducts, ...newProducts];
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [count]);

  function handleLoadMore() {
    setCount((prevCount) => prevCount + 1);
  }

  const isLimitReached = products.length >= total;

  return (
      <div className="data-holder-container">
        {products.map((product) => (
            <div className="data-holder" key={product.id}>
              <img
                  src={product.thumbnail}
                  alt={product.title}
              />

              <p>{product.title}</p>
            </div>
        ))}

        <button
            className="load-btn"
            onClick={handleLoadMore}
            disabled={loading || isLimitReached}
        >
          {loading
              ? "Loading..."
              : isLimitReached
                  ? "All Products Loaded"
                  : "Load More Products"}
        </button>
      </div>
  );
}

export default App;
