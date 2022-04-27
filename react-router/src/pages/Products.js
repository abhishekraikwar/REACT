import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>The Product Page</h1>
      <ul>
        <li>
          <Link to="/Products/p1">Product 1</Link>
        </li>
        <li>
          <Link to="/Products/p2">Product 2</Link>
        </li>
        <li>
          <Link to="/Products/p3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
