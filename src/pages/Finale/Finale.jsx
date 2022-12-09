import { useLocation } from "react-router-dom"

function Finale(){
    const {retorno} = useLocation()

    console.log(retorno);

    return (
        <></>
    )
}

export default Finale