import React from "react";

import { Stat } from "./style"

interface statsProps {
    value: number,
    statsName: string
}

const Stats: React.FC<statsProps> = (props) => {
    return (
        props.statsName === 'hp' ? (
            <Stat bacgroundColor="#00b34c">
                HP
                <p className="value">{props.value}</p>
            </Stat>
        ) : props.statsName === 'attack' ? (
            <Stat bacgroundColor="#e33c08">
                Attack
                <p className="value">{props.value}</p>
            </Stat>
        ) : props.statsName === 'defense' ? (
            <Stat bacgroundColor="#0074b4" >
                Defense
                <p className="value">{props.value}</p>
            </Stat >
        ) : props.statsName === 'special-attack' ? (
            <Stat bacgroundColor="#5b1d99" >
                Special Attack
                <p className="value">{props.value}</p>
            </Stat >
        ) : props.statsName === 'special-defense' ? (
            <Stat bacgroundColor="#ffbc11" >
                Special Defense
                <p className="value">{props.value}</p>
            </Stat >
        ) : props.statsName === 'speed' ? (
            <Stat bacgroundColor="#68b2f8" >
                Speed
                <p className="value">{props.value}</p>
            </Stat>
        ) : (<></>)
    )
}

export default Stats





