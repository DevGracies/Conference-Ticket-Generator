import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketSelection from "./components/TicketSelection";
import TicketGenerator from "./components/TicketGenerator";
import Navigation from "./components/Navigation";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route path="/ticket" element={<TicketGenerator />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
