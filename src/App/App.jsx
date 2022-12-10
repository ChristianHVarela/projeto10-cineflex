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
  const [page, setPage] = useState(0)
  const [movie, setMovie] = useState(null)
  const [session, setSession] = useState(null)
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar page={page} setPage={setPage} movie={movie} setMovie={setMovie} session={session}/>
      <Routes>
        <Route path="/" element={<Movies setPage={setPage} setMovie={setMovie}/>} />
        <Route path="/sessoes/:idFilme" element={<Session setPage={setPage} setSessionId={setSession}/>} />
        <Route path="/assentos/:idSessao" element={<Seats setSuccess={setSuccess} setPage={setPage}/>} />
        <Route path="/sucesso/" element={<Finale success={success} setSuccess={setSuccess} setPage={setPage} setMovie={setMovie} setSession={setSession}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
