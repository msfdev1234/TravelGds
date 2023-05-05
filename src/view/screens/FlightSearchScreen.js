import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function FlightSearchScreen() {
    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 3,
            padding: 10
        },
        inputFildWholeContainer: {
            height: 50,
            margin: 12,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 3
        },
        inputVectorContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            borderRightWidth: 1,
            borderColor: 'lightgrey',
            borderTopRightRadius: 3
        },
        inputTextFieldContainer: {
            flex: 3
        },
        textInputField: {}
    });

    const onChangeNumber = () => {};

    return (
        <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 50 }}> textInComponent </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />

            <View style={styles.inputFildWholeContainer}>
                <View style={styles.inputVectorContainer}>
                    <MaterialIcons name="flight-takeoff" size={24} color="black" />
                </View>
                <View style={styles.inputTextFieldContainer}>
                    <TextInput style={styles.textInputField}></TextInput>
                </View>
            </View>
        </View>
    );
}

export default FlightSearchScreen;
