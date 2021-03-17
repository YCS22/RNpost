import { GET_ALL_POST, GET_POST_BY_ID, GET_COMMENT, SELECT_POST } from '../actions/types';

export const AllReducer = (state = null, action) => {

    switch (action.type) {
        case GET_ALL_POST:
            return action.payload || false;
        default:
            return state;
    }
}


export const GetPostReducer = (state = null, action) => {
    switch (action.type) {
        case GET_POST_BY_ID:
            return action.payload || false;
        default:
            return state;
    }
}



export const GetCommentReducer = (state = null, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return action.payload || false;
        default:
            return state;
    }
}



export const ListSelectReducer = (state = null, action) => {
    switch (action.type) {
        case SELECT_POST:
            return action.payload;
        default: return state;
    }
}