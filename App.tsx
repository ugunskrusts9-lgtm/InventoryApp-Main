// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import InventoryScreen from "./screens/InventoryScreen";

const Stack = createNativeStackNavigator();
import QRScannerScreen from "./screens/QRScannerScreen";


<Stack.Screen name="QRScanner" component={QRScannerScreen} />


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Inventory" component={InventoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
