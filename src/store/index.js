import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './reducers/post';

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export default store;
