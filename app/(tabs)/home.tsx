import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    const transactions = [
        { id: '1', category: 'Lương', time: '18:27 - April 30', type: 'Income', amount: '$4,000.00', color: '#00C851' },
        { id: '2', category: 'Tạp Hóa', time: '17:00 - April 24', type: 'Expense', amount: '-$100.00', color: '#FF4444' },
        { id: '3', category: 'Thuê Nhà', time: '8:30 - April 15', type: 'Expense', amount: '-$674.40', color: '#FF4444' },
    ];
    console.log('Rendering Home Screen');

    return (
        <LinearGradient colors={['#66ccff', '#99ddff']} style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Xin Chào, Thành</Text>
                    <Text style={styles.subtitle}>Chào buổi sáng</Text>
                </View>
                <Ionicons name="notifications-outline" size={24} color="#ffffff" />
            </View>

            <View style={styles.subContainer}>
                {/* Balance Section */}
                <View style={styles.balanceCard}>
                    <View style={styles.balanceRow}>
                        <View style={styles.balanceItem}>
                            <Text style={styles.balanceLabel}>Số Dư</Text>
                            <Text style={styles.balanceValue}>$7,783.00</Text>
                        </View>
                        <View style={styles.balanceItem}>
                            <Text style={styles.balanceLabel}>Chi Phí</Text>
                            <Text style={[styles.balanceValue, { color: '#FF4444' }]}>-$1,187.40</Text>
                        </View>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={styles.progressFill} />
                    </View>
                    <Text style={styles.progressGoal}>$20,000.00</Text>
                </View>

                {/* Goal Section */}
                <View style={styles.goalCard}>
                    <View style={styles.goalRow}>
                        <FontAwesome name="car" size={32} color="#66ccff" />
                        <View>
                            <Text style={styles.goalTitle}>Mục Tiêu Tiết Kiệm</Text>
                            <Text style={styles.goalSubtitle}>$4,000.00</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.revenueText}>Revenue Last Week</Text>
                        <Text style={styles.revenueAmount}>$4,000.00</Text>
                        <Text style={[styles.revenueAmount, { color: '#FF4444' }]}>Tiền ăn tuần trước: -$100.00</Text>
                    </View>
                </View>

                {/* Tab Selector */}
                <View style={styles.tabSelector}>
                    <TouchableOpacity style={styles.tabButtonActive}>
                        <Text style={styles.tabButtonText}>Ngày</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Tuần</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Tháng</Text>
                    </TouchableOpacity>
                </View>

                {/* Transactions Section */}
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.transactionItem}>
                            <Ionicons name="wallet-outline" size={24} color="#66ccff" />
                            <View style={styles.transactionDetails}>
                                <Text style={styles.transactionCategory}>{item.category}</Text>
                                <Text style={styles.transactionTime}>{item.time}</Text>
                            </View>
                            <Text style={[styles.transactionAmount, { color: item.color }]}>{item.amount}</Text>
                        </View>
                    )}
                />
            </View>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F7FF', // Light blue container
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    subContainer: {
        flex: 1,
        width: '100%',
        borderTopStartRadius: 54,
        borderTopEndRadius: 54,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F7FF', // Light blue container
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#ffffff',
    },
    balanceCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
    },
    balanceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    balanceItem: {
        alignItems: 'center',
    },
    balanceLabel: {
        fontSize: 14,
        color: '#888888',
    },
    balanceValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
    progressBar: {
        backgroundColor: '#e0e0e0',
        height: 8,
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 5,
    },
    progressFill: {
        backgroundColor: '#66ccff',
        width: '30%',
        height: '100%',
    },
    progressGoal: {
        fontSize: 12,
        color: '#888888',
        textAlign: 'right',
    },
    goalCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
    },
    goalRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    goalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    goalSubtitle: {
        fontSize: 14,
        color: '#333333',
    },
    revenueText: {
        fontSize: 14,
        color: '#888888',
    },
    revenueAmount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    tabSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
    },
    tabButtonActive: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#66ccff',
    },
    tabButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginBottom: 10,
    },
    transactionDetails: {
        flex: 1,
        marginHorizontal: 10,
    },
    transactionCategory: {
        fontSize: 16,
        fontWeight: 'bold',
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
        justifyContent: 'space-between',
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
