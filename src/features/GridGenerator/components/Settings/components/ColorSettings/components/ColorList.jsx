import React from 'react';

import { Button, Divider, Input, List, ListItem, ListItemIcon, Radio, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

export default function ColorList({ colorState, dispatchcolorState }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {/* Backgound Item */}
                <ListItem
                    sx={{
                        marginBottom: '5px',
                        width: '356px',
                    }}
                >
                    <ListItemIcon>
                        <Radio
                            checked={colorState.currentColor.index === -1}
                            onChange={() =>
                                dispatchcolorState.changeCurrentColor(-1, {
                                    id: null,
                                    index: -1,
                                    hexColor: colorState.backgroundColor,
                                    name: 'backgroundColor',
                                })
                            }
                            value={-1}
                            name='color-radio-button'
                            inputProps={{
                                'aria-label': 'Couleur de fond',
                            }}
                        />
                    </ListItemIcon>
                    <ListItemIcon>
                        <Box
                            sx={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '5px',
                                backgroundColor: colorState.backgroundColor,
                            }}
                        />
                    </ListItemIcon>
                    <Typography
                        sx={{
                            width: '180px',
                        }}
                    >
                        Couleur de fond
                    </Typography>
                </ListItem>
                {/* Main color Item */}
                <ListItem
                    sx={{
                        marginBottom: '5px',
                        width: '356px',
                    }}
                >
                    <ListItemIcon>
                        <Radio
                            checked={colorState.currentColor.index === -2}
                            onChange={() =>
                                dispatchcolorState.changeCurrentColor(-2, {
                                    id: null,
                                    index: -2,
                                    hexColor: colorState.mainBoxesColor,
                                    name: 'mainBoxesColor',
                                })
                            }
                            value={-2}
                            name='color-radio-button'
                            inputProps={{
                                'aria-label': 'Couleur principale des boxes',
                            }}
                        />
                    </ListItemIcon>
                    <ListItemIcon>
                        <Box
                            sx={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '5px',
                                backgroundColor: colorState.mainBoxesColor,
                            }}
                        />
                    </ListItemIcon>
                    <Typography
                        sx={{
                            width: '180px',
                        }}
                    >
                        Couleur principale
                    </Typography>
                </ListItem>
                <Divider />
                {colorState.colorList?.map((itemColor, index) => {
                    return (
                        <ListItem
                            key={itemColor.id}
                            sx={{
                                marginBottom: '5px',
                                width: '356px',
                            }}
                            secondaryAction={
                                colorState.colorList.length > 1 ? (
                                    <IconButton
                                        edge='end'
                                        aria-label='Supprimer la couleur'
                                        onClick={() => dispatchcolorState.deleteColor(itemColor.id, index)}
                                    >
                                        <DeleteOutlineOutlinedIcon color='error' />
                                    </IconButton>
                                ) : null
                            }
                        >
                            <ListItemIcon>
                                <Radio
                                    checked={colorState.currentColor.index === index}
                                    onChange={() => dispatchcolorState.changeCurrentColor(index, itemColor)}
                                    value={index}
                                    name='color-radio-button'
                                    inputProps={{
                                        'aria-label': itemColor.name,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemIcon>
                                <Box
                                    sx={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '5px',
                                        backgroundColor: itemColor.hexColor,
                                    }}
                                />
                            </ListItemIcon>
                            <Input
                                value={itemColor.name}
                                id='standard-basic'
                                variant='standard'
                                sx={{
                                    width: '180px',
                                }}
                            />
                        </ListItem>
                    );
                })}
            </List>
            {colorState.colorList.length < 5 && (
                <Button
                    onClick={dispatchcolorState.addColor}
                    variant='outlined'
                    endIcon={<AddIcon />}
                >
                    Ajouter une couleur
                </Button>
            )}
        </Box>
    );
}
