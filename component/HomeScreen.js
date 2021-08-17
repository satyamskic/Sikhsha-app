import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyHomeScreen from './BottomTab/MyHomeScreen';
import Assignment from './BottomTab/Assignment';
import ExamCorner from './BottomTab/ExamCorner';
import Quizzer from './BottomTab/Quizzer';
import NextGurukul from './BottomTab/NextGurukul';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="MyHome">
      <Tab.Screen options={{ headerShown: false ,tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ), }} name="MyHome" component={MyHomeScreen} />

      <Tab.Screen options={{ headerShown: false ,tabBarLabel: 'Assignment',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="badge-account-horizontal" color={color} size={size} />
          ), }} name="Assignment" component={Assignment} />

      <Tab.Screen options={{ headerShown: false ,tabBarLabel: 'Exam Corner',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-text-multiple-outline" color={color} size={size} />
          ), }} name="Exam Corner" component={ExamCorner} />

      <Tab.Screen options={{ headerShown: false ,tabBarLabel: 'Quizzer',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="head-question" color={color} size={size} />
          ), }} name="Quizzer" component={Quizzer} />

      <Tab.Screen options={{ headerShown: false ,tabBarLabel: 'Next Quizzer',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human-male" color={color} size={size} />
          ), }} name="NextGurukul" component={NextGurukul} />

    </Tab.Navigator>

    );
};
export default HomeScreen;
