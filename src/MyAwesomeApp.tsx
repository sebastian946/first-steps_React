import React, { type CSSProperties } from "react";

const firstName = "Sebastian";
const lastName = "Duque";

const favoriteGames = ["Metal Gear", "Death Stranding", "Cyberpunk 2077"];
const isActive = false;

const address = {
  zipCode: "12345",
  country: "Colombia",
};

export default function MyAwesomeApp() {
  const myStyles: CSSProperties = {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 10,
    color: "white",
    marginTop: 20,
  };
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(", ")}</p>
      <h1>{isActive ? "Activo" : "Inactivo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}
