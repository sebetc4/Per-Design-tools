import { REMOVE_ALERT, SET_ALERT } from '../actions/app.actions';

const appDefaultState = {
    alert: {
        type: null,
        message: null,
    },
};

export default function appReducer(state = appDefaultState, action) {
    switch (action.type) {
        case SET_ALERT: {
            const { type, message } = action.payload;
            return { ...state, alert: { type, message } };
        }
        default:
            return state;
    }
}
