import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/**
 *
 * @@typedef Product
 
 * @property {number} id - Id sản phẩm
 * @property {string} images[0] - Ảnh sản phẩm
 * @property {string} title - Tên sản phẩm
 * @property {string} brand - Thương hiệu sản phẩm
 * @property {number} price - Giá tiền
 */
/**
 *
 * @typedef ProductProps
 *
 * @property {Product} product - Object chứa thông tin sản phẩm
 */

/**
 * Render ra một sản phẩm
 * @param {ProductProps} props Props truyền vào
 *
 */
function ProductCards({ product }) {
  const heightStyle = {
    height: "250px",
  };
  return (
    <div className="col-4 product">
      <div className="img-wrap " style={heightStyle}>
        <img src={product.images[0]} className="img-fluid h-100" alt="" />
      </div>
      <div className="title">{product.title}</div>
      <div className="brand">{product.brand}</div>
      <div className="price">{product.price}</div>
    </div>
  );
}
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts();
  }, []);
  let items = products.map((element) => (
    <ProductCards key={element.id} product={element} />
  ));
  return (
    <div className="wrap-list cointainer">
      <h2>Products List</h2>
      <div className="list row">{items}</div>
    </div>
  );
}

export default App;
