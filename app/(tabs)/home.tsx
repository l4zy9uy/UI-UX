import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    MaterialIcons,
    Ionicons,
    FontAwesome,
    Feather
} from '@expo/vector-icons';
import {Button} from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";

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
                {/* Top Section */}
                <View style={styles.topSection}>
                    <View style={styles.iconSection}>
                        <AntDesign name="car" size={50} color="#00cc66" />
                        <Text style={styles.label}>Mục Tiêu{"\n"}Tiết Kiệm</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statsSection}>
                        <Text style={styles.statsLabel}>Revenue Last Week</Text>
                        <Text style={styles.revenue}>$4,000.00</Text>
                        <Text style={styles.statsLabel}>Tiền ăn tuần trước</Text>
                        <Text style={styles.expenses}>-$100.00</Text>
                    </View>
                </View>

                {/* Tabs Section */}
                <View style={styles.tabs}>
                    <Button
                        mode="contained"
                        style={styles.tabButton}
                        labelStyle={styles.tabLabel}
                    >
                        Ngày
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.tabButton}
                        labelStyle={styles.tabLabel}
                    >
                        Tuần
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.tabButton}
                        labelStyle={styles.tabLabel}
                    >
                        Tháng
                    </Button>
                </View>

                {/* Transactions Section */}
                <View style={styles.transactions}>
                    <View style={styles.transactionItem}>
                        <AntDesign name="wallet" size={30} color="#0066ff" />
                        <View style={styles.transactionDetails}>
                            <Text style={styles.transactionLabel}>Lương</Text>
                            <Text style={styles.transactionDate}>
                                18:27 - April 30
                            </Text>
                        </View>
                        <Text style={[styles.transactionAmount, styles.income]}>
                            $4,000.00
                        </Text>
                    </View>
                    <View style={styles.transactionItem}>
                        <Feather name="shopping-cart" size={30} color="#0066ff" />
                        <View style={styles.transactionDetails}>
                            <Text style={styles.transactionLabel}>Tạp Hóa</Text>
                            <Text style={styles.transactionDate}>
                                17:00 - April 24
                            </Text>
                        </View>
                        <Text style={[styles.transactionAmount, styles.expense]}>
                            -$100.00
                        </Text>
                    </View>
                    <View style={styles.transactionItem}>
                        <AntDesign name="home" size={30} color="#0066ff" />
                        <View style={styles.transactionDetails}>
                            <Text style={styles.transactionLabel}>Thuê Nhà</Text>
                            <Text style={styles.transactionDate}>
                                8:30 - April 15
                            </Text>
                        </View>
                        <Text style={[styles.transactionAmount, styles.expense]}>
                            -$674.40
                        </Text>
                    </View>
                </View>

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
    topSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        elevation: 5,
    },
    iconSection: {
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        textAlign: "center",
        color: "#0066ff",
        marginTop: 10,
    },
    divider: {
        height: "100%",
        width: 1,
        backgroundColor: "#ccc",
        marginHorizontal: 10,
    },
    statsSection: {
        alignItems: "flex-start",
    },
    statsLabel: {
        fontSize: 14,
        color: "#333",
    },
    revenue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#00cc66",
        marginVertical: 5,
    },
    tabLabel: {
        fontSize: 14,
        color: "#0066ff",
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
    transactionCategory: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    transactionTime: {
        fontSize: 12,
        color: '#888888',
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
    expense: {
        color: "#ff3333",
    },
    transactionDetails: {
        flex: 1,
        marginHorizontal: 10,
    },
    expenses: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ff3333",
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15,
    },
    transactionLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    transactionDate: {
        fontSize: 12,
        color: "#777",
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: "bold",
    },
    income: {
        color: "#00cc66",
    },
    transactions: {
        marginTop: 10,
    },
    transactionItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        marginBottom: 10,
        elevation: 3,
    },

});

export default HomeScreen;
