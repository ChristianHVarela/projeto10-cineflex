import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { ButtonSubmit, Container, ContainerButton, ContainerForm, ContainerSeats, ContainerTags, ImagePoster, NavBar, Tag } from "./style"
import { cpfMask } from "../../Utils/mask"
import DivSeat from "../../components/DivSeat/DivSeat"

function Seats(){
    const {idSessao} = useParams()
    const [session, setSession] = useState(undefined)
    const [seats, setSeats] = useState([])
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

    function reservaAssentos(e){
        e.preventDefault()
        console.log({ ids: seats, name, cpf});
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", { ids: seats, name, cpf})
            .then((response) => {
                console.log(response);
                Navigate("/sucesso")
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <ContainerSeats>
                {session !== undefined && session.seats.map((seat, index) => {
                    return <DivSeat seats={seats} setSeats={setSeats} key={index} seat={seat}></DivSeat>
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
            <form onSubmit={reservaAssentos}>
                <ContainerForm>
                        <label>Nome do comprador:</label>
                        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..."/>
                        <label>CPF do comprador:</label>
                        <input required value={cpfMask(cpf)} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
                </ContainerForm>
                <ContainerButton>
                    <ButtonSubmit type="submit">Reservar assento(s)</ButtonSubmit>
                </ContainerButton>
            </form>
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

export default Seats