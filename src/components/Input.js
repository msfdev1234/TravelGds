import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../conts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Input = ({ label, iconName, error, password, onFocus = () => {}, ...props }) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{ marginBottom: 10 }}>
            <View
                style={[
                    style.inputContainer,
                    {
                        borderColor: error
                            ? COLORS.red
                            : isFocused
                            ? COLORS.darkBlue
                            : COLORS.darkBlue,
                        alignItems: 'center'
                    }
                ]}
            >
                <Icon
                    name={iconName}
                    style={{ color: COLORS.black, fontSize: 25, marginRight: 10 }}
                />
                <TextInput
                    autoCorrect={false}
                    placeholderTextColor={'darkgrey'}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    style={{ color: COLORS.black, flex: 1 }}
                    {...props}
                />
            </View>
            {error && (
                <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>{error}</Text>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: COLORS.grey
    },
    inputContainer: {
        height: 55,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 10
    }
});

export default Input;
