import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailList from "./pages/EmailList";
import Mail from "./pages/Mail";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
        <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
