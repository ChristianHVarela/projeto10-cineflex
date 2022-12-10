import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container, ContainerDay, ContainerTimes, ImagePoster, NavBar } from "./style"

function Session(){
    const {idFilme} = useParams()
    const [movie, setMovie] = useState(undefined)

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((response) => {
                setMovie(response.data)
            }).catch((error) => {
                console.log(error);
            })
        }, [])
        
    return (
        <Container>
            <p>Selecione o horário</p>
            {movie !== undefined && movie.days.map((day, index) => {
                return  <ContainerDay key={index} data-test="movie-day">
                            <p>{`${day.weekday} - ${day.date}`}</p>
                            <ContainerTimes>
                                {day && day.showtimes.map((time, index) => {
                                    return <Link key={index} to={`/assentos/${time.id}`}> <button data-test="showtime">{time.name}</button> </Link>
                                })}
                            </ContainerTimes>
                        </ContainerDay>
            })}
            <NavBar data-test="footer">
                <div>
                    <ImagePoster src={movie && movie.posterURL} alt="" />
                </div>
                <p>{movie && movie.title}</p>
            </NavBar>
        </Container>
    )
}

export default Session