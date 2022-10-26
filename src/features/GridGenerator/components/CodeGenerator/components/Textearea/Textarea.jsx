import { Box, Fab, TextareaAutosize, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Textarea({ title, ariaLabel, value }) {
    // State
    const [borderColor, setBorderColor] = useState('#000000');

    useEffect(() => {
        switch (title) {
            case 'index.html':
                setBorderColor('#f06525');
                break;
            case 'index.css':
                setBorderColor('#009ae5');
                break;
            case 'index.js':
                setBorderColor('#ffdc3c');
                break;
            default:
                setBorderColor('#000000');
        }
    }, []);

    return (
        <Box
        sx={{
            position: 'relative'
        }}
        >
            <Typography
            sx={{
                fontWeight: '700'
            }}
            >
                {title}
            </Typography>
            <TextareaAutosize
                value={value}
                aria-label={ariaLabel}
                placeholder=''
                minRows={5}
                maxRows={18}
                style={{
                    width: 450,
                    borderRadius: 10,
                    padding: '1rem',
                    resize: 'none',
                    border: `1px solid ${borderColor}`,
                    fontSize: 'inherit',
                }}
            />
            <Fab
            onClick={() => navigator.clipboard.writeText(value)}
                color='primary'
                aria-label='add'
                variant="extended" size="small" 
                sx={{
                    position: 'absolute',
                    top: 35,
                    right: 20,
                    fontSize: 10,
                }}
            >
                Copier
            </Fab>
        </Box>
    );
}
