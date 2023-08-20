import React, { useEffect, useState } from "react";
import "./App.css";

const TempratureConverter = () => {
  const [model, setModel] = useState({
    inpValue: "",
    tempType: "C",
    tempSelected: "F",
  });
  const [calculatedTemp, setCalculatedTemp] = useState("");

  let convertTemprature = () => {
    if (model.tempType === "F" && model.tempSelected === "C") {
      setCalculatedTemp(((model.inpValue - 32) / 1.8).toFixed(2));
      console.log(calculatedTemp);
    } else if (model.tempType === "C" && model.tempSelected === "F") {
      setCalculatedTemp((model.inpValue * 1.8 + 32).toFixed(2));
      console.log(calculatedTemp);
    } else if (model.tempType === "K" && model.tempSelected === "C") {
      setCalculatedTemp((model.inpValue - 273).toFixed(2));
      console.log(calculatedTemp);
    } else if (model.tempType === "K" && model.tempSelected === "F") {
      setCalculatedTemp(((model.inpValue - 273) * 1.8 + 32).toFixed(2));
      console.log(calculatedTemp);
    } else if (model.tempType === "F" && model.tempSelected === "K") {
      setCalculatedTemp(((model.inpValue - 32) / 1.8 + 273).toFixed(2));
      console.log(calculatedTemp);
    } else if (model.tempType === "C" && model.tempSelected === "K") {
      setCalculatedTemp((Number(model.inpValue) + 273).toFixed(2));
      console.log(calculatedTemp);
    } else if (model.tempType === "C" && model.tempSelected === "C") {
      setCalculatedTemp(model.inpValue);
      console.log(calculatedTemp);
    } else if (model.tempType === "F" && model.tempSelected === "F") {
      setCalculatedTemp(model.inpValue);
      console.log(calculatedTemp);
    } else if (model.tempType === "K" && model.tempSelected === "K") {
      setCalculatedTemp(model.inpValue);
      console.log(calculatedTemp);
    }
  };
  useEffect(() => {
    console.log(calculatedTemp);
  }, [calculatedTemp]);
  return (
    <>
      <div className="App">
        <h1 style={{ fontSize: "3.5rem" }}>Temperature Converter </h1>
        <div className="myGrid">
          <div className="gridLeft">
            <h3>Enter Temprature</h3>
            <div className="flexRow">
              <input
                type="number"
                name=""
                id=""
                onChange={(e) =>
                  setModel({ ...model, inpValue: e.target.value })
                }
              />
              <select
                name=""
                id=""
                onChange={(e) =>
                  setModel({ ...model, tempType: e.target.value })
                }
              >
                <option value="C">&deg;C</option>
                <option value="F">&deg;F</option>
                <option value="K">&deg;K</option>
              </select>
            </div>
            <div>
              <div className="flexCol">
                <h3 style={{ textAlign: "start" }}>Convert In</h3>
                <select
                  name="convertIn"
                  id="convertIn"
                  className="select2"
                  onChange={(e) =>
                    setModel({ ...model, tempSelected: e.target.value })
                  }
                >
                  <option value="C">&deg;C</option>
                  <option value="F">&deg;F</option>
                  <option value="K">&deg;K</option>
                </select>
              </div>
              <div>
                <button onClick={convertTemprature}>Convert</button>
              </div>
            </div>
          </div>
          <div
            className="gridRight "
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white", fontSize: "5.5rem" }}>
              {calculatedTemp}&deg;
              {model.tempSelected === "C"
                ? "C"
                : model.tempSelected === "F"
                ? "F"
                : model.tempSelected === "K"
                ? "K"
                : "C"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempratureConverter;
