export interface pokemonProps{
    id:number
    name:string,
    url:string,
    sprites?:{
        other:{
            dream_world:{
                front_default:string
            }
        }
    }
}

export interface pokemonTypeProps {
    type: {
        name: string
    }
}