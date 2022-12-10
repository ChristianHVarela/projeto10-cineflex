import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, ContainerMovies, LoadingScreen, Movie } from "./style"

function Movies(){
    const [movies, setMovies] = useState(undefined)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((response) => {
                setMovies(response.data)
                setLoad(true)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return(
        <Container>
            <p>Selecione o filme</p>
            <LoadingScreen load={load}/>
            <ContainerMovies>
                {movies !== undefined && movies.map((movie, index) => {
                    return <Link key={index} to={`/sessoes/${movie.id}`}><Movie data-test="movie"><img src={movie.posterURL} alt="" /></Movie></Link>
                })}
            </ContainerMovies>
        </Container>
    )
}

export default Movies