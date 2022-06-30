import axios from "axios";
import React, { SetStateAction, useContext, useEffect, useState } from "react";

import { pokemonProps } from "../Types/pokemonType"

interface pokeContextTypes {
    pokemons: pokemonProps[]
    setPokemons: React.Dispatch<SetStateAction<pokemonProps[]>>
    setLimit: React.Dispatch<SetStateAction<number>>
    changeLimit: () => void
    showMorePokemons: () => void
}

const defaultContext = {
    pokemons: [],
    setPokemons: () => { },
    setLimit: () => { },
    changeLimit: () => { },
    showMorePokemons: () => { }
}

const PokeContext = React.createContext<pokeContextTypes>(defaultContext)

export const UsePokeContext = () => useContext(PokeContext)

interface pokeProviderProps {
    children: React.ReactNode
}

export const PokeProvider: React.FC<pokeProviderProps> = (props) => {
    const [pokemons, setPokemons] = useState<pokemonProps[]>(defaultContext.pokemons)
    const [limit, setLimit] = useState<number>(15)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15').then((response) => {
            setPokemons(response.data.results)
        })
    }, [])

    const changeLimit = () => {
        if (limit) {
            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`).then((response) => {
                setPokemons(response.data.results)
            })
        }
    }

    const showMorePokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit + 15}`).then((response) => {
            setPokemons(response.data.results)
        })
        setLimit(limit + 15)
    }

    return (
        <PokeContext.Provider value={{ pokemons, setPokemons, setLimit, changeLimit, showMorePokemons }}>
            {props.children}
        </PokeContext.Provider>
    )
}

