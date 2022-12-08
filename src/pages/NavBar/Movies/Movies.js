import axios from "axios"
import { useEffect, useState } from "react"
import { Container, ContainerMovies } from "./style"

function Movies(){
    const [movies, setMovies] = useState(undefined)

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((response) => {
                setMovies(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    if (movies === undefined){
        console.log('Deu merda');
    }

    return(
        <Container>
            <p>Selecione o filme</p>
            <ContainerMovies>
                {movies.map((movie) => {
                    return <img src={movie.posterURL} alt="" />
                })}
            </ContainerMovies>
        </Container>
    )
}

export default Movies