// 
import {
    SELECT_POST,
    GET_ALL_POST,
    GET_POST_BY_ID,
    GET_COMMENT
} from './types';
import data from '../api/data';


export const selectpost = (postid) => {
    return {
        type: SELECT_POST, payload: postid
    };
}

//get all Post
export const getAllPost = () => async dispatch => {

    const response = await data.get('/posts');
    dispatch({ type: GET_ALL_POST, payload: response.data })



}

// get post by Id
export const getPostById = (id) => async dispatch => {
    const response = await data.get(`/posts/${id}`);
    dispatch({ type: GET_POST_BY_ID, payload: response.data })
}

//GET comment by id
export const getCommentByPostId = (id) => async dispatch => {
    const response = await data.get(`/posts/${id}/comments`);
    dispatch({ type: GET_COMMENT, payload: response.data })
}


