import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { AppNavigator } from './src/navigation/AppNavigator';
import { bootstrap } from './src/bootstrap';
import store from './src/store';

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} onError={console.warn} />;
    }

    return (
        <Provider store={store}>
            <StatusBar style='auto' />
            <AppNavigator />
        </Provider>
    );
}
