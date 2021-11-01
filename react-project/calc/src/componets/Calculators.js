import React, { useState } from "react";
import Button from "./calculator/Button";
import Navbar from "./calculator/Navbar";
import Screen from "./calculator/Screen";

function Calculators() {
  const [current, setCurrent] = useState("");
  const [perivos, setPerivos] = useState("");
  const [operation, setOperation] = useState("");

  const handelClick = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };
  const handelDelete = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const handelClear = () => {
    setCurrent("");
    setPerivos("");
    setOperation("");
  };
  const chooseOperation = (e) => {
    if (current === "") return;
    if (perivos !== "") {
      let value = compute();
      setPerivos(value);
    } else {
      setPerivos(current);
    }
    setCurrent(" ");
    setOperation(e.target.getAttribute("data"));
  };
  const compute = () => {
    let result;
    let perviosNumber = parseFloat(perivos);
    let currentNumber = parseFloat(current);
    switch (operation) {
      case "+":
        result = perviosNumber + currentNumber;
        break;
      case "-":
        result = perviosNumber - currentNumber;
        break;
      case "⨯":
        result = perviosNumber * currentNumber;
        break;
      case "÷":
        result = perviosNumber / currentNumber;
        break;
      default:
        return;
    }
    return result;
  };
  const equals = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setOperation("");
    setPerivos("");
  };
  return (
    <>
      <Navbar />
      <div className="calculators">
        <Screen current={current} perivos={perivos} operation={operation} />
        <Button
          handelClick={handelClick}
          handelDelete={handelDelete}
          handelClear={handelClear}
          chooseOperation={chooseOperation}
          equals={equals}
        />
      </div>
      ;
    </>
  );
}

export default Calculators;
