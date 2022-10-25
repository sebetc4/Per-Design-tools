import React from 'react';
import { SketchPicker } from 'react-color';

import { Box } from '@mui/material';
import { ColorList } from './components';

export default function ColorSettings({ gridState, colorState, dispatchColorState }) {
    // Props
    const { setHexCurrentColor, setBackgroundColor, setMainBoxesColor } = dispatchColorState;

    const handleColorChange = (color) => {
        switch (colorState.currentColor.index) {
            case -1:
                setBackgroundColor(color);
                break;
            case -2:
                setMainBoxesColor(color);
                break;
            default:
                console.log(color.hex)
                setHexCurrentColor(color);
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: '50px' }}>
            <ColorList
                colorState={colorState}
                dispatchcolorState={dispatchColorState}
            />
            {colorState.currentColor.hexColor && (
                <SketchPicker
                    color={colorState.currentColor.hexColor}
                    onChangeComplete={handleColorChange}
                />
            )}
        </Box>
    );
}
