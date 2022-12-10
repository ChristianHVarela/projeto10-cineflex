import { useNavigate } from "react-router-dom";
import { cpfMask } from "../../Utils/mask";
import { ButtonSubmit, Container, ContainerButton, ContainerContent, Content, Title } from "./style"

function Finale(props){
    const {success, setSuccess} = props
    const navigate = useNavigate()

    function handleChange(){
        setSuccess({movie : "", data: "", time: "", nome: "", doc: "", assentos: []})
        navigate("/")
    }
    
    return (
        <Container>
            <p>Pedido feito com sucesso!</p>
            <ContainerContent data-test="movie-info">
                <Title>Filme e sessão</Title>
                <div>
                    <Content>{success.movie}</Content>
                    <Content>{`${success.data} - ${success.time}`}</Content>
                </div>
            </ContainerContent>
            <ContainerContent data-test="seats-info">
                <Title>Ingressos</Title>
                <div>
                    {success && success.assentos.map((assento, index) => {
                        return <Content key={index}>{`Assento ${assento.name}`}</Content>
                    })}
                </div>
            </ContainerContent>
            <ContainerContent data-test="client-info">
                <Title>Comprador</Title>
                <div>
                    <Content>{`Nome: ${success.nome}`}</Content>
                    <Content>{`CPF: ${cpfMask(success.doc)}`}</Content>
                </div>
            </ContainerContent>
            <ContainerButton>
                <ButtonSubmit data-test="go-home-btn" onClick={() => handleChange()}>Voltar para home</ButtonSubmit>
            </ContainerButton>
        </Container>
    )
}

export default Finale