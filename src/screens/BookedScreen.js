import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../store/actions/post';
import PostList from '../components/PostList';

const BookedScreen = ({ navigation }) => {
    const bookedPosts = useSelector(state => state.posts.booked);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts());
    }, []);
    const handleOpen = post => {
        navigation.navigate('BookedPost', { postId: post.id });
    };
    return <PostList data={bookedPosts} onOpen={handleOpen} />;
};

export default BookedScreen;
