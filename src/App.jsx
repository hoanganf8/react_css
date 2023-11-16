import "./assets/css/style.css";
import "./assets/scss/style.scss";
import Card from "./components/Card/Card";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <div className="container">
      <h1>React CSS</h1>
      <div className="content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde libero
          beatae ad ipsum, tempore, dolor animi sed, rem nisi laboriosam illo?
          Perspiciatis mollitia dolorum commodi odio et non earum quod!
        </p>
        <button className="btn">Đăng ký khóa học</button>
      </div>
      <div className="main">
        <h2>Học React không khó</h2>
        <button className="btn">Đăng ký khóa học</button>
      </div>
      <Card />
      <Products />
    </div>
  );
};

export default App;
