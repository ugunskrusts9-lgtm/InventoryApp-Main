// Add import
import { Button, FlatList, TextInput, View, Text, StyleSheet } from "react-native";

// inside InventoryScreen component
const goToQRScanner = () => {
    navigation.navigate("QRScanner", { addItem: (itemName) => setItems([...items, { id: Date.now().toString(), name: itemName }]) });
};

// Replace Add Item button with two buttons
<View style={{ flexDirection: "row", marginBottom: 10 }}>
    <Button title="Add Item" onPress={addItem} />
    <View style={{ width: 10 }} />
    <Button title="Scan QR" onPress={goToQRScanner} />
</View>
