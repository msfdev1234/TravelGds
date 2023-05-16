import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Modal,
    TextInput,
    SafeAreaView,
    Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../conts/colors';
import AirportListData from '../../data/airportsOrg';
import AirportView from './ViewsFlatList/AirportView';

function FlightSearchScreen({ placeHolder, isVisible, backHandler }) {
    const styles = StyleSheet.create({
        taskBar: {
            marginLeft: 10,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center'
        },
        searchInput: {
            fontSize: 18
        },
        dividerLine: {
            height: 0.4,
            width: '100%',
            marginTop: 15,
            backgroundColor: 'lightgrey'
        }
    });

    const [search, setSearch] = useState('');

    const [filteredDataSource, setFilteredDataSource] = useState(AirportListData);
    const [masterDataSource, setMasterDataSource] = useState(AirportListData);

    function onchangeTextInputListener(text) {
        updateTextInputValue(text);
    }

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <Modal visible={isVisible} animationType="slide">
            <SafeAreaView>
                <View style={{}}>
                    <View style={styles.taskBar}>
                        <TouchableOpacity onPress={backHandler}>
                            <Icon
                                name={'arrow-left'}
                                style={{ color: COLORS.blue, fontSize: 25, marginRight: 10 }}
                            ></Icon>
                        </TouchableOpacity>

                        <TextInput
                            placeholder={placeHolder}
                            onChangeText={(text) => searchFilterFunction(text)}
                            value={search}
                            placeholderTextColor={COLORS.grey}
                            autoFocus={true}
                            style={styles.searchInput}
                        ></TextInput>
                    </View>
                    <View style={styles.dividerLine}></View>

                    <FlatList
                        data={filteredDataSource}
                        renderItem={({ item }) => (
                            <AirportView nameAirport={item.name} countryAirport={item.country} />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    );
}

export default FlightSearchScreen;
