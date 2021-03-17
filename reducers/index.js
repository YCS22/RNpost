import { combineReducers } from 'redux';
import { AllReducer, GetPostReducer, GetCommentReducer, ListSelectReducer } from './ListAllReducer';
export default combineReducers({

    selectListItem: ListSelectReducer,
    listAll: AllReducer,
    PostById: GetPostReducer,
    getComment: GetCommentReducer

})