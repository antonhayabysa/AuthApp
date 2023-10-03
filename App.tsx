import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/splas-screen/splash-screen";
import AuthScreen from "./src/screens/auth-screen/auth-screen";
import CodeConfirmationScreen from "./src/screens/code-confirmation-screen/code-confirmation-screen";
import MyShiftsScreen from "./src/screens/my-shifts-screen/my-shifts-screen";

type RootStackParamList = {
    Auth: { redirectRoute?: string };
    Splash: { delay?: number };
    CodeConfirmation: { phoneNumber: string };
    MyShifts: { date?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Auth"
                    component={AuthScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CodeConfirmation"
                    component={CodeConfirmationScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MyShifts"
                    component={MyShiftsScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
