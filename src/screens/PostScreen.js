import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBooked } from '../store/actions/post';
import { Ionicons } from '@expo/vector-icons';

const PostScreen = ({ navigation, route }) => {
    const { postId } = route.params;
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.list.find(p => p.id === postId));
    const booked = useSelector(state => state.posts.booked.find(p => p.id === postId));

    const handleToggleBooked = () => {
        dispatch(toggleBooked(postId));
    };

    useEffect(() => {
        navigation.setOptions({
            headerTitle: `Пост от ${new Date(post.date).toLocaleDateString()}`,
            headerRight: () => (
                <Pressable
                    onPress={handleToggleBooked}
                    style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1, marginRight: 12 })}
                >
                    <View>
                        <Ionicons name={!booked ? 'bookmark-outline' : 'bookmark'} size={24} color={'red'} />
                    </View>
                </Pressable>
            ),
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Image source={{ uri: post.img }} style={styles.image} />
            <Text style={styles.text}>{post.text}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    image: {
        marginBottom: 12,
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        marginBottom: 12,
        fontFamily: 'AkayaTelivigala',
    },
    text: {
        fontSize: 16,
        fontFamily: 'AkayaTelivigala',
    },
});

export default PostScreen;
