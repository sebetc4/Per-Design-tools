import React, { useState } from 'react';

import { Box, Button } from '@mui/material';
import { generateHtmlCode, generateJsCode, generateCssCode } from './utils';
import { Textarea } from './components';

export default function CodeGenerator({ gridState, colorState }) {
    // Props
    const { gridList, boxSize, gridColumns, boxBorderRadius, spaceBetweenBox } = gridState;
    const { colorList, mainBoxesColor, backgroundColor } = colorState;

    // State
    const [generaredCode, setGeneratedCode] = useState(false);
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');

    const generateCode = () => {
        setHtmlCode(generateHtmlCode());
        setCssCode(
            generateCssCode(gridColumns, boxSize, boxBorderRadius, spaceBetweenBox, mainBoxesColor, backgroundColor, gridList, colorList)
        );
        setJsCode(generateJsCode(gridList, colorList));
        setGeneratedCode(true);
    };

    return (
        <Box
            textAlign='center'
            sx={{
                margin: '50px 0',
            }}
        >
            <Button
                onClick={generateCode}
                variant='outlined'
            >
                Générer le code
            </Button>
            {generaredCode && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '50px',
                    }}
                >
                    <Textarea
                        title='index.html'
                        ariaLabel='Code HTML'
                        value={htmlCode}
                    />
                    <Textarea
                        title='index.css'
                        ariaLabel='Code CSS'
                        value={cssCode}
                    />
                    <Textarea
                        title='index.js'
                        ariaLabel='Code JS'
                        value={jsCode}
                    />
                </Box>
            )}
        </Box>
    );
}
