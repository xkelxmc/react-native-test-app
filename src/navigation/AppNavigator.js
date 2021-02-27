import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import AboutScreen from '../screens/AboutScreen';
import CreateScreen from '../screens/CreateScreen';
import BookedScreen from '../screens/BookedScreen';
import PostScreen from '../screens/PostScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const PostStack = createStackNavigator();
const BookedStack = createStackNavigator();
const CreateStack = createStackNavigator();

const PostNavigator = () => {
    return (
        <PostStack.Navigator>
            <PostStack.Screen name={'MainList'} component={MainScreen} options={{ headerTitle: 'Посты' }} />
            <PostStack.Screen name={'MainPost'} component={PostScreen} />
        </PostStack.Navigator>
    );
};

const BookedNavigator = () => {
    return (
        <BookedStack.Navigator>
            <BookedStack.Screen name={'BookedList'} component={BookedScreen} />
            <BookedStack.Screen name={'BookedPost'} component={PostScreen} />
        </BookedStack.Navigator>
    );
};

const TabsNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Main') {
                        iconName = focused ? 'md-list-circle-outline' : 'md-list-circle';
                    } else if (route.name === 'Booked') {
                        iconName = focused ? 'bookmark-outline' : 'bookmark';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name={'Main'} component={PostNavigator} />
            <Tabs.Screen name={'Booked'} component={BookedNavigator} />
        </Tabs.Navigator>
    );
};

const CreateNavigator = () => {
    return (
        <CreateStack.Navigator>
            <CreateStack.Screen name={'Create'} component={CreateScreen} />
        </CreateStack.Navigator>
    );
};

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Tabs'>
                <Drawer.Screen name='Tabs' options={{ drawerLabel: 'Главная' }} component={TabsNavigator} />
                <Drawer.Screen name='About' options={{ drawerLabel: 'О приложении' }} component={AboutScreen} />
                <Drawer.Screen name='Create' options={{ drawerLabel: 'Новый пост' }} component={CreateNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
