import React from "react";

import { Container } from "./style"
import { pokemonTypeProps } from "../../Types/pokemonType"

interface typeProps {
    type: string
}

import fire from "../../assets/fire.png"
import flying from "../../assets/flying.png"
import normal from "../../assets/normal.png"
import fighting from "../../assets/fighting.png"
import poison from "../../assets/poison.png"
import ground from "../../assets/ground.png"
import rock from "../../assets/rock.png"
import bug from "../../assets/bug.png"
import ghost from "../../assets/ghost.png"
import steel from "../../assets/steel.png"
import water from "../../assets/water.png"
import grass from "../../assets/grass.png"
import eletric from "../../assets/eletric.png"
import psychic from "../../assets/psychic.png"
import ice from "../../assets/ice.png"
import dragon from "../../assets/dragon.png"
import dark from "../../assets/dark.png"
import faire from "../../assets/faire.png"

const PokemonTypes: React.FC<typeProps> = (props) => {
    return (
        <Container>
            {props.type === 'fire' ? (
                <div>
                    <img src={fire} alt="fire icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'flying' ? (
                <div>
                    <img src={flying} alt="flying icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'normal' ? (
                <div>
                    <img src={normal} alt="normal icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'fighting' ? (
                <div>
                    <img src={fighting} alt="fighting icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'poison' ? (
                <div>
                    <img src={poison} alt="poison icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'ground' ? (
                <div>
                    <img src={ground} alt="ground icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'rock' ? (
                <div>
                    <img src={rock} alt="rock icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'bug' ? (
                <div>
                    <img src={bug} alt="bug icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'ghost' ? (
                <div>
                    <img src={ghost} alt="ghost icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'steel' ? (
                <div>
                    <img src={steel} alt="steel icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'water' ? (
                <div>
                    <img src={water} alt="water icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'grass' ? (
                <div>
                    <img src={grass} alt="grass icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'electric' ? (
                <div>
                    <img src={eletric} alt="electric icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'psychic' ? (
                <div>
                    <img src={psychic} alt="psychic icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'ice' ? (
                <div>
                    <img src={ice} alt="ice icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'dragon' ? (
                <div>
                    <img src={dragon} alt="dragon icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'dark' ? (
                <div>
                    <img src={dark} alt="dark icon" />
                    <p>{props.type}</p>
                </div>
            ) : props.type === 'faire' ? (
                <div>
                    <img src={faire} alt="faire icon" />
                    <p>{props.type}</p>
                </div>
            ) : (null)}
        </Container>
    )
}

export default PokemonTypes