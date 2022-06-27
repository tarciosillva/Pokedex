import axios from "axios";
import React, { SetStateAction, useContext, useEffect, useState } from "react";

import { pokemonProps } from "../Types/pokemonType"

interface pokeContextTypes {
    pokemons: pokemonProps[],
    setPokemons: React.Dispatch<SetStateAction<pokemonProps[]>>
}

const defaultContext = {
    pokemons: [],
    setPokemons: () => { }
}

const PokeContext = React.createContext<pokeContextTypes>(defaultContext)

export const UsePokeContext = () => useContext(PokeContext)

interface pokeProviderProps {
    children: React.ReactNode
}

export const PokeProvider: React.FC<pokeProviderProps> = (props) => {
    const [pokemons, setPokemons] = useState<pokemonProps[]>(defaultContext.pokemons)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15').then((response) => {
            setPokemons(response.data.results)
        })
    }, [])

    return (
        <PokeContext.Provider value={{ pokemons, setPokemons }}>
            {props.children}
        </PokeContext.Provider>
    )
}

