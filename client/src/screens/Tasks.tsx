import React, { useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";

import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Photos from "../constants/Photos";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Tasks from "../mockData/Tasks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsNavigator } from "../navigation";
const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Tasks">;
const Tab = createBottomTabNavigator<RootStackParamList>();
const TasksPage: React.FC<Props> = ({ navigation: { navigate } }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: Colors.lightGray,
            flex: 2,
        },
        statusBar: {
            backgroundColor: Colors.lightGray,
        },
        safeAreaView: {
            flex: 1,
        },
        headerContainer: {
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing,
            backgroundColor: Colors.lightGray,
            height: "100%",
        },
        headerRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            height: height / 20,
        },
        menuButton: {
            borderWidth: 1,
            borderRadius: 15,
            padding: Spacing,
            borderColor: Colors.gray,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: Colors.primary,
            shadowOffset: {
                width: 0,
                height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
        },
        userProfileButton: {
            alignSelf: "flex-end",
            justifyContent: "flex-end",
            height: height / 20,
            width: width / 10,
            borderRadius: 10

        },
        contentContainer: {
            shadowColor: Colors.primary,
            shadowOffset: {
                width: 0,
                height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
            flexDirection: "row",
            backgroundColor: Colors.textBackground,
            borderRadius: 30,
            padding: Spacing * 2,
            marginTop: height / 20,
            height: height / 6,
        },
        contentText: {
            fontFamily: "poppins-semiBold",
            fontSize: FontSize.large,
            maxWidth: width / 2.5,
            textAlign: "left",
            color: Colors.textWithBackground,
        },
        contentArrowImage: {
            height: height / 10,
            width: width / 4,
            marginTop: width / 29,
            marginLeft: -40
        },
        contentDocumentImage: {
            height: height / 6,
            width: width / 5,
            marginTop: -30
        },
        categoriesContainer: {
            marginTop: Spacing * 4,
        },
        categoriesTitle: {
            fontFamily: "poppins-semiBold",
            fontSize: FontSize.medium,
            maxWidth: "50%",
            textAlign: "left",

        },
        categoryButton: {
            borderColor: Colors.gray,
            borderWidth: 1,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: width / 6,
            height: height / 15,
            backgroundColor: Colors.onPrimary,

        },
        categoryImage: {
            opacity: 0.8,
        },
        categoryText: {
            fontFamily: "Poppins-Regular",
            fontSize: FontSize.xSmall,
            marginTop: height / 35,
            alignSelf: "center",
        },
        tasksCountText: {
            marginTop: Spacing * 4,
            fontFamily: "poppins-semiBold",
            fontSize: FontSize.medium,
            textAlign: "left",
        },
        taskTextContainer: {
            overflow: "scroll",
            borderColor: Colors.gray,
            borderWidth: 1,
            borderRadius: 15,
            padding: 16,
            backgroundColor: Colors.onPrimary,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: width / 20,
        }, taskText: {
            fontFamily: "Poppins-Regular",
            fontSize: FontSize.xSmall,
            alignSelf: "flex-start",
        }, radioButton: {
            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
            width: Dimensions.get('window').width * 0.05,
            height: Dimensions.get('window').width * 0.05,
            backgroundColor: 'transparent',
            borderColor: Colors.textBackground,
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center'

        }, fillRadioButton: {
            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
            width: Dimensions.get('window').width * 0.05,
            height: Dimensions.get('window').width * 0.05,
            backgroundColor: 'transparent',
            borderColor: Colors.textBackground,
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center'
        }, tabsText: {
            fontFamily: "poppins-semiBold",
            fontSize: FontSize.medium,
            maxWidth: "50%",
            textAlign: "left",
        },
    });



    return (
        <View style={styles.container}>
            <StatusBar />
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerRow}>
                            <TouchableOpacity
                                onPress={() => navigate("Home")}
                                style={[styles.menuButton, { borderWidth: 1, borderRadius: 15 }]}
                            >
                                <Image
                                    source={Photos.MenuIcon}
                                    style={{ height: height / 50, width: width / 20 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate("Login")}>
                                <Image
                                    source={Photos.UserProfile}
                                    style={styles.userProfileButton}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentText}>Manage your time well</Text>
                            <Image
                                source={Photos.WhiteArrowIcon}
                                style={styles.contentArrowImage}
                            />
                            <Image
                                source={Photos.DocumentIcon}
                                style={styles.contentDocumentImage}
                            />
                        </View>
                        <View style={styles.categoriesContainer}>
                            <Text style={styles.categoriesTitle}>Categories</Text>
                            <View style={{ flexDirection: "row", marginTop: Spacing * 2, gap: width / 25 }}>
                                <View>
                                    <View style={styles.categoryButton}>
                                        <Image
                                            source={Photos.WorkIcon}
                                            style={{ height: height / 20, width: width / 10, opacity: 0.8 }}
                                        />
                                    </View>
                                    <Text style={styles.categoryText}>Work</Text>
                                </View>
                                <View>
                                    <View style={styles.categoryButton}>
                                        <Image
                                            source={Photos.PersonalIcon}
                                            style={{ height: height / 21, width: width / 9.2, opacity: 0.8 }}
                                        />
                                    </View>
                                    <Text style={styles.categoryText}>Personal</Text>
                                </View>
                                <View>
                                    <View style={styles.categoryButton}>
                                        <Image
                                            source={Photos.ShoppingIcon}
                                            style={{ height: height / 21, width: width / 10, opacity: 0.8 }}
                                        />
                                    </View>
                                    <Text style={styles.categoryText}>Shopping</Text>
                                </View>
                                <View>
                                    <View style={styles.categoryButton}>
                                        <Image
                                            source={Photos.HealthIcon}
                                            style={{ height: height / 22, width: width / 10, opacity: 0.8 }}
                                        />
                                    </View>
                                    <Text style={styles.categoryText}>Health</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.tasksCountText}>You have 5 tasks for today</Text>
                        <View style={{ marginTop: width / 20 }}>
                            {/* <FlatList
                                data={Tasks.sort((a, b) => Number(a.time) - Number(b.time))}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity style={styles.taskTextContainer} >
                                        <View style={{ display: "flex", flexDirection: "row", gap: width / 20 }}>
                                            <TouchableOpacity style={styles.radioButton} onPress={() => item.done = (!item.done)}>
                                                {item.done && <View style={[styles.radioButton, {
                                                    width: Dimensions.get('window').width * 0.015,
                                                    height: Dimensions.get('window').width * 0.015,
                                                    backgroundColor: Colors.textBackground,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }]} />}
                                            </TouchableOpacity>
                                            <Text style={[styles.taskText, item.done && { textDecorationLine: "line-through" }]}>
                                                {item.task.length > width / 20 ? item.task.substring(0, width / 20) + '...' : item.task}
                                            </Text>
                                        </View>
                                        <Text style={styles.taskText}>{item.time.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</Text>
                                    </TouchableOpacity>
                                )}
                            /> */}
                        </View>
                    </View >
                </ScrollView>
            </SafeAreaView >
            {/* {BottomTabsNavigator()} */}
        </View >

    );
};

export default TasksPage;
