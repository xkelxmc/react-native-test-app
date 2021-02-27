import * as Font from 'expo-font';

export async function bootstrap() {
    await Font.loadAsync({
        AkayaTelivigala: require('../assets/fonts/AkayaTelivigala-Regular.ttf'),
    });
}
