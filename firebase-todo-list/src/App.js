import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import Edit from "./pages/Edit";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes></BrowserRouter>
  );
}

export default App;
