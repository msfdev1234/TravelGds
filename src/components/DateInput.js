import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../conts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DateInput = ({ error, iconName, selectedDate , value}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const styles = StyleSheet.create({
        inputContainer: {
            height: 55,
            marginBottom: 10,
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderWidth: 0.5,
            borderRadius: 10
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
        if (1 < 2) {
            return (
                <View
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start'
                    }}
                >
                    <Text style={styles.dateLabelText}>Select date</Text>
                    <Text style={styles.dateValueText}>{value}</Text>
                </View>
            );
        }

        return (
            <View
                style={{
                    justifyContent: 'center',
                    flex: 1,
                    alignItems: 'flex-start'
                }}
            >
                <Text style={{ color: 'black' }}>Select dates</Text>
            </View>
        );
    };
    const View2 = () => {};
    return (
        <View
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
        </View>
    );
};

export default DateInput;
