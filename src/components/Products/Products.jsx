import clsx from "clsx";
import style from "./Products.module.scss";
const Products = () => {
  return (
    <div className="products">
      <h1>Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quas
        quam ea a iure earum voluptatibus corporis doloribus nostrum libero!
        Sed, similique amet? Vero, hic. Sunt suscipit sint ex a.
      </p>
      <button className={clsx(style.btn)}>Xem chi tiết</button>
    </div>
  );
};

export default Products;
