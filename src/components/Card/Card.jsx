import clsx from "clsx";
import style from "./Card.module.scss";
const Card = () => {
  return (
    <div className="card">
      <h1>Demo Card</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        doloremque tempore amet iste eveniet, eius earum officia molestias
        obcaecati fugit reiciendis, quia fugiat dolor voluptate, totam placeat
        dolores unde sed?
      </p>
      <button className={clsx(style.btn)}>Xem chi tiết</button>
    </div>
  );
};

export default Card;
