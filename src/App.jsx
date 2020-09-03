import React, { useState } from "react";
import { ComponentButton } from "./btn/button.component";

const App = () => {
  return (
    <div>
      <h1 className="h1">普通のボタン</h1>
      <ComponentButton state="btn btn-primary" />
      <ComponentButton state="btn btn-secondary" />
      <ComponentButton state="btn btn-success" />
      <ComponentButton state="btn btn-warning" />
    </div>
  );
};

export default App;
