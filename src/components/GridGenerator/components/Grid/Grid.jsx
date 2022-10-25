import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Box } from '@mui/material';
import { Container } from '@mui/system';

export default function Grid({ gridState, colorState, dispatchGridState }) {

    // Props
    const { gridList, boxSize, boxBorderRadius, gridColumns, spaceBetweenBox } = gridState;
    const { currentColor, mainBoxesColor } = colorState;

    const disableClick = currentColor.index === -1 || currentColor.index === -2;

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    margin: '50px 0',
                    display: 'inline-grid',
                    gridTemplateColumns: `repeat(${gridColumns}, ${boxSize}px)`,
                    gap: `${spaceBetweenBox}px`,
                }}
            >
                {gridList?.map((box, index) => {
                    return (
                        <Box
                            key={uuidv4()}
                            sx={{
                                width: boxSize,
                                height: boxSize,
                                borderRadius: `${boxBorderRadius / 2}%`,
                                cursor: disableClick ? 'default' : 'pointer',
                                backgroundColor: box ? box.hexColor : mainBoxesColor,
                                transition: 'backgound-color .5s ease',
                                '&:hover': {
                                    border: disableClick
                                        ? 'none'
                                        : `${boxSize / 6}px solid ${
                                              box && box.colorId === currentColor.id
                                                  ? mainBoxesColor
                                                  : currentColor.hexColor
                                          }`,
                                },
                            }}
                            onClick={() => !disableClick && dispatchGridState.setColorBox(index)}
                        />
                    );
                })}
            </Box>
        </Container>
    );
}
