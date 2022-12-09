import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ButtonSubmit, Container, ContainerForm, ContainerSeats, ContainerTags, DivSeat, ImagePoster, NavBar, Tag } from "./style"
import { cpfMask } from "../../Utils/mask"

function Seat(){
    const {idSessao} = useParams()
    const [session, setSession] = useState(undefined)
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => {
                setSession(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <ContainerSeats>
                {session !== undefined && session.seats.map((seat, index) => {
                    return <DivSeat key={index} isAvailable={seat.isAvailable}>{seat.name}</DivSeat>
                })}
            </ContainerSeats>
            <ContainerTags>
                <Tag type={'green'} >
                    <div/>
                    <p>Selecionado</p>
                </Tag>
                <Tag type={'gray'} >
                    <div/>
                    <p>Disponível</p>
                </Tag>
                <Tag type={'yellow'} >
                    <div/>
                    <p>Indisponível</p>
                </Tag>
            </ContainerTags>
            <ContainerForm>
                <form>
                    <label>Nome do comprador:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..."/>
                    <label>CPF do comprador:</label>
                    <input  value={cpfMask(cpf)} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
                </form>
            </ContainerForm>
            <ButtonSubmit>Reservar assento(s)</ButtonSubmit>
            <NavBar>
                <div>
                    <ImagePoster src={session && session.movie.posterURL} alt="" />
                </div>
                <footer>
                    <p>{session && session.movie.title}</p>
                    <p>{session && `${session.day.weekday} - ${session.name}`}</p>
                </footer>
            </NavBar>
        </Container>
    )
}

export default Seat