import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

type RootStackParamList = {
    MyShifts: undefined;
    Auth: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "MyShifts"
>;

const SplashScreen = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();
    const [showElements, setShowElements] = useState(false);

    const checkAuth = async () => {
        const authTime = await AsyncStorage.getItem("authTime");
        if (authTime && new Date().getTime() - parseInt(authTime) < 3600000) {
       
        } else {
            navigation.replace("Auth");
        }
    };

    const handlePress = async () => {
        const authTime = await AsyncStorage.getItem("authTime");
        if (authTime && new Date().getTime() - parseInt(authTime) < 3600000) {
            navigation.replace("MyShifts");
        } else {
            navigation.replace("Auth");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElements(true);
        }, 2000);
    
        return () => {
            clearTimeout(timer);
        };
    }, []);
    

    return (
        <ImageBackground
            source={require("../../assets/icons/Vector.png")}
            style={[styles.container, { backgroundColor: "#0C4DCD" }]}
            resizeMode="contain"
        >
            <View>
                <Text style={styles.headerText}>Приложение</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.HeaderText}>для сотрудника</Text>
            </View>
            {showElements && (
                <>
                    <View style={styles.textContainer}>
                        <Text style={styles.subHeaderText}>Экспресс-доставка от 20 минут</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonTextContainer]}
                        onPress={handlePress}
                    >
                        <Text style={styles.buttonText}>Войти</Text>
                    </TouchableOpacity>
                </>
            )}
        </ImageBackground>
    );
};

export default SplashScreen;
