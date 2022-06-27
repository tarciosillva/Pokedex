import React, { useState, useEffect } from "react";

import { UsePokeContext } from "../../Context/PokeContext"
import ShowLimitPokemons from "../../Components/ShowLimitPokemons";
import FindPokemon from "../../Components/FindPokemon";
import PokeCard from "../../Components/Card";
import { Link } from "react-router-dom";
import { Container, GridItems, ActionsConntainer } from "./style"


const Pokedex: React.FC = () => {
    const { pokemons } = UsePokeContext()

    return (
        <Container>
           
            <ActionsConntainer>
                <ShowLimitPokemons />
                <FindPokemon />
            </ActionsConntainer>

            <GridItems>
                {pokemons.map((element, index) => (
                    <Link key={index} to={`/pokemon/${element.name}`}>
                        <PokeCard name={element.name} url={element.url} />
                    </Link>
                    /* <>{console.log(element.url)}</> */
                ))}
            </GridItems>
        </Container>
    )
}

export default Pokedex