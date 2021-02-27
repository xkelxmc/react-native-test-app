import React, { useState } from 'react';
import { Alert, Button, Image, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const askPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
    if (status !== 'granted') {
        Alert.alert('Ошибка', 'Вы не дали права');
        return false;
    }
    return true;
};

const PhotoPicker = () => {
    const [image, setImage] = useState(null);
    const handlePress = async () => {
        const hasPermission = await askPermissions();

        if (!hasPermission) {
            return;
        }
        const img = await ImagePicker.launchImageLibraryAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9],
        });
        setImage(img.uri);
    };
    return (
        <View>
            <Button title={'Загрузить фото'} onPress={handlePress} />
            {image && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        marginTop: 12,
    },
});

export default PhotoPicker;
