import React from 'react';
import PropTypes from 'prop-types';

export default function TabPanel({ children, tabValue, index, id, ariaLabelledby, ...other }) {
    return (
        <div
            role='tabpanel'
            hidden={tabValue !== index}
            id={id}
            aria-labelledby={ariaLabelledby}
            {...other}
            style={{
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto'
                
            }}
        >
            {tabValue === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    tabValue: PropTypes.number.isRequired,
};
