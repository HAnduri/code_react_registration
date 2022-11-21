import React from "react";
import { Routes, Route } from "react-router-dom";
import Formreg from "./App";
import Conform from "./conform";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Formreg />} />
      <Route path="conform" element={<Conform />} />
    </Routes>
  );
}

export default App;
