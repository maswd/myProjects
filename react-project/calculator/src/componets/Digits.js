import React from "react";

function Digits() {
  const createDigits = () => {
    const digits = [];
    for (let i = 9; i; i--) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };
  return (
    <div>
      {createDigits()}
      <button>/</button>
      <button>0</button>
      <button>.</button>
    </div>
  );
}

export default Digits;
