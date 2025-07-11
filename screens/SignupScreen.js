import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image } from 'react-native';
import IconTextInput from '../components/LoginInput'

export default function SignupScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../assets/leaf.png')} style={styles.imageHeader} />
            <View style={styles.bodycontainer}>
                <View style={styles.footerRow}>
                    <Text style={styles.footerLink} onPress={() => navigation.navigate('Home', {
                        userName: username,
                        password: password,
                    })}>&larr; Back to login</Text>
                </View>

                <Text style={styles.headerContainer}>Sign Up</Text>
                <IconTextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Email"
                    prefixIcon="mail-outline"
                    suffixIcon="clear"
                    onSuffixPress={() => setUsername('')}
                />
                <IconTextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    prefixIcon="lock-outline"
                    suffixIcon={showPassword ? 'visibility-off' : 'visibility'}
                    onSuffixPress={() => setShowPassword(!showPassword)}
                    secureTextEntry={!showPassword}
                />
                <IconTextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    prefixIcon="lock-outline"
                    suffixIcon={showConfirmPassword ? 'visibility-off' : 'visibility'}
                    onSuffixPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    secureTextEntry={!showConfirmPassword}
                />
                <IconTextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Phone"
                    prefixIcon="smartphone"
                    suffixIcon="clear"
                    onSuffixPress={() => setPhoneNumber('')}
                />
                <Pressable
                    style={styles.buttonHome}
                    onPress={() => navigation.navigate('Details', { userName: username, password: password })}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    divider: {
        borderTopColor: 'gray',
        borderTopWidth: 1,
        width: '30%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginBottom: 50,
        marginTop: 50
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
    },
    otherRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        marginTop: 10
    },
    footerRow: {
        flexDirection: 'row',

        alignItems: 'center',
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginLeft: 60,
        marginRight: 60,
    },
    headerTitle: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 55,

    },
    headerSubtitle: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 15
    },
    headerContainer: {
        color: '#026A75',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#026A75'
    },
    bodycontainer: {
        flex: 1,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        backgroundColor: '#ddd',
        width: '100%',
        bottom: 0,
        // justifyContent: 'center' 
    },
    footerTitle: {
        fontFamily: 'Poppins-Regular',
        color: 'gray',
        fontSize: 12
    },
    footerLink: {
        fontFamily: 'Poppins-Regular',
        color: '#026A75',
        fontSize: 12
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        borderRadius: 20,
    },
    imageHeader: {
        width: 80,
        height: 80,
        marginBottom: 80,
        zIndex: 0,
        top: 0,
        left: 0
    },
    buttonHome: {
        backgroundColor: '#026A75',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        margin: 40,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
    },
});
