import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
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
    const [reservedSeats, setReservedSeats] = useState([]);
    const [tempSelect, setTempSelect] = useState(false);
    const [errors, setErrors] = useState(null);



    useEffect(() => {
        getSeats()
            .then((data) => {
                setSeats(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // With this useState I wan't to collect the checked checkboxes
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

    // This is my handler method that gets triggered when a checkbox get's checked/unchecked
    // ..and toggles the state of the checkbox
    const handleCheckboxChange = (data) => {
        const isChecked = checkedCheckboxes.some(checkedCheckbox => checkedCheckbox.value === data.value)
        if (isChecked) {
            setCheckedCheckboxes(
                checkedCheckboxes.filter(
                    (checkedCheckbox) => checkedCheckbox.value !== data.value
                )
            );
        } else {
            setCheckedCheckboxes(checkedCheckboxes.concat(data));
        }
    };

    return (
        <div className="background" >
            <h2 className='text-center text-white'>Choose Your Seats</h2>
            <TableContainer sx={{ width: '50%', margin: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                {/* <form onSubmit={(e) => {
                            handleSubmit(e);
                        }}> */}
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
                                seats.slice(0, 12).map((seat, index1) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index1} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index1} align='center'>
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
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>B</TableCell>
                            {
                                seats.slice(12, 24).map((seat, index2) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index2} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index2} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>C</TableCell>
                            {
                                seats.slice(24, 36).map((seat, index3) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index3} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index3} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>D</TableCell>
                            {
                                seats.slice(36, 48).map((seat, index4) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index4} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index4} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>E</TableCell>
                            {
                                seats.slice(48, 60).map((seat, index5) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index5} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index5} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>F</TableCell>
                            {
                                seats.slice(60, 72).map((seat, index6) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index6} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index6} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>G</TableCell>
                            {
                                seats.slice(72, 84).map((seat, index7) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index7} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index7} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>H</TableCell>
                            {
                                seats.slice(84, 96).map((seat, index8) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index8} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index8} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>I</TableCell>
                            {
                                seats.slice(96, 108).map((seat, index9) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index9} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index9} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'whitesmoke' }} align='center'>J</TableCell>
                            {
                                seats.slice(108, 120).map((seat, index10) => {
                                    const { id, name, is_selected } = seat;
                                    if (is_selected == true) {
                                        return (
                                            <TableCell key={index10} align='center'>
                                                <Checkbox icon={<EventSeatIcon color='error' />} disabled />
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={index10} align='center'>
                                            <Checkbox icon={<EventSeatOutlined color='secondary' />} checkedIcon={<EventSeatIcon color='info' />} value={is_selected} />
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
                    <div>
                        <h1>State:</h1>
                        <pre>{JSON.stringify(checkedCheckboxes, null, 2)}</pre>
                    </div>
                </Container>
                {/* </form> */}
            </TableContainer>
        </div >
    )
}
