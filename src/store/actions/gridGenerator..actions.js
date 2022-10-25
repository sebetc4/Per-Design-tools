// Grid
export const SET_GRID_LIST_LENGTH = 'SET_GRID_LIST_LENGTH';
export const SET_BOX_SIZE = 'SET_BOX_SIZE';
export const SET_BOX_BORDER_RADIUS = 'SET_BOX_BORDER_RADIUS'
export const SET_GRID_COLUMNS = 'SET_GRID_COLUMNS';
export const SET_SPACE_BETWEEN_BOX = 'SET_SPACE_BETWEEN_BOX';
export const SET_COLOR_BOX = 'SET_COLOR_BOX';
// Color
export const ADD_COLOR = 'ADD_COLOR';
export const DELETE_COLOR = 'DELETE_COLOR';
export const CHANGE_CURRENT_COLOR = 'CHANGE_CURRENT_COLOR';
export const SET_HEX_CURRENT_COLOR = 'SET_HEX_CURRENT_COLOR';
export const SET_MAIN_BOXES_COLOR = 'SET_MAIN_BOXES_COLOR';
export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';

// Grid
export const setGridListLength = (listLength) => {
    return {
        type: SET_GRID_LIST_LENGTH,
        payload: listLength,
    };
};

export const setBoxSize = (value) => {
    return {
        type: SET_BOX_SIZE,
        payload: value,
    };
};

export const setBoxBorderRadius = (value) => {
    return {
        type: SET_BOX_BORDER_RADIUS,
        payload: value
    }
}

export const setGridColumns = (value) => {
    return {
        type: SET_GRID_COLUMNS,
        payload: value,
    };
};

export const setSpaceBetweenBox = (value) => {
    return {
        type: SET_SPACE_BETWEEN_BOX,
        payload: value,
    };
};

export const setColorBox = (index) => {
    return {
        type: SET_COLOR_BOX,
        payload: index,
    };
};

// Color Settings
export const addColor = () => {
    return {
        type: ADD_COLOR,
        payload: '',
    };
};

export const deleteColor = (id, index) => {
    return {
        type: DELETE_COLOR,
        payload: {
            id,
            index,
        },
    };
};

export const changeCurrentColor = (index, color) => {
    return {
        type: CHANGE_CURRENT_COLOR,
        payload: {
            index,
            ...color,
        },
    };
};

export const setHexCurrentColor = (hexColor) => {
    return {
        type: SET_HEX_CURRENT_COLOR,
        payload: hexColor,
    };
};

export const setMainBoxesColor = (color) => {
    return {
        type: SET_MAIN_BOXES_COLOR,
        payload: color,
    };
};

export const setBackgroundColor = (color) => {
    return {
        type: SET_BACKGROUND_COLOR,
        payload: color,
    };
};
