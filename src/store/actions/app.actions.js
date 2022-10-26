// Grid
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';


// Grid
export const setAlert = (alert) => {
    return {
        type: SET_ALERT,
        payload: alert,
    };
};