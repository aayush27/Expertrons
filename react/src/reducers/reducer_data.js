import {
    MENTOR_DATA,
    ADD_MENTOR_DATA
} from "../actions/api";

export default function (state = {}, action) {
    switch (action.type) {
        case MENTOR_DATA:
            return { ...state, mentor_data: action.data };
        case ADD_MENTOR_DATA:
            return { ...state, add_mentor_data: action.data };
        default:
            return state;
    }
}