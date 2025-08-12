import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native';

import styles from '../../design/login.styles.js'; // ✅ relative path



const HomeScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Basic validation
        if (!email || !password) {
            Alert.alert('Missing Fields', 'Please enter both email and password.');
            return;
        }

        // Fake login logic (you can replace with real API later)
        if (email === 'test@example.com' && password === '123456') {
            Alert.alert('Login Successful', `Welcome, ${email}!`);
        } else {
            Alert.alert('Login Failed', 'Invalid email or password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🔐 Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.note}>Use: test@example.com / 123456</Text>
        </View>
    );
};



export default HomeScreen;
