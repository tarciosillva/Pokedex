import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./style"

import pokeAnimation from "../../assets/pokeAnimation.gif"


const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <img className="radiusImg" src={pokeAnimation} alt="" />
            <img className="pokedexImg" src="https://fontmeme.com/permalink/220628/12a5439fe8da0238fbe8f1a7f6a4f4b2.png" alt="pokedex imagem" />
        </HeaderContainer>
    )
}

export default Header