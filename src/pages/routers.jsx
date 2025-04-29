import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import Catalogo from "./catalogo";
import Contato from "./contato";
import Developers from "./developers";
import CriarConta from "./criar-conta";
import Login from "./login";
import MinhaConta from "./minha-conta";
import Admin from "./admin";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default Routers;
