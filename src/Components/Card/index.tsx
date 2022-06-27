import axios from "axios";
import React, { useState, useEffect } from "react";

import { pokemonProps } from "../../Types/pokemonType"

import { Container,Name, PokemonId } from "./style"

interface pokeCardProps {
    url: string,
    name: string
}

const PokeCard: React.FC<pokeCardProps> = (props) => {
    const [pokemon, setPokemon] = useState<pokemonProps>()

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setPokemon(response.data)
        })
    }, [pokemon])


    return (
        <Container>
            <PokemonId><p>{pokemon?.id}</p></PokemonId>
            <img src={pokemon?.sprites?.other.dream_world.front_default} alt={props.name + 'imagem'} />
            <Name>{props.name}</Name>
        </Container>
    )
}

export default PokeCard