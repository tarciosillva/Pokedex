import React from "react";
import { Link } from "react-router-dom";

import { UsePokeContext } from "../../Context/PokeContext"

import Header from "../../Components/Header";
import ShowLimitPokemons from "../../Components/ShowLimitPokemons";
import FindPokemon from "../../Components/FindPokemon";
import PokeCard from "../../Components/Card";

import { AboutMe, Container, GridItems, ActionsConntainer, ContentButton, Button } from "./style"

const Pokedex: React.FC = () => {
    const { pokemons, showMorePokemons } = UsePokeContext()

    return (
        <Container>
            <Header />
            <AboutMe>
                <Link className="link" to={'/sobreMim'}>Sobre mim</Link>
            </AboutMe>
            <ActionsConntainer>
                <ShowLimitPokemons />
                <FindPokemon />
            </ActionsConntainer>

            <GridItems>
                {pokemons.map((element, index) => (
                    <Link key={index} to={`/pokemon/${element.name}`}>
                        <PokeCard name={element.name} url={element.url} />
                    </Link>
                ))}
            </GridItems>
            <ContentButton >
                <Button onClick={() => showMorePokemons()}>Exibir mais</Button>
            </ContentButton>
        </Container>
    )
}

export default Pokedex