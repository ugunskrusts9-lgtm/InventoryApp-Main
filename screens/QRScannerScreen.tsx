// screens/QRScannerScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define your navigation stack param types
type RootStackParamList = {
    QRScanner: { addItem: (item: string) => void };
};

type Props = NativeStackScreenProps<RootStackParamList, "QRScanner">;

export default function QRScannerScreen({ navigation, route }: Props) {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
        setScanned(true);
        alert(`QR Code Scanned: ${data}`);
        route.params.addItem(data); // safely add item
        navigation.goBack();
    };

    if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
    if (hasPermission === false) return <Text>No access to camera.</Text>;

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
