import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField
} from '@mui/material';

export default function CreateCarForm({ isDialogOpened, handleCloseDialog }) {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '16px',
    p: 4,
  };

  useEffect(() => {
    handleClickOpen();
  }, [])

  const handleClose = () => {
    handleCloseDialog(false);
  }

  const handleClickOpen = () => { }

  return (
    <div>
      <Modal
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth />
          <TextField id="outlined-basic" label="Modelo" variant="outlined" fullWidth />

        </Box>
      </Modal>
    </div>
  );
}