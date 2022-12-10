import { NavBarHigher, ContainerStandart, ButtonBack } from "./style"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

function NavBar(props){
    const {page, movie, session, setPage} = props
    const navigate = useNavigate()

    function handleBack() {
        switch (page) {
            case 1:
                setPage(0)
                navigate("/")
                break;
            case 2:
                setPage(1)
                navigate(`/sessoes/${movie}`)
                break;
            case 3:
                setPage(2)
                navigate(`/assentos/${session}`)
                break;
            default:
                break;
        }
    }

    return (
        <ContainerStandart>
            <NavBarHigher>
                <ButtonBack data-test="go-home-header-btn" page={page} onClick={() => handleBack()}>
                    <IoIosArrowRoundBack fontSize={59} />
                </ButtonBack>
                <p>CINEFLEX</p>
            </NavBarHigher>
        </ContainerStandart>
    )
}

export default NavBar

