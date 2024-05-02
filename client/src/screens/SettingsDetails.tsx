import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Routes from '../constants/Routes';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../../types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

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
            <Text>Settings Detail</Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.button}
                activeOpacity={0.8}>
                <Text style={styles.buttonText}>Go Back</Text>
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