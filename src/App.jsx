import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import DynamicIsland from "./components/DynamicIsland";
import Rocket from "./components/Rocket";
import Background from "./components/Background";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <DynamicIsland />
        <Rocket />
        <Background />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
