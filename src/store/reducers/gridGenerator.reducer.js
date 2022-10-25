import { v4 as uuidv4 } from 'uuid';

import {
    ADD_COLOR,
    DELETE_COLOR,
    SET_HEX_CURRENT_COLOR,
    CHANGE_CURRENT_COLOR,
    SET_GRID_LIST_LENGTH,
    SET_BOX_SIZE,
    SET_GRID_COLUMNS,
    SET_SPACE_BETWEEN_BOX,
    SET_COLOR_BOX,
    SET_MAIN_BOXES_COLOR,
    SET_BACKGROUND_COLOR,
    SET_BOX_BORDER_RADIUS,
} from '../actions/gridGenerator..actions';

const getHexColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);

const gridGeneratorDefaultState = {
    grid: {
        gridList: new Array(40),
        boxSize: 20,
        boxBorderRadius: 0,
        gridColumns: 7,
        spaceBetweenBox: 5,
    },
    color: {
        colorList: [
            {
                id: uuidv4(),
                hexColor: getHexColor(),
                name: 'color1',
            },
        ],
        currentColor: {
            id: null,
            index: null,
            hexColor: null,
            name: null,
        },
        createdColorNumber: 1,
        mainBoxesColor: '#D4EBFA',
        backgroundColor: '#FFFFFF',
    },
};

export default function appReducer(state = gridGeneratorDefaultState, action) {
    switch (action.type) {
        // Grid
        case SET_GRID_LIST_LENGTH: {
            const addBoxs = (nbr) => {
                for (let i = 0; i < nbr; i++) {
                    gridList.push(null);
                }
            };
            const removeBoxs = (nbr) => gridList.splice(-nbr, nbr);
            const gridList = [...state.grid.gridList];
            action.payload > gridList.length
                ? addBoxs(action.payload - gridList.length)
                : removeBoxs(-(action.payload - gridList.length));
            return { ...state, grid: { ...state.grid, gridList } };
        }
        case SET_BOX_SIZE: {
            return { ...state, grid: { ...state.grid, boxSize: action.payload } };
        }
        case SET_BOX_BORDER_RADIUS: {
            return { ...state, grid: { ...state.grid, boxBorderRadius: action.payload } };
        }
        case SET_GRID_COLUMNS: {
            return { ...state, grid: { ...state.grid, gridColumns: action.payload } };
        }
        case SET_SPACE_BETWEEN_BOX: {
            return { ...state, grid: { ...state.grid, spaceBetweenBox: action.payload } };
        }
        case SET_COLOR_BOX: {
            const gridList = [...state.grid.gridList];
            gridList[action.payload] =
                gridList[action.payload] && gridList[action.payload].colorId === state.color.currentColor.id
                    ? null
                    : {
                          colorId: state.color.currentColor.id,
                          hexColor: state.color.currentColor.hexColor,
                      };
            return { ...state, grid: { ...state.grid, gridList } };
        }

        // Color
        case ADD_COLOR: {
            const createdColorNumber = state.color.createdColorNumber + 1;
            const newColor = {
                id: uuidv4(),
                hexColor: getHexColor(),
                name: `color${createdColorNumber}`,
            };
            const currentColor = {
                id: newColor.id,
                index: state.color.colorList.length,
                hexColor: newColor.hexColor,
                name: newColor.name,
            };
            return {
                ...state,
                color: {
                    ...state.color,
                    colorList: [...state.color.colorList, newColor],
                    currentColor,
                    createdColorNumber,
                },
            };
        }
        case DELETE_COLOR: {
            const { id, index } = action.payload;
            console.log(index);
            const colorList = [...state.color.colorList];
            colorList.splice(index, 1);
            const gridList = state.grid.gridList.map((box) => (box && box.colorId === id ? null : box));
            let currentColor = state.color.currentColor;
            if (index === state.color.currentColor.index) {
                const newIndex = colorList[index] ? index : index - 1;
                currentColor = { ...colorList[newIndex], index: newIndex };
            } else if (index < state.color.currentColor.index) {
                currentColor.index--;
            }
            return { ...state, grid: { ...state.grid, gridList }, color: { ...state.color, colorList, currentColor } };
        }
        case CHANGE_CURRENT_COLOR: {
            return { ...state, color: { ...state.color, currentColor: action.payload } };
        }
        case SET_HEX_CURRENT_COLOR: {
            const index = state.color.currentColor.index;
            const currentColor = {
                ...state.color.currentColor,
                hexColor: action.payload,
            };
            const colorList = [...state.color.colorList];
            colorList[index].hexColor = action.payload;
            const gridList = state.grid.gridList.map((box) => {
                if (box && box.colorId === state.color.currentColor.id) {
                    box.hexColor = action.payload;
                    return box;
                }
                return box;
            });
            return { ...state, grid: { ...state.grid, gridList }, color: { ...state.color, colorList, currentColor } };
        }
        case SET_MAIN_BOXES_COLOR: {
            return {
                ...state,
                color: {
                    ...state.color,
                    currentColor: { ...state.color.currentColor, hexColor: action.payload },
                    mainBoxesColor: action.payload,
                },
            };
        }
        case SET_BACKGROUND_COLOR: {
            return {
                ...state,
                color: {
                    ...state.color,
                    currentColor: { ...state.color.currentColor, hexColor: action.payload },
                    backgroundColor: action.payload,
                },
            };
        }
        default:
            return state;
    }
}
