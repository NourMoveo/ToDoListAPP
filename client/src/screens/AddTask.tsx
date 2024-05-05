import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Modal,
    Dimensions,
    Animated,
    Easing,
    Button,
} from "react-native";
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import DatePicker from "react-native-date-picker";
import Photos from "../constants/Photos";
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera, ImageLibraryOptions } from 'react-native-image-picker';
const { height, width } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "AddTask">;
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;
const AddTask: React.FC<Props> = ({ navigation }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState<Date>();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [fadeAnim] = useState(new Animated.Value(0));
    const [showCamera, setShowCamera] = useState(false);
    const [imageSource, setImageSource] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, handleResponse);
    };

    const handleCameraLaunch = () => {
        console.log("handleCameraLaunch1")
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, handleResponse);
    };

    const handleResponse = (response: any) => {
        console.log("response:", response)
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('Image picker error: ', response.error);
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
        }
    };

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start();
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <View style={styles.headerContainer}>
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                        style={[styles.menuButton, { borderWidth: 1, borderRadius: 15 }]}
                    >
                        <Image
                            source={Photos.MenuIcon}
                            style={{ height: height / 50, width: width / 20 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Image
                            source={Photos.UserProfile}
                            style={styles.userProfileButton}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <TouchableOpacity style={styles.dateButton} onPress={() => setDatePickerVisibility(true)}>
                <Text>{date ? date.toLocaleDateString() : "Pick Date Time"}</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {selectedImage && (
                    <Image
                        source={{ uri: selectedImage }}
                        style={{ flex: 1 }}
                        resizeMode="contain"
                    />
                )}
                <View style={{ marginTop: 20 }}>
                    <Button title="Choose from Device" onPress={openImagePicker} />
                </View>
                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <Button title="Open Camera" onPress={handleCameraLaunch} />
                </View>
            </View>
            <View>
            </View>
            <Modal visible={isDatePickerVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <DatePicker
                            date={date || new Date()}
                            onDateChange={setDate}
                            mode="date"
                        />
                        <Image source={Photos.CalenderIcon} />
                        <TouchableOpacity onPress={() => setDatePickerVisibility(false)}>
                            <Text style={styles.modalCloseButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={styles.label}>Location:</Text>
            <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
            />
            <Text style={styles.label}>Category:</Text>
            <View style={styles.categoriesContainer}>
                <TouchableOpacity
                    style={styles.categoryButton}
                    onPress={() => setCategory("Work")}
                >
                    <Image
                        source={Photos.WorkIcon}
                        style={styles.categoryIcon}
                    />
                    <Text style={styles.categoryText}>Work</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryButton}
                    onPress={() => setCategory("Personal")}
                >
                    <Image
                        source={Photos.PersonalIcon}
                        style={styles.categoryIcon}
                    />
                    <Text style={styles.categoryText}>Personal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryButton}
                    onPress={() => setCategory("Shopping")}
                >
                    <Image
                        source={Photos.ShoppingIcon}
                        style={{ height: height / 23, width: width / 10, opacity: 0.8 }}
                    />
                    <Text style={styles.categoryText}>Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryButton}
                    onPress={() => setCategory("Health")}
                >
                    <Image
                        source={Photos.HealthIcon}
                        style={{ height: height / 23, width: width / 10, opacity: 0.8 }}
                    />
                    <Text style={styles.categoryText}>Health</Text>
                </TouchableOpacity>
            </View>
            <Text
                style={styles.input}
            >
                {category}
            </Text>
            <TouchableOpacity style={styles.saveButton} onPress={() => { console.log("Task saved!"); navigation.goBack(); }}>
                <Text style={styles.saveButtonText}>Save Task</Text>
            </TouchableOpacity>
        </Animated.View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.lightGray,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    dateButton: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
    modalCloseButton: {
        marginTop: 10,
        color: "blue",
    },
    categoriesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    categoryButton: {
        alignItems: "center",
    },
    categoryIcon: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 12,
    },
    saveButton: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },
    saveButtonText: {
        color: "white",
        fontSize: 16,
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: Colors.lightGray,
        height: "15%",
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: height / 20,
    },
    menuButton: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 20,
        borderColor: Colors.gray,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    userProfileButton: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        height: height / 20,
        width: width / 10,
        borderRadius: 10,
    },
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
    },
    camButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
    },
});

export default AddTask;
