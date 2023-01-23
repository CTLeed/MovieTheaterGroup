import { useState, useEffect } from 'react';

export const SeatBooking2 = (props) => {
    const { name, setName } = useState('');
    const { is_selected, setIsSelected } = useState("")
    const { allSeats, setAllSeats } = useState([]);

    const handleClick = (e) => {
        e.preventDefault()
        const seat = { name }
        fetch("http://localhost:8080/seats/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(seat)
        }).then(() => {
            console.log("Seat Added")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/seats/getall")
            .then(res => res.json())
            .then((result) => {
                setAllSeats(result);
            })
    }, [])

    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <h1 className='navbar-brand'>Select Cinemas</h1>
                </nav>
            </div>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr scope="col">1</tr>
                        <tr scope="col">2</tr>
                        <tr scope="col">3</tr>
                        <tr scope="col">4</tr>
                        <tr scope="col">5</tr>
                        <tr scope="col">6</tr>
                        <tr scope="col">7</tr>
                        <tr scope="col">8</tr>
                        <tr scope="col">9</tr>
                        <tr scope="col">10</tr>
                        <tr scope="col">11</tr>
                        <tr scope="col">12</tr>
                    </thead>
                    <tbody>
                        {
                            allSeats.map((seat, i) => {
                                const { _id, name, is_selected } = seat;
                                return (
                                    <tr key="i">
                                        <td><button>{seat.name}</button></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}