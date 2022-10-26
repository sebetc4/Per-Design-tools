import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Tab, Tabs, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ColorSettings, GridSettings, TabPanel } from './components';

export default function Settings({ gridState, colorState, dispatchAppState, dispatchGridState, dispatchColorState, gridContainerRef }) {

    // Hooks
    const theme = useTheme();

    // State
    const [tabValue, setTabValue] = useState(0);

    return (
        <>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                }}
            >
                <Tabs
                    value={tabValue}
                    onChange={(event, newValue) => setTabValue(newValue)}
                    aria-label='Réglages'
                    centered
                >
                    <Tab
                        label='Grille'
                        id='grid-generator-options-tab-grid'
                        aria-controls='grid-generator-options-tabpanel-grid'
                    />
                    <Tab
                        label='Couleurs'
                        id='grid-generator-options-tab-colors'
                        aria-controls='grid-generator-options-tabpanel-colors'
                    />
                    <Tab
                        label='Animation'
                        id='grid-generator-options-tab-animations'
                        aria-controls='grid-generator-options-tabpanel-animations'
                    />
                </Tabs>
            </Box>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tabValue}
                onChangeIndex={(index) => setTabValue(index)}
            >
                <TabPanel
                    sx={{
                        minHeight: '800px'
                    }}
                    tabValue={tabValue}
                    index={0}
                    dir={theme.direction}
                    id='grid-generator-options-tabpanel-grid'
                    ariaLabelledby='grid-generator-options-tab-grid'
                >
                    <GridSettings
                        gridState={gridState}
                        dispatchAppState={dispatchAppState}
                        dispatchGridState={dispatchGridState}
                        gridContainerRef={gridContainerRef}
                    />
                </TabPanel>
                <TabPanel
                    tabValue={tabValue}
                    index={1}
                    dir={theme.direction}
                    id='grid-generator-options-tabpanel-colors'
                    ariaLabelledby='grid-generator-options-tab-colors'
                >
                    <ColorSettings
                        gridState={gridState}
                        colorState={colorState}
                        dispatchColorState={dispatchColorState}
                    />
                </TabPanel>
                <TabPanel
                    tabValue={tabValue}
                    index={2}
                    dir={theme.direction}
                    id='grid-generator-options-tabpanel-animations'
                    ariaLabelledby='grid-generator-options-tab-animations'
                >
                    <p>Animations!</p>
                </TabPanel>
            </SwipeableViews>
        </>
    );
}
