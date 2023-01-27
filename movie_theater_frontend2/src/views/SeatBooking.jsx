import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { useEffect, ReactDOM } from 'react';
import { useState, setState, forwardRef } from 'react'
import { getSeats, updateSeats } from '../services/seatService';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { Checkbox } from '@mui/material';
import { EventSeatOutlined } from '@mui/icons-material';
import ReserveModal from './ReserveModal';


export const SeatBooking = (props) => {
    const [seats, setSeats] = useState([]);
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);



    useEffect(() => {
        getSeats()
            .then((data) => {
                setSeats(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [seats])

    // With this useState I want to collect the checked checkboxes

    const handleCheckboxChange = (data) => {
        let newArray = [...checkedCheckboxes, data];
        if (checkedCheckboxes.includes(data)) {
            newArray = newArray.filter(seat => seat !== data);
        }
        setCheckedCheckboxes(
            [...newArray]
        );
    };


    return (
        <div className="background">
            <h2 className='text-center text-white p-3'> Choose Your Seats</ h2>
            <TableContainer sx={{ width: '50%', margin: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <Table sx={{ opacity: '100%', border: 'none' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'></TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>1</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>2</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>3</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>4</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>5</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>6</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>7</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>8</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>9</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>10</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>11</TableCell>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>12</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>A</TableCell>
                            {
                                seats.slice(0, 12).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
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
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>B</TableCell>
                            {
                                seats.slice(12, 24).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>C</TableCell>
                            {
                                seats.slice(24, 36).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>D</TableCell>
                            {
                                seats.slice(36, 48).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>E</TableCell>
                            {
                                seats.slice(48, 60).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>F</TableCell>
                            {
                                seats.slice(60, 72).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>G</TableCell>
                            {
                                seats.slice(72, 84).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>H</TableCell>
                            {
                                seats.slice(84, 96).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>I</TableCell>
                            {
                                seats.slice(96, 108).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
                                            <Checkbox
                                                icon={<EventSeatOutlined color='secondary' />}
                                                checkedIcon={<EventSeatIcon color='info' />}
                                                onChange={() => handleCheckboxChange(seat)} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow sx={{ "& td": { border: 0 } }}>
                            <TableCell sx={{ color: 'whitesmoke' }} size='small' align='center'>J</TableCell>
                            {
                                seats.slice(108, 120).map((seat) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected === true) {
                                        return (
                                            <TableCell key={seat.id} size='small' align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={seat.id} size='small' align='center'>
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
                <Container sx={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <div>
                        <p style={{ color: 'white', fontSize: '12pt', marginTop: '12px' }}>Reserve Seats → </p>
                    </div>
                    <div>
                        <ReserveModal selectedSeats={checkedCheckboxes} />
                    </div>
                </Container>
            </TableContainer>
            {/* <Paper>
                <h1>State:</h1>
                <pre style={{ color: 'black' }} > {JSON.stringify(checkedCheckboxes, null, 1)}</pre>
            </Paper> */}
        </div >
    )
}
