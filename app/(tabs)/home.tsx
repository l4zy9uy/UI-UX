import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CategoryList from '@/components/CategoryList'; // Assuming your CategoryList component is in the same directory
import SaveTargetBox from "@/components/SaveTargetBox";

const { width } = Dimensions.get('window');

const transactions = [
    { id: '1', icon: 'wallet', name: 'Lương', date: '18:27 - April 30', detail: '', amount: '+$4,000.00' },
    { id: '2', icon: 'shopping-cart', name: 'Tạp Hóa', date: '17:00 - April 24', detail: '', amount: '-$100.00' },
    { id: '3', icon: 'home', name: 'Thuê Nhà', date: '08:00 - April 15', detail: '', amount: '-$674.00' },
    { id: '4', icon: 'car', name: 'Bảo Dưỡng Xe', date: '12:00 - April 10', detail: '', amount: '-$200.00' },
    { id: '5', icon: 'shopping-bag', name: 'Quần Áo', date: '16:00 - April 5', detail: '', amount: '-$150.00' },
];

const HomeScreen = () => {
    return (
        <LinearGradient colors={['#2980b9', '#6dd5fa']} style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Xin Chào, Thành</Text>
                    <Text style={styles.subtitle}>Chào buổi sáng</Text>
                </View>
            </View>

            {/* Balance Section */}
            <View style={styles.balanceSection}>
                <View style={styles.balanceBox}>
                    <Text style={styles.balanceLabel}>Số dư</Text>
                    <Text style={styles.balanceAmount}>$7,783.00</Text>
                </View>
                <View style={styles.balanceBox}>
                    <Text style={styles.balanceLabel}>Tổng chi tiêu</Text>
                    <Text style={[styles.balanceAmount, styles.expense]}>-$1,187.40</Text>
                </View>
            </View>

            {/* Sub-container */}
            <View style={styles.subContainer}>
                {/* Save Target Progress */}
                <SaveTargetBox />

                {/* Scrollable Category List */}
                    <CategoryList title="Gan day" data={transactions} />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 16,
        color: '#ffffff',
    },
    balanceSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    balanceBox: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        width: width * 0.4,
    },
    balanceLabel: {
        fontSize: 14,
        color: '#888888',
    },
    balanceAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
    expense: {
        color: '#FF4444',
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#eef8ff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
});

export default HomeScreen;
