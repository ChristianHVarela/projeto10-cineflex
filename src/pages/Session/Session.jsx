import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, ContainerDay, ContainerTimes, ImagePoster, NavBar } from "./style"

function Session(props){
    const {setPage, setSessionId} = props
    const {idFilme} = useParams()
    const [movie, setMovie] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((response) => {
                setMovie(response.data)
            }).catch((error) => {
                console.log(error);
            })
        }, [])

    function handleChange(timeId){
        setSessionId(timeId)
        setPage(2)
        navigate(`/assentos/${timeId}`)
    }
        
    return (
        <Container>
            <p>Selecione o horário</p>
            {movie !== undefined && movie.days.map((day, index) => {
                return  <ContainerDay key={index} data-test="movie-day">
                            <p>{`${day.weekday} - ${day.date}`}</p>
                            <ContainerTimes>
                                {day && day.showtimes.map((time, index) => {
                                    return <button key={index} data-test="showtime" onClick={() => handleChange(time.id)}>{time.name}</button>
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