import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../pages/Movies/Movies";
import NavBar from "../components/NavBar/NavBar";
import Session from "../pages/Session/Session";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:idFilme" element={<Session />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
