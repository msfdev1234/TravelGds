import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Keyboard,
    ScrollView,
    Alert,
    Touchable,
    TouchableOpacity
} from 'react-native';

import COLORS from '../../conts/colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputTextView from '../../components/InputTextView';

import Loader from '../../components/Loader';
import DateInput from '../../components/DateInput';
import InputTravelersClass from '../../components/InputTravelersClass';
import FlightSearchScreen from './FlightSearchScreen';

function BookingDetailsInputScreen() {
    const [inputs, setInputs] = React.useState({
        flyingFrom: '',
        flyingTo: ''
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [isVisibleFlightSearch, setIsVisibleFLightSearch] = React.useState(false);
    const [placeHolderFlightSearch, setPlaceHolderFlightSearch] = React.useState('');

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.flyingFrom) {
            handleError('Please input departure location', 'flyingFrom');
            isValid = false;
        }

        if (!inputs.flyingTo) {
            handleError('Please input Arrival location', 'flyingTo');
            isValid = false;
        }

        if (isValid) {
            register();
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);
                AsyncStorage.setItem('userData', JSON.stringify(inputs));
                navigation.navigate('LoginScreen');
            } catch (error) {
                Alert.alert('Error', 'Something went wrong');
            }
        }, 3000);
    };

    const handleOnchange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: error }));
    };

    OnPressFlightOrg = () => {
        setIsVisibleFLightSearch(true);
        setPlaceHolderFlightSearch('Flying from');
    };

    OnPressFlightDest = () => {
        setIsVisibleFLightSearch(true);
        setPlaceHolderFlightSearch('Flying to');
    };

    function onFlightSearchBackHandler() {
        setIsVisibleFLightSearch(false);
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader />

            <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <FlightSearchScreen
                    isVisible={isVisibleFlightSearch}
                    placeHolder={placeHolderFlightSearch}
                    backHandler={onFlightSearchBackHandler}
                ></FlightSearchScreen>
                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity onPress={OnPressFlightOrg}>
                        <InputTextView
                            onChangeText={(text) => handleOnchange(text, 'email')}
                            iconName="airplane-takeoff"
                            placeholder="Flying from"
                            value={'Flying from'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={OnPressFlightDest}>
                        <InputTextView
                            onChangeText={(text) => handleOnchange(text, 'fullname')}
                            iconName="airplane-landing"
                            placeholder="Flying to"
                            value={'Flying to'}
                        />
                    </TouchableOpacity>
                    <DateInput iconName="calendar-month" />
                    <InputTravelersClass
                        iconName="account"
                        label="Travellers"
                        sampleInput="1 Traveller"
                    />
                    <InputTravelersClass
                        iconName="seat-recline-extra"
                        label="Preferred class"
                        sampleInput="Economy"
                    />
                </View>
            </ScrollView>
            <View
                style={{
                    position: 'absolute',
                    left: 20,
                    right: 20,
                    marginVertical: 10,
                    bottom: 0
                }}
            >
                <Button title="Search" onPress={validate} />
            </View>
        </SafeAreaView>
    );
}

export default BookingDetailsInputScreen;
