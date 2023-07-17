import React from "react";
import { Routes, Route } from "react-router-dom";
import { ExpenseTrackerApp } from "./components/ExpenseTrackerApp";
import "bootstrap/dist/css/bootstrap.min.css";

// renders the component inside the Route element to be used in the app's routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<ExpenseTrackerApp />} />
    </Routes>
  );
}
export default App;