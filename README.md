# Getting Started with Create React App

# Installation

```
npm install react-uiblocker --save
```

# Usage

```js
import React from "react";
import UIBlocker from "react-uiblocker";

export default function App() {
  return (
    <UIBlocker visible={true} message="Loading...">
      <h1>React</h1>
      <h5>App</h5>
      <h5>Initial</h5>
    </UIBlocker>
  );
}
```
