import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Alert, BackHandler } from 'react-native';
import HomeScreen from './src/view/screens/HomeScreen';
import SplashScreen from './src/view/screens/SplashScreen';
import OnBoardScreen from './src/view/screens/OnBoardScreen';
import { useState, useEffect } from 'react';

import BookingDetailsInputScreen from './src/view/screens/BookingDetailsInputScreen';

export default function App() {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel'
                },
                { text: 'YES', onPress: () => BackHandler.backAction }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.appContainer}>
            <StatusBar
                hidden={false}
                backgroundColor="transparent"
                barStyle="dark-content"
                translucent={true}
            />
            <BookingDetailsInputScreen></BookingDetailsInputScreen>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        height: '100%'
    },
    img: {
        width: 30,
        height: 20
    },
    navItem: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});
