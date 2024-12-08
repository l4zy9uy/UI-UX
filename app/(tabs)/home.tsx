import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const { width } = Dimensions.get('window');

const transactions = [
    { id: '1', category: 'Lương', time: '18:27 - April 30', type: 'Income', amount: '$4,000.00', color: '#00C851' },
    { id: '2', category: 'Tạp Hóa', time: '17:00 - April 24', type: 'Expense', amount: '-$100.00', color: '#FF4444' },
    { id: '3', category: 'Thuê Nhà', time: '8:30 - April 15', type: 'Expense', amount: '-$674.40', color: '#FF4444' },
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
                <Ionicons name="notifications-outline" size={24} color="#ffffff" />
            </View>

            {/* Balance Section */}
            <View style={styles.balanceSection}>
                <View style={styles.balanceRow}>
                    <View style={styles.balanceItem}>
                        <Text style={styles.balanceLabel}>Số dư</Text>
                        <Text style={styles.balanceAmount}>$7,783.00</Text>
                    </View>
                    <View style={styles.balanceItem}>
                        <Text style={styles.balanceLabel}>Tổng chi tiêu</Text>
                        <Text style={[styles.balanceAmount, styles.expense]}>-$1,187.40</Text>
                    </View>
                </View>
                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: '30%' }]} />
                </View>
                <Text style={styles.progressGoal}>$20,000.00</Text>
            </View>

            {/* Goal Section */}
            <View style={styles.goalSection}>
                <View style={styles.goalCard}>
                    <Ionicons name="car" size={40} color="#00C851" />
                    <Text style={styles.goalText}>Mục Tiêu Tiết Kiệm</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.goalStats}>
                    <Text style={styles.goalStatsLabel}>Revenue Last Week</Text>
                    <Text style={styles.income}>$4,000.00</Text>
                    <Text style={styles.goalStatsLabel}>Tiền ăn tuần trước</Text>
                    <Text style={styles.expense}>-$100.00</Text>
                </View>
            </View>

            {/* Transactions Section */}
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.transactionItem}>
                        {item.category === 'Lương' ? (
                            <Ionicons name="wallet" size={30} color="#0066ff" />
                        ) : item.category === 'Tạp Hóa' ? (
                            <Feather name="shopping-cart" size={30} color="#0066ff" />
                        ) : (
                            <AntDesign name="home" size={30} color="#0066ff" />
                        )}
                        <View style={styles.transactionDetails}>
                            <Text style={styles.transactionCategory}>{item.category}</Text>
                            <Text style={styles.transactionTime}>{item.time}</Text>
                        </View>
                        <Text style={[styles.transactionAmount, { color: item.color }]}>
                            {item.amount}
                        </Text>
                    </View>
                )}
                contentContainerStyle={styles.transactions}
            />

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                <Ionicons name="home" size={24} color="#0066ff" />
                <Ionicons name="bar-chart" size={24} color="#888" />
                <Ionicons name="trending-up" size={24} color="#888" />
                <Ionicons name="briefcase" size={24} color="#888" />
                <Ionicons name="settings-outline" size={24} color="#888" />
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
        justifyContent: 'space-between',
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
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    balanceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    balanceItem: {
        flex: 1,
        alignItems: 'center',
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
    progressBar: {
        backgroundColor: '#e0e0e0',
        height: 8,
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        backgroundColor: '#66ccff',
        height: '100%',
    },
    progressGoal: {
        fontSize: 12,
        color: '#888888',
        textAlign: 'right',
    },
    goalSection: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    goalCard: {
        alignItems: 'center',
        flex: 1,
    },
    goalText: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        color: '#0066ff',
    },
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 20,
    },
    goalStats: {
        flex: 1,
        justifyContent: 'space-between',
    },
    goalStatsLabel: {
        fontSize: 14,
        color: '#888888',
    },
    income: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00C851',
        marginBottom: 10,
    },
    transactions: {
        paddingHorizontal: 20,
        paddingBottom: 80, // Space for bottom navigation
    },
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 15,
        marginBottom: 10,
        elevation: 3,
    },
    transactionDetails: {
        flex: 1,
        marginHorizontal: 10,
    },
    transactionCategory: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    transactionTime: {
        fontSize: 12,
        color: '#888888',
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});

export default HomeScreen;
