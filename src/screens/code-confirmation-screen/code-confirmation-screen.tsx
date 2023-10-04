import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, Image } from "react-native";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, RouteProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  MyShifts: undefined;
  Auth: undefined;
  CodeConfirmation: { phoneNumber: string };
};

type CodeConfirmationScreenNavigationProp = StackNavigationProp<RootStackParamList, "CodeConfirmation">;
type CodeConfirmationScreenRouteProp = RouteProp<RootStackParamList, "CodeConfirmation">;

const CodeConfirmationScreen = ({ route }: { route: CodeConfirmationScreenRouteProp }) => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(35);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);  

  const navigation = useNavigation<CodeConfirmationScreenNavigationProp>();
  const phoneNumber = route.params.phoneNumber;

  useEffect(() => {
    setTimeLeft(35);
  }, []);

  useEffect(() => {
    if (startTimer && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [startTimer, timeLeft]);

  const handleCodeSubmit = async () => {
    const isNumericCode = /^\d+$/.test(code);
  
    if (isNumericCode && code === "1234") {
      const currentTime = new Date().getTime();
      await AsyncStorage.setItem("authTime", currentTime.toString());
      navigation.navigate("MyShifts");
    } else {
      setError(true);
    }
  };
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftArrowContainer}>
          <Image source={require("../../assets/icons/leftArrow.png")} style={styles.loginButtonImage} />
        </TouchableOpacity>

        <View style={styles.codeInputContainer}>
          <Text style={styles.enterCodeText}>Введите код из смс</Text>
          <Text style={styles.enterPhoneNumberText}>{phoneNumber}</Text>
          <View style={[styles.codeContainer, error ? styles.codeInputError : {}]}>
            <TextInput
              value={code}
              onChangeText={(text) => {
                setError(false);
                setCode(text);
              }}
              placeholder="0000"
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
          {error && <Text style={styles.errorText}>Код неверный. Попробуйте еще раз.</Text>}
        </View>

        <TouchableOpacity
          style={[
            code.length === 4 ? styles.submitButtonActive : styles.submitButtonDefault
          ]}
          onPress={handleCodeSubmit}
          disabled={code.length !== 4}
        >
          <Text style={styles.submitButtonText}>Продолжить</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resendButtonContainer}
          onPress={() => {
            if (!buttonPressed || timeLeft === 0) {   
              setTimeLeft(35);
              setButtonPressed(true);
              setStartTimer(true);
            } 
          }}
        >
          <Text style={styles.resendCodeText}>
            {buttonPressed && timeLeft ? `Получить новый код через 00:${timeLeft}` : "Получить новый код"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CodeConfirmationScreen;