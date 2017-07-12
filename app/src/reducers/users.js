import {
    GET_ALL_USERS
} from '../constants/actionTypes';

const initialState = {
    all: [],
    list: [],
    listMeta: {
        offset: 0
    }
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                all: action.payload
            };
        default:
            return state;
    }
}
