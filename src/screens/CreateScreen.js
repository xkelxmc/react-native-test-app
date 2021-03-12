import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';
import PhotoPicker from '../components/PhotoPicker';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/actions/post';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Создать пост',
        });
    }, []);
    const handleSave = () => {
        const post = {
            date: new Date().toString(),
            text,
            title,
            img: 'https://via.placeholder.com/385x200',
        };
        dispatch(createPost(post));
        navigation.goBack();
    };
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
                    <Button title={'Создать'} onPress={handleSave} disable={!title || !text} />
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
