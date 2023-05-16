import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/view/screens/HomeScreen';
import SplashScreen from './src/view/screens/SplashScreen';
import FlightSearchScreen from './src/view/screens/FlightSearchScreen';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <StatusBar
                hidden={false}
                backgroundColor="#675b30"
                barStyle="dark-content"
                translucent={true}
            />
            <HomeScreen></HomeScreen>
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
