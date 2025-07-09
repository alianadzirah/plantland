import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const LoginInput = ({ image, onPress, backgroundColor = '#FFF9FF', textColor = '#fff' }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
            <Image source={image} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 28,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 25,
        height: 25
    }
});

export default LoginInput;
