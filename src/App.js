import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Log from "./Components/Log";
import Sheets from "./Components/Sheets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Log />} />
        <Route path="/sheets" element={<Sheets />} />
      </Routes>
    </Router>
  );
}

export default App;
