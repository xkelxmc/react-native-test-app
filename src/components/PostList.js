import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Post from './Post';

const PostList = ({ data, onOpen }) => {
    return (
        <View style={styles.root}>
            <FlatList
                data={data}
                contentContainerStyle={styles.container}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        padding: 12,
    },
});

export default PostList;
