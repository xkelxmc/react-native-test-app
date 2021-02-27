import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { loadPosts } from '../store/actions/post';
import { Text, View } from 'react-native';

const MainScreen = ({ navigation }) => {
    const posts = useSelector(state => state.posts.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts());
    }, []);
    const handleOpen = post => {
        navigation.navigate('MainPost', { postId: post.id });
    };
    return <PostList data={posts} onOpen={handleOpen} />;
};

export default MainScreen;
