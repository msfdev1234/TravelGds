import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StatusBar, Image, FlatList } from 'react-native';

function HomeScreen() {
    const styles = StyleSheet.create({
        scrollContainer: {
            backgroundColor: 'orange'
        },
        topContainer: {
            height: 250,
            backgroundColor: '#202844',
            justifyContent: 'center'
        },
        txt: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
            marginLeft: 12
        },
        logoContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            bottom: 22,
            alignItems: 'flex-start'
        },
        btnsLayout: {
            borderWidth: 1,
            width: '90%',
            backgroundColor: 'white',
            position: 'absolute',
            top: -80,
            borderColor: 'grey',
            borderRadius: 10
        },
        subBtnLayout: {
            flexDirection: 'row'
        },
        button: {
            flex: 1,
            flexDirection: 'row',
            paddingTop: 15,
            paddingLeft: 20,
            paddingBottom: 15,
            justifyContent: 'flex-start',
            borderColor: 'black',
            borderBottomWidth: 1 / 2
        },
        buttonLeftTop: {
            borderRightWidth: 1 / 2
        },
        buttonRightTop: {
            borderLeftWidth: 1 / 2
        },
        buttonLastTop: {
            borderBottomWidth: 0
        },
        btnText: {
            marginLeft: 20
        },
        itemContainer: {
            width: 300,
            borderWidth: 1,
            borderColor: 'grey',
            margin: 10,
            borderRadius: 5
        },
        itemImage: {
            width: '100%',
            height: 170,
            alignItems: 'center',
            justifyContent: 'center'
        },
        itemText: {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: '500',
            textAlignVertical: 'center',
            marginTop: 10,
            marginLeft: 10,
            textAlign: 'left'
        },
        flatListContainer: {
            marginLeft: 10,
            width: '100%'
        }
    });

    const places = [
        {
            name: 'New York',
            description: 'mountains, sea,  beaches, monuments and many more',
            image: 'https://images.unsplash.com/photo-1490650404312-a2175773bbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            name: 'new york',
            description: 'mountains, sea,  beaches, monuments and many more',
            image: 'https://images.unsplash.com/photo-1490650404312-a2175773bbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            name: 'new york',
            description: 'mountains, sea,  beaches, monuments and many more',
            image: 'https://images.unsplash.com/photo-1490650404312-a2175773bbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
    ];

    const placeView = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={[styles.itemText, { fontWeight: '500', fontSize: 12 }]}>TRAVEL GUIDE</Text>
            <Text style={[styles.itemText, { fontSize: 18, marginTop: 5 }]}>{item.name}</Text>
            <Text
                numberOfLines={1}
                style={[
                    styles.itemText,
                    { fontWeight: '300', fontSize: 14, marginTop: 5, marginBottom: 10 }
                ]}
            >
                {item.description}
            </Text>
            <Image style={styles.itemImage} source={{ uri: item.image }}></Image>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ backgroundColor: 'lightgray' }}>
                    <View style={styles.topContainer}>
                        <View style={styles.logoContainer}>
                            <Fontisto name="holiday-village" size={36} color="yellow" />
                            <Text style={styles.txt}>AfroAtlas</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={styles.btnsLayout}>
                            <View style={styles.subBtnLayout}>
                                <View style={[styles.button, styles.buttonLeftTop]}>
                                    <FontAwesome name="plane" size={24} color="black" />
                                    <Text style={styles.btnText}>Flights</Text>
                                </View>

                                <View style={[styles.button, styles.buttonRightTop]}>
                                    <MaterialIcons name="apartment" size={24} color="black" />
                                    <Text style={styles.btnText}>Hotels</Text>
                                </View>
                            </View>
                            <View style={styles.subBtnLayout}>
                                <View style={[styles.button, styles.buttonLeftTop]}>
                                    <Ionicons name="car-sharp" size={24} color="black" />
                                    <Text style={styles.btnText}>Cars</Text>
                                </View>
                                <View style={[styles.button, styles.buttonRightTop]}>
                                    <MaterialCommunityIcons
                                        name="package"
                                        size={24}
                                        color="black"
                                    />
                                    <Text style={styles.btnText}>Packages</Text>
                                </View>
                            </View>
                            <View style={styles.subBtnLayout}>
                                <View
                                    style={[
                                        styles.button,
                                        styles.buttonLeftTop,
                                        styles.buttonLastTop
                                    ]}
                                >
                                    <FontAwesome5 name="ticket-alt" size={24} color="black" />
                                    <Text style={styles.btnText}>Things to do</Text>
                                </View>
                                <View
                                    style={[
                                        styles.button,
                                        styles.buttonRightTop,
                                        styles.buttonLastTop
                                    ]}
                                >
                                    <Fontisto name="holiday-village" size={24} color="black" />
                                    <Text style={[styles.btnText, { marginLeft: 15, top: 5 }]}>
                                        Holiday
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{ marginLeft: 20, marginTop: 120, fontSize: 20, fontWeight: 'bold' }}>
                    Popular cities to explore
                </Text>

                <FlatList
                    horizontal
                    data={places}
                    renderItem={placeView}
                    style={styles.flatListContainer}
                ></FlatList>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;
