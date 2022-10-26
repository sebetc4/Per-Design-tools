import React, { useEffect, useState } from 'react';

import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';

export default function AlertComposant() {

    // Store
    const alertState = useSelector((state) => state.app.alert);

    // State
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        !!alertState.type && setOpen(true);
    }, [alertState]);

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={alertState.type}
                sx={{ width: '100%' }}
            >
                {alertState.message}
            </Alert>
        </Snackbar>
    );
}
