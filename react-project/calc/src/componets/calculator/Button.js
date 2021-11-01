import React from "react";

function Button({
  handelClick,
  handelDelete,
  handelClear,
  chooseOperation,
  equals,
}) {
  return (
    <div className="buttons-calculators ">
      <button data={"7"} className="button" onClick={handelClick}>
        7
      </button>
      <button data={"8"} className="button" onClick={handelClick}>
        8
      </button>
      <button data={"9"} className="button" onClick={handelClick}>
        9
      </button>
      <button className="button back-color-dark" onClick={handelDelete}>
        del
      </button>
      <button data={"4"} className="button" onClick={handelClick}>
        4
      </button>
      <button data={"5"} className="button" onClick={handelClick}>
        5
      </button>
      <button data={"6"} className="button" onClick={handelClick}>
        6
      </button>
      <button data={"+"} className="button" onClick={chooseOperation}>
        +
      </button>
      <button data={"1"} className="button" onClick={handelClick}>
        1
      </button>
      <button data={"2"} className="button" onClick={handelClick}>
        2
      </button>
      <button data={"3"} className="button" onClick={handelClick}>
        3
      </button>
      <button data={"-"} className="button" onClick={chooseOperation}>
        -
      </button>
      <button data={"."} className="button" onClick={handelClick}>
        .
      </button>
      <button data={"0"} className="button" onClick={handelClick}>
        0
      </button>
      <button data={"÷"} className="button" onClick={chooseOperation}>
        ÷
      </button>
      <button data={"⨯"} className="button" onClick={chooseOperation}>
        ⨯
      </button>
      <button className="button column back-color-dark " onClick={handelClear}>
        reset
      </button>
      <button data={"="} className="button column back-orege" onClick={equals}>
        =
      </button>
    </div>
  );
}

export default Button;
