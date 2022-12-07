import { NavBarHigher, ContainerStandart } from "./style"

function NavBar(props){
    const {children, movieSelected} = props
    return (
        <ContainerStandart>
            <NavBarHigher>
                <p>CINEFLEX</p>
            </NavBarHigher>
        </ContainerStandart>
    )
}

export default NavBar

