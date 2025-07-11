import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconTextInput = ({
    value,
    onChangeText,
    placeholder,
    prefixIcon,
    suffixIcon,
    onSuffixPress,
    secureTextEntry = false,
    keyboardType = 'default',
    style = {},
}) => {
    return (
        <View style={[styles.inputContainer, style]}>
            {prefixIcon && (
                <Icon name={prefixIcon} size={20} color="#ccc" style={styles.icon} />
            )}

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#ccc"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize="none"
            />

            {suffixIcon && onSuffixPress && (
                <TouchableOpacity onPress={onSuffixPress}>
                    <Icon name={suffixIcon} size={20} color="#ccc" style={styles.icon} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        borderRadius: 20,
    },
    icon: {
        marginHorizontal: 8,
    },
    input: {
        flex: 1,
        height: 40,
        // fontSize: 16,
        color: '#ccc',
        fontFamily: 'Poppins-Regular'
    },
});

export default IconTextInput;
