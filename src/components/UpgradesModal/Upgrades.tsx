import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react'
import {Typography} from "@mui/material";

const Upgrades = (props: any) => {

    return (
        <Modal
            open={props.open}
            onClose={props.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="w-50 h-max bg-white m-auto"
        >
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Boosts
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    КАКИЕТА УЛАЧШЕНИЯ
                </Typography>
            </Box>
        </Modal>
    )
}

export default Upgrades;
