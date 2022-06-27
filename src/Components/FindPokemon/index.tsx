import axios from "axios";
import React, { useState } from "react";

import { UsePokeContext } from "../../Context/PokeContext"
import { Container, Button, Input } from "../style"


const FindPokemon: React.FC = () => {
    const { setPokemons } = UsePokeContext()
    const [findTerm, setFindTerm] = useState<string>('')

    const find = () => {
        if (findTerm) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${findTerm.toLowerCase()}/`).then((response) => {
                setPokemons([{ ...response.data, url: `https://pokeapi.co/api/v2/pokemon/${findTerm.toLowerCase()}/` }])
            })
        }
    }

    return (
        <Container>
            <p>Faça uma busca pelo Id ou nome</p>
            <Input type="text" placeholder="Id | Nome" onChange={(e) => setFindTerm(e.target.value)} />
            <Button onClick={() => find()} >Aplicar</Button>
        </Container>
    )
}

export default FindPokemon