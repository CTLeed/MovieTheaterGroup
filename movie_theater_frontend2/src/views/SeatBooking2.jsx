import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, ReactDOM } from 'react';
import { useState, setState } from 'react'
import { getSeats, updateSeats } from '../services/seatService';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { IconButton } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Checkbox } from '@mui/material';
import { EventSeatOutlined } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';


export const SeatBooking2 = (props) => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        getSeats()
            .then((data) => {
                setSeats(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // With this useState I want to collect the checked checkboxes
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

    const handleCheckboxChange = (data) => {
        let newArray = [...checkedCheckboxes, data.id];
        if (checkedCheckboxes.includes(data.id)) {
            newArray = newArray.filter(seat => seat !== data.id);
        }
        setCheckedCheckboxes(
            [...newArray]
        );
    };

    // This function should send each seatId in checkedCheckboxes list to database, and refresh page for visual update of purchased seats
    const handleSend = (e) => {
        e.preventDefault();
        checkedCheckboxes.map((checkbox) => {
            updateSeats(checkbox)
        })
    }


    return (
        <div className="background" >
            <h2 className='text-center text-white'>Choose Your Seats</h2>
            <TableContainer sx={{ width: '50%', margin: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <Table sx={{ ['& .${tableRowClasses.root']: { borderBottom: 'none' }, opacity: '100%', border: 'none' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'></TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>1</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>2</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>3</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>4</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>5</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>6</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>7</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>8</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>9</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>10</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>11</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>12</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>A</TableCell>
                            {
                                seats.slice(0, 12).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                value={seat}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>B</TableCell>
                            {
                                seats.slice(12, 24).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>C</TableCell>
                            {
                                seats.slice(24, 36).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>D</TableCell>
                            {
                                seats.slice(36, 48).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>E</TableCell>
                            {
                                seats.slice(48, 60).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>F</TableCell>
                            {
                                seats.slice(60, 72).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>G</TableCell>
                            {
                                seats.slice(72, 84).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>H</TableCell>
                            {
                                seats.slice(84, 96).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>I</TableCell>
                            {
                                seats.slice(96, 108).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>J</TableCell>
                            {
                                seats.slice(108, 120).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableBody>
                </Table>
                <Container sx={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white', fontSize: '12pt', }}>Reserve Seats</p>
                    <IconButton size='large' color="secondary">
                        <ConfirmationNumberIcon />
                    </IconButton>
                    {/* <div>
                        <h1>State:</h1>
                        <pre>{JSON.stringify(checkedCheckboxes, null, 2)}</pre>
                    </div> */}
                </Container>
            </TableContainer>
        </div >
    )
}
