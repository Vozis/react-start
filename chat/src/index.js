import React from "react";
import ReactDOM from "react-dom/client";
import {FunctionComponent, ClassComponent} from "./example";
import {App} from "./App";

const age = 23;
const films = [
  {title: "film 1", year: 2005},
  {title: "film 2", year: 2009},
];
const handleClick = (film) => {
  console.log("Click", film);
};

const Parent = () => {
  return (
    <div>
      <h1 style={{color: "red"}}>Parent Component</h1>
      <FunctionComponent age={age}
                         films={films}
                         handleClick={handleClick}
      />
      <hr/>
      <ClassComponent age={age}
                      films={films}
                      handleClick={handleClick}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
