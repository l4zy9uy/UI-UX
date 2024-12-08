import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable,
    Dimensions
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
const numColumns = 4;
const maxRows = 3; // Number of rows per page
const maxButtonsPerPage = numColumns * maxRows;

const CategoryScreen = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([...initialCategories, "AddButton"]);

    const handleAddCategory = (index: number) => {
        const newCategory = `Category ${categories.length}`;
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 0, newCategory); // Add new category at the clicked position
        setCategories(updatedCategories);
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

    const renderItem = ({ item, index }: any) => {
        if (item === "AddButton") {
            return (
                <View style={styles.itemContainer}>
                    <Pressable
                        onPress={() => handleAddCategory(index)}
                        style={[styles.addButton]}
                    >
                        <Ionicons name="add" size={24} color="#fff" />
                    </Pressable>
                    <Text style={styles.buttonTextBlack}>Add More</Text>
                </View>
            );
        }

        return (
            <View style={styles.itemContainer}>
                <Pressable
                    onPress={() => console.log(`${item} Pressed`)}
                    style={styles.button}
                >
                    <Ionicons name="pricetag" size={24} color="#fff" />
                </Pressable>
                <Text style={styles.buttonTextBlack}>{item}</Text>
            </View>
        );
    };

    // @ts-ignore
    return (
        <LinearGradient colors={['#66ccff', '#99ddff']} style={styles.container}>
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
        position: 'relative',
    },
    notiButton: {
        position: 'absolute',
        right: 20,
        top: 25,
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
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
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
});

export default CategoryScreen;
