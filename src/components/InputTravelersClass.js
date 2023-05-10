import React, { Component, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../conts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button';

const InputTravelersClass = ({ error, iconName, label, sampleInput }) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [countPassenger, setPassengerCount] = useState(1);
    const [passengerCountText, setPassengerCountText] = useState(countPassenger + ' traveler');

    // Function to increment count by 1
    const incrementCount = () => {
        // Update state with incremented value
        setPassengerCount(countPassenger + 1);
        setPassengerCountText(countPassenger + ' traveler');
    };

    const styles = StyleSheet.create({
        inputContainer: {
            height: 55,
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderWidth: 0.5,
            borderRadius: 10,
            marginBottom: 10
        },
        dateLabelText: {
            color: 'grey',
            padding: 2,
            flex: 1,
            fontSize: 10
        },
        dateValueText: {
            flex: 2,
            fontSize: 14
        },
        dateValueText1: {
            flex: 1,
            textAlignVertical: 'center',
            fontSize: 14
        }
    });

    const InputView = () => {
        return (
            <View
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}
            >
                <Text style={styles.dateLabelText}>{label}</Text>
                <Text style={styles.dateValueText}>{sampleInput}</Text>
            </View>
        );
    };
    const View2 = () => {};
    return (
        <TouchableOpacity
            onPress={incrementCount}
            style={[
                styles.inputContainer,
                {
                    borderColor: error ? COLORS.red : isFocused ? COLORS.darkBlue : COLORS.darkBlue,
                    alignItems: 'center'
                }
            ]}
        >
            <Icon name={iconName} style={{ color: COLORS.black, fontSize: 25, marginRight: 10 }} />
            <InputView />
        </TouchableOpacity>
    );
};

export default InputTravelersClass;
