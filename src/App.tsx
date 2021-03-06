import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from './Style/GlobalStyle';
import { PokeProvider } from "./Context/PokeContext"

import Pokedex from "./Pages/Pokedex";
import Pokemon from "./Pages/Pokemon";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <div className="App">
      <PokeProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="/sobreMim" element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      </PokeProvider>
      <GlobalStyle />
    </div>
  )
}

export default App
