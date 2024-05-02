import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'; // Corrected import
import { RootStackParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Corrected import

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const Settings: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.primary,
            }}>
            <Text>Settings</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('SettingsDetails')}
                style={styles.button}
                activeOpacity={0.8}>
                <Text style={styles.buttonText}>Go To Settings Detail</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.button}
                activeOpacity={0.8}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 17,
        margin: 10,
        borderRadius: 5,
        fontSize: 18,
        width: 180,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
