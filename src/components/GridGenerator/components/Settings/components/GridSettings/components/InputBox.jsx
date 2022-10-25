import React, { useEffect, useState } from 'react';
import { Box, Slider, Typography, Grid, Input } from '@mui/material';

export default function InputBo({ icon, label, min, max, initialValue, handleValueChange }) {
    // State
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        handleValueChange(value);
    }, [value]);

    const handleSliderChange = (e) => setValue(e.target.value);

    const handleInputChange = (e) => setValue(parseInt(e.target.value));

    const handleBlur = (e) => {
        if (value < min) {
            setValue(min);
        } else if (value > max) {
            setValue(max);
        }
    };

    return (
        <Box sx={{ width: 450 }}>
            <Typography gutterBottom>{label}</Typography>
            <Grid
                container
                spacing={2}
                alignItems='center'
            >
                <Grid item>{icon}</Grid>
                <Grid
                    item
                    xs
                >
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby={label}
                        min={min}
                        max={max}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        onChange={handleInputChange}
                        size='small'
                        sx={{
                            width:'50px'
                        }}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min,
                            max,
                            type: 'number',
                            'aria-labelledby': {label},
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
