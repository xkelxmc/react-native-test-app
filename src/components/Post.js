import React from 'react';
import { Pressable, View, Image, Text, StyleSheet } from 'react-native';

const Post = ({ post, onOpen }) => {
    return (
        <Pressable onPress={() => onOpen(post)} style={({ pressed }) => [styles.post, { opacity: pressed ? 0.5 : 1 }]}>
            <View>
                <View>
                    <Image source={{ uri: post.img }} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.title}>{post.title}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    post: {
        marginBottom: 24,
    },
    image: {
        marginBottom: 8,
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontFamily: 'AkayaTelivigala',
    },
});

export default Post;
