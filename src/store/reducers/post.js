import { LOAD_POSTS, CREATE_POST, REMOVE_POST, TOGGLE_BOOKED } from '../types';

const initialState = {
    list: [],
    booked: [],
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                list: action.payload,
                booked: action.payload.filter(post => post.booked),
            };
        case CREATE_POST:
            return {
                ...state,
                list: [{ ...action.payload }, ...state.list],
            };
        case REMOVE_POST:
            return {
                ...state,
                list: state.list.filter(p => p.id !== action.payload),
                booked: state.booked.filter(p => p.id !== action.payload),
            };
        case TOGGLE_BOOKED:
            const allPosts = state.list.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked;
                }
                return post;
            });
            return {
                ...state,
                list: allPosts,
                booked: allPosts.filter(post => post.booked),
            };
        default:
            return state;
    }
};
