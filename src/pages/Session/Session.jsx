import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        <></>
    )
}

export default Session