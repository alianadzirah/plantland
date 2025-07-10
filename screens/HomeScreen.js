import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image, Linking } from 'react-native';
import SocialButton from '../components/SocialButton';

export default function HomeScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../assets/leaf.png')} style={styles.imageHeader} />
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.headerTitle}>Hello!</Text>
                    <Text style={styles.headerSubtitle}>Welcome to plantland</Text>
                </View>
                <Image source={require('../assets/monstera.png')} style={styles.image} />
            </View>
            <View style={styles.bodycontainer}>
                <Text style={styles.headerContainer}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.otherRow}>
                    <Text style={styles.footerLink}
                        onPress={() => navigation.navigate('ForgotPassword', { userName: username, password: password })}
                    >Forgot Password</Text>
                </View>
                <Pressable
                    style={styles.buttonHome}
                    onPress={() => navigation.navigate('Details', { userName: username, password: password })}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <View style={styles.footerRow}>
                    <View style={styles.divider}></View>
                    <Text style={styles.footerTitle}>or login with</Text>
                    <View style={styles.divider}></View>
                </View>
                <View style={styles.socialRow}>
                    <SocialButton
                        image={require('../assets/facebook.png')}
                        onPress={() => navigation.navigate('Details', {
                            userName: username,
                            password: password,
                        })}
                    />
                    <SocialButton
                        image={require('../assets/google.png')}
                        onPress={() => navigation.navigate('Details', {
                            userName: username,
                            password: password,
                        })}
                    />
                    <SocialButton
                        image={require('../assets/apple.png')}
                        onPress={() => {
                            Linking.openURL('https://example.com');
                        }}
                    />
                </View>
                <View style={styles.footerRow}>
                    <Text style={styles.footerTitle}>Don't have account?
                        <Text style={styles.footerLink} onPress={() => navigation.navigate('Signup', {
                            userName: username,
                            password: password,
                        })}> Sign Up</Text>
                    </Text>
                </View>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 50,
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
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        marginTop: -20,
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
        justifyContent: 'center'
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
        marginTop: 20,
        borderRadius: 20,
    },
    imageHeader: {
        width: 80,
        height: 80,
        zIndex: 0,
        top: 0,
        left: 0
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: -170,
        zIndex: 1,
    },
    buttonHome: {
        backgroundColor: '#026A75',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
    },
});
