import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import { Container, Name, FlexContent, Figure, AbilitiesContent, TypeContent, MovesContent, TitleSection, PowerDescribe, StatsContainer } from "./style"

import Stats from "../../Components/Stats"

import { pokemonTypeProps } from "../../Types/pokemonType"

import PokemonTypes from "../../Components/PokemonType"

interface abilityProps {
    ability: {
        name: string
    }
}

interface movesProps {
    move: {
        name: string
    }
}

interface statsProps {
    base_stat: number,
    stat: {
        name: string
    }
}

interface pokemonProps {
    id: number,
    name: string,
    weight: number,
    height: number,
    base_experience: number,
    abilities: abilityProps[],
    moves: movesProps[],
    stats: statsProps[],
    types: pokemonTypeProps[]
}

const Pokemon: React.FC = () => {
    const params = useParams()

    const [pokemon, setPokemon] = useState<pokemonProps>()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`).then((response) => {
            setPokemon(response.data)
        })
    }, [])

    return (
        <Container>
            <div>
                <FlexContent>
                    <Name>{pokemon?.id} {pokemon?.name}</Name>
                </FlexContent>
                <Figure>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} alt={'Imagem ' + pokemon?.name} />
                </Figure>

                <TypeContent>
                    <p className="type">Type</p>
                    <div className="typeGrid">
                        {pokemon?.types.map((element, index) => (
                            <PokemonTypes key={index} type={element.type.name} />
                        ))}
                    </div>
                </TypeContent>
            </div>

            <div>
                <AbilitiesContent>
                    <TitleSection>Abilities</TitleSection>
                    <PowerDescribe>
                        {pokemon?.abilities.map((element, index) => (
                            <>
                                <img src="https://i.pinimg.com/originals/89/a1/4d/89a14d3b81546e2fe51cbf4d0d6b8b60.gif" alt="power pokemon icon" />
                                <p>{element.ability.name}</p>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        ))}
                    </PowerDescribe>
                </AbilitiesContent>

                <MovesContent>
                    <TitleSection>Moves: </TitleSection>
                    <p>
                        {pokemon?.moves.map((element, index) => (
                            element.move.name + ', '
                        ))}
                    </p>
                </MovesContent>
                <StatsContainer>
                    {pokemon?.stats.map((element, index) => (

                        <Stats key={index} statsName={element.stat.name} value={element.base_stat} />

                    ))}
                </StatsContainer>
            </div>
        </Container>
    )
}

export default Pokemon