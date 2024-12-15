import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SaveTargetBox = () => {
    return (
        <View style={styles.container}>
            {/* Left Section */}
            <View style={styles.leftContainer}>
                <View style={styles.circularProgress}>
                    <FontAwesome5 name="car" size={28} color="#ffffff" />
                </View>
                <Text style={styles.leftLabel}>Mục Tiêu Tiết Kiệm</Text>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Right Section */}
            <View style={styles.rightContainer}>
                {/* Revenue Row */}
                <View style={styles.row}>
                    <FontAwesome5 name="wallet" size={18} color="#00C851" style={styles.icon} />
                    <View>
                        <Text style={styles.label}>Revenue Last Week</Text>
                        <Text style={[styles.amount, styles.income]}>$4,000.00</Text>
                    </View>
                </View>

                {/* Separator Line */}
                <View style={styles.horizontalLine} />

                {/* Expense Row */}
                <View style={styles.row}>
                    <FontAwesome5 name="utensils" size={18} color="#FF4444" style={styles.icon} />
                    <View>
                        <Text style={styles.label}>Tiền ăn tuần trước</Text>
                        <Text style={[styles.amount, styles.expense]}>-$100.00</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0068ff',
        borderRadius: 16,
        padding: 20,
        width: width * 0.92, // Slightly reduce width to add padding around the box
        alignSelf: 'center',
        elevation: 3, // Shadow for Android
        marginBottom: 20,
    },
    leftContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    circularProgress: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#5AD4FB',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    leftLabel: {
        fontSize: 12, // Slightly smaller font for compact text
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '500',
    },
    divider: {
        width: 1.5,
        height: '85%',
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
    },
    rightContainer: {
        flex: 2,
        justifyContent: 'space-evenly',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10, // Space between rows
    },
    icon: {
        marginRight: 10,
        marginTop: 5, // Align icon to the middle of the two lines
    },
    label: {
        fontSize: 11,
        color: '#ffffff',
        marginBottom: 2,
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    income: {
        color: '#00C851',
    },
    expense: {
        color: '#FF4444',
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#ffffff',
        marginVertical: 8,
    },
});

export default SaveTargetBox;
