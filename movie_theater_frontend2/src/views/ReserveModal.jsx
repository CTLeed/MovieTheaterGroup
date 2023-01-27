import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { updateSeats } from '../services/seatService';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ReserveModal({ selectedSeats }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // This function should send each seatId in checkedCheckboxes list to database, and refresh page for visual update of purchased seats

    const handleSend = (e) => {
        const checkedCheckboxes = selectedSeats
        console.log(selectedSeats)
        checkedCheckboxes.map((checkbox) => {
            checkbox["is_selected"] = true;
            console.log(checkbox)
            updateSeats(checkbox)
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, [])
    }

    return (
        <div>
            <IconButton size='large' color="secondary" onClick={handleOpen}>
                <ConfirmationNumberIcon />
            </IconButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                shouldCloseOnOverlayClick={false}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Reserve selected seats:
                        </Typography>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSend}>Reserve</Button>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}