import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard, TextInput, StyleSheet } from 'react-native';
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Создать пост',
        });
    }, []);
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.root}>
                    <Text style={styles.title}>Создать новый пост</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Введите заголовок'}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.textArea}
                        placeholder={'Введите текст'}
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 12,
    },
    title: {
        marginBottom: 12,
    },
    input: {
        width: '100%',
        padding: 8,
        backgroundColor: '#e9e9e9',
        borderRadius: 13,
        marginBottom: 12,
    },
    textArea: {
        width: '100%',
        padding: 8,
        backgroundColor: '#e9e9e9',
        borderRadius: 13,
        marginBottom: 12,
    },
});

export default CreateScreen;
