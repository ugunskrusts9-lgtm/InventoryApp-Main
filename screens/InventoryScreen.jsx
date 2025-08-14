// screens/InventoryScreen.tsx
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import type {RootStackParamList} from "@/screens/RootStackParamList";

// 2. Type the props
type Props = NativeStackScreenProps<RootStackParamList, "Inventory">;

export default function InventoryScreen({ route }: Props) {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Inventory, {user}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 20 },
});
