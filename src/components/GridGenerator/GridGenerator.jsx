import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addColor,
    setBoxSize,
    setGridColumns,
    setSpaceBetweenBox,
    deleteColor,
    changeCurrentColor,
    setHexCurrentColor,
    setGridListLength,
    setColorBox,
    setMainBoxesColor,
    setBackgroundColor,
    setBoxBorderRadius,
} from '../../store/actions/gridGenerator..actions';

import { CodeGenerator, Grid, Settings } from './components';

export default function GridGenerator() {
    // Hooks
    const dispatch = useDispatch();

    // Store
    const gridGeneratorState = useSelector((state) => state.gridGenerator);
    const { grid: gridState, color: colorState } = gridGeneratorState;

    const dispatchGridState = {
        setGridListLength: (value) => dispatch(setGridListLength(value)),
        setGridColumns: (value) => dispatch(setGridColumns(value)),
        setBoxSize: (value) => dispatch(setBoxSize(value)),
        setBoxBorderRadius: (value) => dispatch(setBoxBorderRadius(value)),
        setSpaceBetweenBox: (value) => dispatch(setSpaceBetweenBox(value)),
        setColorBox: (index) => dispatch(setColorBox(index)),
    };

    const dispatchColorState = {
        addColor: () => dispatch(addColor()),
        deleteColor: (id, index) => dispatch(deleteColor(id, index)),
        changeCurrentColor: (index, color) => dispatch(changeCurrentColor(index, color)),
        setHexCurrentColor: (color) => dispatch(setHexCurrentColor(color.hex)),
        setMainBoxesColor: (color) => dispatch(setMainBoxesColor(color.hex)),
        setBackgroundColor: (color) => dispatch(setBackgroundColor(color.hex)),
    };

    // Init current Color
    useEffect(() => {
        dispatch(changeCurrentColor(0, colorState.colorList[0]));
    }, []);

    return (
        <>
            <Typography
                variant='h1'
                sx={{
                    fontSize: '40px',
                    textAlign: 'center',
                    padding: '50px 0',
                }}
            >
                Générateur de grille
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    height: '100%',
                    borderBottom: 1,
                    borderTop: 1,
                    borderColor: '#CECECE',
                }}
            >
                <Box
                    sx={{
                        width: '700px',
                        borderRight: 1,
                        borderColor: '#CECECE',
                    }}
                >
                    <Settings
                        gridState={gridState}
                        colorState={colorState}
                        dispatchGridState={dispatchGridState}
                        dispatchColorState={dispatchColorState}
                    />
                </Box>
                <Box
                    sx={{
                        flex: '1',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colorState.backgroundColor,
                    }}
                >
                    <Grid
                        gridState={gridState}
                        colorState={colorState}
                        dispatchGridState={dispatchGridState}
                    />
                </Box>
            </Box>
            <CodeGenerator
                gridState={gridState}
                colorState={colorState}
            />
        </>
    );
}
