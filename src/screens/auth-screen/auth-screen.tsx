import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  Auth: undefined;
  CodeConfirmation: { phoneNumber: string };
};

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, "Auth">;

const AuthScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const [phone, setPhone] = React.useState<string>("");

  const isPhoneNumberComplete = phone.length === 16;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity 
          onPress={() => navigation.replace("Splash")} 
          style={styles.leftArrowContainer}
        >
          <Image 
            source={require("../../assets/icons/leftArrow.png")} 
            style={styles.loginButtonImage} 
          />
        </TouchableOpacity>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Добро пожаловать!</Text>
          <View style={styles.enterPhoneNumberContainer}>
            <Text style={styles.enterPhoneNumberText}>Введите номер телефона, чтобы войти</Text>
            <Text style={styles.enterPhoneNumberText}>или зарегистрироваться</Text>
          </View>
        </View>

        <View style={styles.phoneInputContainer}>
          <TextInputMask
            type={"custom"}
            options={{ mask: "+7 999 999 99 99" }}
            value={phone}
            onChangeText={setPhone}
            placeholder="+7 "
            style={styles.phoneInput}
          />
        </View>

        <TouchableOpacity
          style={[
            isPhoneNumberComplete ? styles.submitButtonActive : styles.submitButtonDefault
          ]}
          onPress={() => {
            if (phone === "+7 999 999 99 99") {
              navigation.navigate("CodeConfirmation", { phoneNumber: phone });
            } else {
              Alert.alert("Ошибка", "Пожалуйста, введите номер +7 999 999 99 99. В целях теста используйте этот номер.");
            }
          }}
          disabled={!isPhoneNumberComplete}
        >
          <Text style={styles.submitButtonText}>Получить код</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
