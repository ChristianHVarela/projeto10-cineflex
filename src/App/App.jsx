import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../pages/Movies/Movies";
import NavBar from "../components/NavBar/NavBar";
import Session from "../pages/Session/Session";
import GlobalStyle from "./GlobalStyle";
import Seat from "../pages/Seat/Seat";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:idFilme" element={<Session />} />
        <Route path="/assentos/:idSessao" element={<Seat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
