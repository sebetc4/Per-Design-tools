import React from 'react';

import { Box } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CropFreeIcon from '@mui/icons-material/CropFree';
import HeightIcon from '@mui/icons-material/Height';
import { TbBorderRadius } from 'react-icons/tb';

import { InputBox } from './components';

export default function gridState({ gridState, dispatchGridState }) {
    const { gridList, gridColumns, boxSize, boxBorderRadius, spaceBetweenBox } = gridState;
    const { setGridListLength, setGridColumns, setBoxSize, setBoxBorderRadius, setSpaceBetweenBox } = dispatchGridState;

    return (
        <Box>
            <InputBox
                icon={<CheckBoxOutlineBlankIcon />}
                label={'Nombre de case'}
                min={1}
                max={999}
                initialValue={gridList.length}
                handleValueChange={(value) => setGridListLength(value)}
            />
            <InputBox
                icon={<ViewWeekIcon />}
                label={'Nombre de colonne'}
                min={1}
                max={100}
                initialValue={gridColumns}
                handleValueChange={(value) => setGridColumns(value)}
            />
            <InputBox
                icon={<CropFreeIcon />}
                label={'Taille de case'}
                min={10}
                max={50}
                initialValue={boxSize}
                handleValueChange={(value) => setBoxSize(value)}
            />
            <InputBox
                icon={<TbBorderRadius size={24} />}
                label={'Border radius'}
                min={0}
                max={100}
                initialValue={boxBorderRadius}
                handleValueChange={(value) => setBoxBorderRadius(value)}
            />
            <InputBox
                icon={<HeightIcon sx={{ transform: 'rotate(90deg)' }} />}
                label={'Espace entre les cases'}
                min={0}
                max={20}
                initialValue={spaceBetweenBox}
                handleValueChange={(value) => setSpaceBetweenBox(value)}
            />
        </Box>
    );
}
