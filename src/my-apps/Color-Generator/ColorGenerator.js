import React, { useState } from "react";
import SingleColor from "./SingleColor.js";
import "./ColorGenerator.css";
import Value from "values.js";

function ColorGenerator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Value("#ffeb80").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("worked");
    try {
      let colors = new Value(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      console.log(error);

      setError(true);
    }
  };
  return (
    <main>
      <section className="color-container">
        <h2>Colors Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            className={`colorInput ${error ? "error" : null}`}
            placeholder="#ffeb80"
          />
          <button type="submit">Generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </main>
  );
}

export default ColorGenerator;
