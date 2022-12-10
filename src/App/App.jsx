import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../pages/Movies/Movies";
import NavBar from "../components/NavBar/NavBar";
import Session from "../pages/Session/Session";
import GlobalStyle from "./GlobalStyle";
import Seats from "../pages/Seats/Seats";
import Finale from "../pages/Finale/Finale";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState({movie : "", data: "", time: "", nome: "", doc: "", assentos: []})
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:idFilme" element={<Session />} />
        <Route path="/assentos/:idSessao" element={<Seats setSuccess={setSuccess}/>} />
        <Route path="/sucesso/" element={<Finale success={success} setSuccess={setSuccess}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
