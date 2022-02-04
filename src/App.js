import React from "react";
import UIBlocker from "./lib";

export default function App() {
  return (
    <UIBlocker visible={true} message="Loading...">
      <h1>React</h1>
      <h5>App</h5>
      <h5>Initial</h5>
    </UIBlocker>
  );
}
