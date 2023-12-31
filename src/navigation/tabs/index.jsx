import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "../main";
import ListNavigator from "../listTurns";
import SeputNavigator from "../setup";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated } from "react-native";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";


const BottomTab = createBottomTabNavigator();


const TabsNavigator = () => {
    const turns = useSelector((state) => state.turns.data);
    const [turnsLength, setTurnsLength] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const tabIconAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        tabIconAnimation();
    }, [tabIconAnimation]);

    useEffect(() => {
        if (turns) {
            setTurnsLength(turns.length);
        }
    }, [turns]);


    return (
        <BottomTab.Navigator initialRouteName="mainTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: "Philosopher-Bold",
                    fontSize: 11,
                },
                unmountOnBlur: true,
            }}>

            <BottomTab.Screen name='setupTab' component={SeputNavigator} options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, size }) => (
                    <Animated.View style={{ opacity: animatedValue }}>
                        <Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={COLORS.white} />
                    </Animated.View>
                ),
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                },
                tabBarLabelStyle: {
                    color: COLORS.white,
                    fontFamily: 'Philosopher-Bold',
                    fontSize: 12
                },
            }} />

            <BottomTab.Screen name='mainTab' component={MainNavigator} options={{
                tabBarLabel: "Reservar",
                tabBarIcon: ({ focused, size }) => (
                    <Animated.View style={{ opacity: animatedValue }}>
                        <Ionicons name={focused ? "duplicate" : "duplicate-outline"} size={size} color={COLORS.white} />
                    </Animated.View>
                ),
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                },
                tabBarLabelStyle: {
                    color: COLORS.white,
                    fontFamily: 'Philosopher-Bold',
                    fontSize: 12
                },
            }} />


            <BottomTab.Screen name='listTurnsTab' component={ListNavigator} options={{
                tabBarLabel: "Ver Turnos",
                tabBarBadge: turnsLength,
                tabBarBadgeStyle: {
                    backgroundColor: COLORS.primary,
                    color: COLORS.white,
                    fontFamily: "Philosopher-Bold",
                    fontSize: 11,
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <Animated.View style={{ opacity: animatedValue }}>
                        <Ionicons name={focused ? "clipboard" : "clipboard-outline"} size={size} color={COLORS.white} />
                    </Animated.View>
                ),
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                },
                tabBarLabelStyle: {
                    color: COLORS.white,
                    fontFamily: 'Philosopher-Bold',
                    fontSize: 12
                },
            }} />
        </BottomTab.Navigator>
    )
}

export default TabsNavigator;