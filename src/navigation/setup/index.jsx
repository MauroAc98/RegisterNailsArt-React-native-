
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Config,AddHour } from '../../screens';
import { TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from '../../constants';

const Stack = createNativeStackNavigator();

const SetupNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Setup' >
            <Stack.Screen name='Setup' component={Config} options={({navigation}) => ({
                title: "Horarios disponibles",
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('AddHour')}>
                        <Ionicons name="add-circle-outline" size={30} color={COLORS.lightGray} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontFamily:'Philosopher-Regular',
                    fontSize: 20,
                    color: COLORS.white,
                },
                headerStyle: {
                    backgroundColor: COLORS.primary
                }
            })} />
            <Stack.Screen
                name='AddHour'
                component={AddHour}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default SetupNavigator;

