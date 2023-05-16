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

import DatePicker from '../../modals/DatePickerCustom';
import FlightSearchScreen from './FlightSearchScreen';

import AirportListOrgData from '../../data/airportsOrg';
import AirportListDestData from '../../data/airportsDest';

function BookingDetailsInputScreen() {
    const [inputs, setInputs] = React.useState({
        flyingFrom: '',
        flyingTo: ''
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const [isVisibleFlightSearch, setIsVisibleFLightSearch] = React.useState(false);
    const [isVisibleDatePickerModal, setIsVisibleDatePickerModal] = React.useState(false);

    const [placeHolderFlightSearch, setPlaceHolderFlightSearch] = React.useState('');
    const [flightData, setFlightData] = React.useState(AirportListOrgData);

    const [departureAirport, setDepartureAirport] = React.useState('Flying from');
    const [arrivalAirport, setArrivalAirport] = React.useState('Flying to');
    const [departureDate, setDepartureDate] = React.useState('18 May');
    const [noOfTravellers, setNoOfTravellers] = React.useState(1);
    const [seatClass, setSeatClass] = React.useState('Economy');

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

    function showDatePickerModal() {
        setIsVisibleDatePickerModal(true);
    }
    function hideDatePickerModal() {
        setIsVisibleDatePickerModal(false);
    }

    onPressFlightOrg = () => {
        setFlightData(AirportListOrgData);
        setIsVisibleFLightSearch(true);
        setPlaceHolderFlightSearch('Flying from');
    };

    onPressFlightDest = () => {
        setFlightData(
            AirportListDestData.filter((item) => {
                item === 'Mumbai(BOM - chhatrapati Shivaji Intl.)';
            })
        );
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
                    flightData={flightData}
                    backHandler={onFlightSearchBackHandler}
                ></FlightSearchScreen>

                <DatePicker
                    isVisibleDatePickerModal={isVisibleDatePickerModal}
                    hideDatePickerModal={hideDatePickerModal}
                ></DatePicker>

                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity onPress={onPressFlightOrg}>
                        <InputTextView
                            onChangeText={(text) => handleOnchange(text, 'email')}
                            iconName="airplane-takeoff"
                            placeholder="Flying from"
                            value={departureAirport}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressFlightDest}>
                        <InputTextView
                            onChangeText={(text) => handleOnchange(text, 'fullname')}
                            iconName="airplane-landing"
                            placeholder="Flying to"
                            value={arrivalAirport}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showDatePickerModal}>
                        <DateInput iconName="calendar-month" value={departureDate} />
                    </TouchableOpacity>

                    <InputTravelersClass
                        iconName="account"
                        label="Travellers"
                        sampleInput="1 Traveller"
                        value={
                            noOfTravellers == 1
                                ? noOfTravellers + ' Traveller'
                                : noOfTravellers + ' Travellers'
                        }
                    />
                    <InputTravelersClass
                        iconName="seat-recline-extra"
                        label="Preferred class"
                        sampleInput="Economy"
                        value={seatClass}
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
