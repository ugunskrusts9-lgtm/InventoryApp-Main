import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }
        // fake auth
        navigation.navigate("Inventory", { user: email });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>◇</Text>
            <Text style={styles.title}>Log in to your account</Text>
            <Text style={styles.subtitle}>Welcome back! Please enter your details.</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.row}>
                <TouchableOpacity>
                    <Text style={styles.link}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.link}>Forgot password</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    logo: { fontSize: 50, marginBottom: 20 },
    title: { fontSize: 24, fontWeight: "bold" },
    subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
    input: { width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 10, borderRadius: 5 },
    row: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginVertical: 10 },
    link: { color: "#007AFF" },
    buttonPrimary: { backgroundColor: "#007AFF", padding: 15, borderRadius: 5, width: "100%", alignItems: "center" },
    buttonText: { color: "#fff", fontWeight: "bold" },
});
