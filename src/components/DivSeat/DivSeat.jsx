import { useState } from "react"
import { Seat } from "./style"

function DivSeat(props){
    const {seat, seats, setSeats} = props
    const [selected, setSelected] = useState(false)

    function handleChange(){
        let seatsList = seats
        if (seats.includes(seat.id)){
            let newSeats = seats.filter((sea) => sea !== seat.id)
            setSeats(newSeats)
        } else {
            seatsList.push(seat.id)
            setSeats(seatsList)
        }
        setSelected(selected ? false : true)
    }

    return (
        <Seat selected={selected} disabled={!seat.isAvailable} onClick={() => handleChange()}>{seat.name}</Seat>
    )
}

export default DivSeat