import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from './Style/GlobalStyle';
import { PokeProvider } from "./Context/PokeContext"

import Pokedex from "./Pages/Pokedex";
import Pokemon from "./Pages/Pokemon";

import pokemonAudioTheme from "./audio/pokemonTheme.mp3"


function App() {
  return (
    <div className="App">
      <PokeProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<Pokemon/>} />
          </Routes>
        </BrowserRouter>
      </PokeProvider>
      <audio src={pokemonAudioTheme} autoPlay></audio>
      <GlobalStyle />
    </div>
  )
}

export default App
