import React from "react";
import { Index } from "./pages/Index";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
