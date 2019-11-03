import React from "react";
import "./App.css";

function App() {
  let Adam = {
    photo: "tof.jpg",
    nometprenom:"adam kefi",
    link:"https://www.facebook.com/adam.kefi.39",
  };
  return (
    <div>
      <img src={Adam.photo} alt="taswiraa" />
      <h1>{Adam.nometprenom}</h1>
      <a href={Adam.link} ><button>facebook</button></a>
    </div>
  );
}

export default App;
