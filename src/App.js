import React from "react";
import {render} from "react-dom";
import DefaultView from "./components/DefaultView";

function App ()  {
  return (
    <>
      <div>
          <DefaultView/>
      </div>
    </>
  )
}


render(<App />, document.getElementById("root"));
