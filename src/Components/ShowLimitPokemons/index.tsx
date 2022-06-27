import axios from "axios";
import React, { useState } from "react";

import { UsePokeContext } from "../../Context/PokeContext"

import {Container,Button, Input} from "../style"

const ShowLimitPokemons: React.FC = () => {
    const { setPokemons } = UsePokeContext()
    const [limit, setLimit] = useState<number>(15)

    const changeLimit = () => {
        if (limit) {
            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`).then((response) => {
                setPokemons(response.data.results)
            })
        }
    }

    return (
        <Container>
            <p>Nº limite de exibição</p>
            <Input type="text" placeholder="Digite aqui" onChange={(e) => setLimit(parseInt(e.target.value))} />
            <Button onClick={() => changeLimit()} >Aplicar</Button>
        </Container>
    )
}

export default ShowLimitPokemons