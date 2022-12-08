import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../../pages/NavBar/Movies/Movies";
import NavBar from "../../pages/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
