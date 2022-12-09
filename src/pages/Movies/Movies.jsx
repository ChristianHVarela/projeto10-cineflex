import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, ContainerMovies, Movie } from "./style"

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
                {movies !== undefined && movies.map((movie, index) => {
                    return <Link key={index} to={`/sessoes/${movie.id}`}><Movie><img src={movie.posterURL} alt="" /></Movie></Link>
                })}
            </ContainerMovies>
        </Container>
    )
}

export default Movies