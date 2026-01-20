import React, { useState } from "react";
//import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";
interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount((prev) => (prev !== undefined ? prev + 1 : 1));
  };
  const handleSubtract = () => {
    setCount((prev) => (prev !== undefined && prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className={styles["item-row"]}>
      <span
        className={styles["item-text"]}
        style={{ color: count === 1 ? "red" : "black" }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count ? count : 0}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
