import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import {SubContainer} from "@/components/Container"
import CategoryList from "@/components/CategoryList"
const { width } = Dimensions.get('window'); // Get screen width
const boxHeight = 100;
const { height } = Dimensions.get('window'); // Get screen height


// Sample data for categories
const categories = [
    {
        id: '1',
        icon: 'money-bill-wave',
        name: 'Lương',
        date: '18:27 - 30 Th4',
        detail: 'Tháng',
        amount: '$4,000.00',
    },
    {
        id: '2',
        icon: 'shopping-cart',
        name: 'Mua sắm',
        date: '10:15 - 28 Th4',
        detail: 'Chi tiêu',
        amount: '$120.00',
    },
    {
        id: '3',
        icon: 'credit-card',
        name: 'Upwork',
        date: '12:00 - 25 Th4',
        detail: 'Thu nhập',
        amount: '$340.00',
    },
    {
        id: '4',
        icon: 'utensils',
        name: 'Ăn uống',
        date: '19:20 - 29 Th4',
        detail: 'Chi tiêu',
        amount: '$45.00',
    },
    {
        id: '5',
        icon: 'car',
        name: 'Xăng xe',
        date: '08:30 - 27 Th4',
        detail: 'Chi tiêu',
        amount: '$20.00',
    },
];

const TransactionScreen = () => {
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

            {/* Main Box */}
            <View style={styles.mainBox}>
                <Text style={styles.mainBoxText}>Main Box</Text>
            </View>

            {/* Two Smaller Boxes in the Same Row */}
            <View style={styles.rowContainer}>
                <View style={styles.smallBox}>
                    <Text style={styles.boxText}>Box 1</Text>
                </View>
                <View style={styles.smallBox}>
                    <Text style={styles.boxText}>Box 2</Text>
                </View>
            </View>


            {/* List of Categories */}
            <SubContainer height={height * 0.6}>
                <CategoryList title="Transaction History" data={categories} />
            </SubContainer>
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
        backgroundColor: '#eef8ff',
        borderTopStartRadius: 54,
        borderTopEndRadius: 54,
        marginTop: 24,
        alignItems: 'center', // Center horizontally
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    mainBox: {
        width: '90%', // Same width as container (90% of screen width)
        height: boxHeight,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    mainBoxText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 24
    },
    smallBox: {
        width: '48%', // Each box takes 45% of the width to allow spacing
        height: boxHeight,
        backgroundColor: '#0068ff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Distribute space horizontally
        width: '90%', // Keep it aligned with the container
        backgroundColor: '#eef8ff',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 12,
        borderBottomWidth: 1, // Add bottom border
        borderBottomColor: '#ccc', // Light gray line
    },
    icon: {
        marginRight: 12, // Add spacing between the icon and text
    },
    itemTextContainer: {
        flex: 1,
        justifyContent: 'center', // Center text vertically
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    itemDate: {
        fontSize: 12,
        color: '#666',
        marginTop: 4, // Add spacing between name and date
    },
    itemRightContainer: {
        alignItems: 'flex-end', // Align detail and amount to the right
        justifyContent: 'center', // Center text vertically
    },
    itemDetail: {
        fontSize: 12,
        color: '#666',
    },
    itemAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF',
        marginTop: 4, // Add spacing between detail and amount
    },
    flatListContent: {
        flexGrow: 1, // Make FlatList occupy full vertical space
        justifyContent: 'center', // Center items vertically in subContainer
        alignItems: 'center', // Center items horizontally
    },
});

export default TransactionScreen;
