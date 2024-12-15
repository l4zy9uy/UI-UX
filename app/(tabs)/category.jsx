import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable,
    Dimensions,
    Modal,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const initialCategories = [
    "Category 1", "Category 2", "Category 3", "Category 4",
    "Category 5", "Category 6", "Category 7", "Category 8",
    "Category 9", "Category 10", "Category 11", "Category 12"
];

const { width } = Dimensions.get('window'); // Get screen width
const buttonSize = width / 5;
const numColumns = 3;
const maxRows = 3; // Number of rows per page
const maxButtonsPerPage = numColumns * maxRows;

const CategoryScreen = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([...initialCategories, "AddButton"]);
    const [categoryIcons, setCategoryIcons] = useState({}); // State to store icons for categories
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [newCategoryName, setNewCategoryName] = useState(""); // Input field state
    const [selectedIcon, setSelectedIcon] = useState("pricetag"); // Selected icon state

    const handleAddCategory = () => {
        if (newCategoryName.trim() === "") {
            alert("Please enter a category name.");
            return;
        }

        const newCategory = newCategoryName;
        setCategories([...categories.slice(0, -1), newCategory, "AddButton"]); // Add new category before "AddButton"
        setCategoryIcons((prevIcons) => ({
            ...prevIcons,
            [newCategory]: selectedIcon, // Map the new category to the selected icon
        }));
        setShowModal(false); // Close the modal
        setNewCategoryName(""); // Clear the input field
        setSelectedIcon("pricetag"); // Reset the selected icon
    };

    const chunkData = (data: any[], size: number) => {
        const chunks = [];
        for (let i = 0; i < data.length; i += size) {
            chunks.push(data.slice(i, i + size));
        }
        return chunks;
    };

    const renderPage = ({ item }: any) => (
        <View style={styles.pageContainer}>
            <FlatList
                data={item}
                renderItem={renderItem}
                numColumns={numColumns}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.gridContainer}
                columnWrapperStyle={styles.row}
            />
        </View>
    );

    const renderItem = ({ item }: any) => {
        if (item === "AddButton") {
            return (
                <View style={styles.itemContainer}>
                    <Pressable
                        onPress={() => setShowModal(true)}
                        style={[styles.addButton]}
                    >
                        <Ionicons name="add" size={24} color="#fff" />
                    </Pressable>
                    <Text style={styles.buttonTextBlack}>Add More</Text>
                </View>
            );
        }

        const iconName = categoryIcons[item] || "pricetag"; // Get the icon for the category or default to "pricetag"

        return (
            <View style={styles.itemContainer}>
                <Pressable
                    onPress={() => console.log(`${item} Pressed`)}
                    style={styles.button}
                >
                    <Ionicons name={iconName} size={24} color="#fff" />
                </Pressable>
                <Text style={styles.buttonTextBlack}>{item}</Text>
            </View>
        );
    };

    return (
        <LinearGradient
            colors={['#2980b9', '#6dd5fa', '#ffffff']}
            locations={[0, 0.3, 1]}
            style={styles.container}
        >
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Categories</Text>
            </View>

            {/* Content Section */}
            <View style={styles.subContainer}>
                <Text style={styles.title}>Category Options</Text>

                {/* Swipeable Pages */}
                <FlatList
                    data={chunkData(categories, maxButtonsPerPage)}
                    renderItem={renderPage}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `page_${index}`}
                />
            </View>

            {/* Add Category Modal */}
            <Modal
                visible={showModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Danh Mục Mới</Text>

                        {/* Input Field */}
                        <TextInput
                            style={styles.input}
                            placeholder="Danh mục mới"
                            value={newCategoryName}
                            onChangeText={setNewCategoryName}
                        />

                        {/* Icon Selector */}
                        <View style={styles.iconSelectorContainer}>
                            {["pricetag", "planet", "bicycle", "camera"].map((icon) => (
                                <TouchableOpacity
                                    key={icon}
                                    onPress={() => setSelectedIcon(icon)}
                                    style={[
                                        styles.iconButton,
                                        selectedIcon === icon && styles.iconButtonSelected,
                                    ]}
                                >
                                    <Ionicons
                                        name={icon}
                                        size={24}
                                        color={selectedIcon === icon ? "#fff" : "#333"}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Save and Cancel Buttons */}
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.saveButton} onPress={handleAddCategory}>
                                <Text style={styles.saveButtonText}>Lưu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setShowModal(false)}
                            >
                                <Text style={styles.cancelButtonText}>Hủy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E6F7FF',
    },
    headerContainer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        borderTopStartRadius: 54,
        borderTopEndRadius: 54,
        marginTop: 150,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 35,
        marginBottom: 20,
    },
    gridContainer: {
        width: '100%',
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    pageContainer: {
        width,
        alignItems: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
    },
    button: {
        width: buttonSize * 0.8,
        height: buttonSize * 0.8,
        backgroundColor: '#0068ff',
        borderRadius: buttonSize * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextBlack: {
        color: '#000',
        fontSize: 10,
        marginTop: 5,
        textAlign: 'center',
    },
    addButton: {
        width: buttonSize * 0.8,
        height: buttonSize * 0.8,
        backgroundColor: '#00cc66',
        borderRadius: buttonSize * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#E7F1FF',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    iconSelectorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#E7F1FF',
        marginHorizontal: 5,
    },
    iconButtonSelected: {
        backgroundColor: '#006DFF',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#006DFF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#E7F1FF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#333',
        fontSize: 16,
    },
});

export default CategoryScreen;
