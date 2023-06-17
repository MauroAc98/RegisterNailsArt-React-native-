import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "../main";
import ListNavigator from "../listTurns";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated } from "react-native";
import { useRef, useEffect } from "react";
import { theme } from "../../constants";
import { useSelector } from "react-redux";
const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    const turns = useSelector((state) => state.turns.data);
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
    return (
        <BottomTab.Navigator initialRouteName="mainTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: "Philosopher-Bold",
                    fontSize: 16,
                },

            }}>
            <BottomTab.Screen name='mainTab' component={MainNavigator} options={{
                tabBarLabel: "Reservar",
                tabBarIcon: ({ focused, color, size }) => (
                    <Animated.View style={{ opacity: animatedValue }}>
                        <Ionicons name={focused ? "duplicate" : "duplicate-outline"} size={size} color={color} />
                    </Animated.View>
                ),
            }} />
            <BottomTab.Screen name='listTurnsTab' component={ListNavigator} options={{
                tabBarLabel: "Ver Turnos",
                tabBarBadge: turns.length,
                tabBarBadgeStyle: {
                    backgroundColor: "#467599",
                    color: "#fff",
                    fontFamily: "Philosopher-Bold",
                    fontSize: 11,
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <Animated.View style={{ opacity: animatedValue }}>
                        <Ionicons name={focused ? "clipboard" : "clipboard-outline"} size={size} color={color} />
                    </Animated.View>
                ),
            }} />
        </BottomTab.Navigator>
    )
}

export default TabsNavigator;