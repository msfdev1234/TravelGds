import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../conts/colors';

function AirportView({ nameAirport, countryAirport, itemChoosenHandler }) {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal: 10
        },
        textContainer: {
            marginLeft: 10
        }
    });
    return (
        <TouchableOpacity onPress={itemChoosenHandler}>
            <View style={styles.container}>
                <Icon
                    name={'map-marker'}
                    style={{ color: COLORS.black, fontSize: 20, marginRight: 5 }}
                ></Icon>
                <View style={styles.textContainer}>
                    <Text
                        style={{
                            fontWeight: '500',
                            marginBottom: 2,
                            fontSize: 14
                        }}
                    >
                        {nameAirport}
                    </Text>
                    <Text style={{ fontWeight: 'normal' }}>India</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default AirportView;
