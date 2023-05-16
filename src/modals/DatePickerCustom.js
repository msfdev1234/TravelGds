import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Modal, DatePickerIOSBase } from 'react-native';

function DatePicker({ isVisibleDatePickerModal }) {
    const [bgColor, setBgColor] = useState('red');

    while (1 < 2) {
        setTimeout(() => {}, 2000);
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: bgColor,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    return (
        <Modal>
            <View style={styles.container}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 28,
                        fontWeight: 'bold',
                        alignItems: 'center'
                    }}
                >
                    time
                </Text>
            </View>
        </Modal>
    );
}

export default DatePicker;
