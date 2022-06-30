import axios from "axios";
import React, { useState } from "react";

import { UsePokeContext } from "../../Context/PokeContext"

import { Container, Button, Input } from "../style"

const ShowLimitPokemons: React.FC = () => {
    const { changeLimit, setLimit } = UsePokeContext()


    return (
        <Container>
            <p>Nº limite de exibição</p>
            <Input type="text" placeholder="Digite aqui" onChange={(e) => setLimit(parseInt(e.target.value))} />
            <Button onClick={() => changeLimit()} >Aplicar</Button>
        </Container>
    )
}

export default ShowLimitPokemons