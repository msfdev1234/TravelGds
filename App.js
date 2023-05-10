import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/view/screens/HomeScreen';
import SplashScreen from './src/view/screens/SplashScreen';
import OnBoardScreen from './src/view/screens/OnBoardScreen';
import BookingDetailsInputScreen from './src/view/screens/BookingDetailsInputScreen';

export default function App() {
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
