import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
    MyShifts: undefined;
    Auth: undefined;
  };

const shiftsData = [
    {
        id: '1',
        date: '2 мая',
        address: 'Карла Маркса, 38',
        time: '8:00-15:00 (7ч)',
        status: 'Идет',
        image: require("../../assets/icons/basket.png") 
    },
    {
        id: '2',
        date: '3 мая',
        address: 'Карла Маркса, 38',
        time: '8:00-15:00 (7ч)',
        status: 'Запланирована',
        image: require("../../assets/icons/car.png") 
    },
    {
        id: '3',
        date: '2 мая',
        address: 'Карла Маркса, 38',
        time: '8:00-15:00 (7ч)',
        status: 'Завершена',
        image: require("../../assets/icons/basket.png") 
    },
];
const MyShiftsScreen = () => {
  const [isListVisible, setListVisible] = useState(false);
  type MyShiftsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MyShifts'>;
const navigation = useNavigation<MyShiftsScreenNavigationProp>();


  useEffect(() => {
    const loadVisibilityState = async () => {
        try {
            const storedValue = await AsyncStorage.getItem('isListVisible');
            if (storedValue !== null) {
                setListVisible(storedValue === 'true');
            } else {
                setListVisible(false);
            }
        } catch (error) {
            console.error("Failed reading value from AsyncStorage:", error);
        }
    };

    loadVisibilityState();
}, []);

useEffect(() => {
    try {
        AsyncStorage.setItem('isListVisible', isListVisible.toString());
    } catch (error) {
        console.error("Failed saving value to AsyncStorage:", error);
    }
}, [isListVisible]);

  const getStatusColor = (status) => {
      switch (status) {
          case 'Идет':
              return "#FFC700";
          case 'Запланирована':
              return "#868B99";
          case 'Завершена':
              return "#14C16E";
          default:
              return "#FFC700";
      }
  };

    return (
        <SafeAreaView style={styles.containerShifts}>
            <View style={styles.containerTopShifts}>
            <TouchableOpacity onPress={() => navigation.navigate("Auth")} style={styles.leftArrowContainerShifts}>
    <Image source={require("../../assets/icons/leftArrow.png")}  style={styles.loginButtonImageShifts} />
</TouchableOpacity>

                <View style={styles.welcomeContainerShifts}>
                    <Text style={styles.welcomeTextShifts}>Мои смены</Text>
                </View>
                <TouchableOpacity 
    onPress={() => setListVisible(!isListVisible)} 
    style={styles.formContainer}>
    <Text style={styles.formText}>1-8 мая</Text>
    <Image source={require("../../assets/icons/arrowDown.png")} style={styles.formImage} />
</TouchableOpacity>
                { isListVisible ? (
                    <FlatList 
                        data={shiftsData}
                        renderItem={({ item }) => (
                            <>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.dateText}>{item.date}</Text>
                                    <View style={styles.card}>
                                        <View>
                                            <Text style={styles.addressText}>{item.address}</Text>
                                            <Text style={styles.timeText}>{item.time}</Text>
                                            <Text style={[styles.statusText, {color: getStatusColor(item.status)}]}>{item.status}</Text>
                                        </View>
                                        <Image source={item.image} style={styles.rightIcon} />
                                    </View>
                                </View>
                                {item.id === '2' && (
                                    <Text style={styles.completedText}>Завершенные</Text>
                                )}
                            </>
                        )}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false} 
                    />
                ) : (
                    <View style={styles.noShiftsContainer}>
                        <Text style={styles.noShiftsText}>За выбранный период</Text>
                        <Text style={styles.noShiftsText}>нет рабочих смен</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

export default MyShiftsScreen;