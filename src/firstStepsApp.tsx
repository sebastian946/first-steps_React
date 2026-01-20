import React from "react";
import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsinCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 2 },
  { productName: "Playstation 5", quantity: 5 },
  { productName: "Gameboy advance", quantity: 0 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsinCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}
