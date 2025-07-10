import { Linking } from 'react-native';

const openURL = async () => {
    const url = 'https://youtube.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert(`Can't handle URL: ${url}`);
    }
};


const openURLL = () => {
    Linking.openURL('https://example.com');
};