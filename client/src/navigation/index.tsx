import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Animated, Dimensions, Image, Platform, Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Colors from "../constants/Colors";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Tasks from "../screens/Tasks";
import { RootStackParamList } from "../../types";
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontSize from "../constants/FontSize";
import Photos from "../constants/Photos";
import AddTask from "../screens/AddTask";
import OpenCamera from "../screens/OpenCamera";
import GoogleMaps from "../screens/googleMaps";
import { } from 'react-native';
import 'react-native-gesture-handler';

// Plus...

// Font Awesome Icons...
import { useRef } from 'react';

// import CustomBottomTab from "../components/BottomTabs/CustomBottomTab";
const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const Tabs = [
    {
        name: "Home",


    }
]
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
    },
};

export default function Navigation() {
    return (
        <NavigationContainer theme={theme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Tasks" component={BottomTabsNavigator} />
            <Stack.Screen name="AddTask" component={BottomTabsNavigator} />
            <Stack.Screen name="GoogleMaps" component={GoogleMaps} />
            <Stack.Screen name="OpenCamera" component={OpenCamera} />
        </Stack.Navigator>
    );
}
// const CustomBottomTabs = (props: BottomTabBarProps
// ) => {
//     return <CustomBottomTab {...props} />;
// };
export function BottomTabsNavigator() {
    return (
        <Tab.Navigator

            initialRouteName="Tasks" screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.gray,
                    height: 80,
                    paddingLeft: 50,
                    paddingRight: 50,
                    borderStartStartRadius: 100,
                    borderStartEndRadius: 100
                },
                tabBarItemStyle: {
                    backgroundColor: Colors.onPrimary,
                    marginRight: 5,
                    marginBottom: 5,
                    marginLeft: 5,
                    marginTop: 5,
                    borderRadius: 50,
                }
            }}

        >
            <Tab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Image src={Photos.HomeIcon} style={{ height: 10, width: 10 }} />
                    )
                }}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Add Task',
                    tabBarIcon: () => (
                        <>
                            {/* <Image src={Photos.TasksIcon} />
                            <Text style={[styles.tabsText, { marginBottom: 10 }]}>Add Task</Text> */}
                        </>
                    ),
                    tabBarItemStyle: {
                        display: "flex",
                        backgroundColor: Colors.onPrimary,
                        borderColor: Colors.gray,
                        borderWidth: 10,
                        marginRight: 5,
                        marginBottom: 40,
                        marginLeft: 5,
                        marginTop: -40,
                        zIndex: 9,

                        borderRadius: 50,
                    }
                }}
                name="AddTask" component={AddTask}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Logout',
                    tabBarIcon: ({ color, size }) => (
                        <>
                            {/* <Image src={Photos.TasksIcon} style={{ backgroundColor: Colors.darkText, width: "50%", height: "50%" }} /> */}
                            {/* <Text style={styles.tabsText}>Logout</Text> */}
                        </>
                    )
                }}
                name="Login" component={Login}
            />

        </Tab.Navigator >
    );
}

const styles = StyleSheet.create({
    tabsText: {
        fontFamily: "poppins",
        fontSize: FontSize.xSmall,
        maxWidth: "50%",
        textAlign: "left",
    },
});