import * as Font from 'expo-font';
import { DB } from './db';

export async function bootstrap() {
    await Font.loadAsync({
        AkayaTelivigala: require('../assets/fonts/AkayaTelivigala-Regular.ttf'),
    });
    try {
        await DB.init();
        console.log('DB runing');
    } catch (e) {
        console.log('error', e);
    }
}
