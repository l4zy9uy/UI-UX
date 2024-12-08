import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';

const AnalysisScreen = () => {
    const screenWidth = Dimensions.get('window').width;

    const data = {
        labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
        datasets: [
            {
                data: [5000, 10000, 7500, 12500],
                color: () => '#0066ff', // Blue line
                strokeWidth: 2,
            },
            {
                data: [4000, 9000, 7000, 11000],
                color: () => '#00cc99', // Green line
                strokeWidth: 2,
            },
        ],
        legend: ['Thu Nhập', 'Chi Tiêu'],
    };

    return (
        <LinearGradient
            colors={['#66ccff', '#99ddff']}
            style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={styles.headerTitle}>Thống Kê & Phân Tích</Text>
                <Feather name="bell" size={24} color="white" />
            </View>

            {/* Content */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Balance Info */}
                <View style={styles.balanceInfo}>
                    <View style={styles.balanceItem}>
                        <Text style={styles.balanceTitle}>Tổng Số Dư</Text>
                        <Text style={styles.balanceValue}>$7,783.00</Text>
                    </View>
                    <View style={styles.balanceItem}>
                        <Text style={styles.balanceTitle}>Tổng Chi Tiêu</Text>
                        <Text style={[styles.balanceValue, { color: '#0066ff' }]}>- $1,187.40</Text>
                    </View>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: '30%' }]} />
                    <Text style={styles.progressTarget}>$20,000.00</Text>
                </View>

                {/* Toggle Buttons */}
                <View style={styles.toggleButtons}>
                    <Pressable style={[styles.toggleButton, styles.activeButton]}>
                        <Text style={styles.toggleButtonText}>Cá Nhân</Text>
                    </Pressable>
                    <Pressable style={styles.toggleButton}>
                        <Text style={styles.toggleButtonText}>Nhóm</Text>
                    </Pressable>
                </View>

                {/* Time Filters */}
                <View style={styles.filters}>
                    {['Ngày', 'Tuần', 'Tháng', 'Năm'].map((filter, index) => (
                        <Pressable
                            key={index}
                            style={[styles.filterButton, filter === 'Tuần' && styles.activeFilter]}>
                            <Text style={styles.filterText}>{filter}</Text>
                        </Pressable>
                    ))}
                </View>

                {/* Graph */}
                <View style={styles.graphContainer}>
                    <Text style={styles.graphTitle}>Thu Nhập & Chi Tiêu</Text>
                    <LineChart
                        data={data}
                        width={screenWidth * 0.9}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#ffffff',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#0066ff',
                            },
                        }}
                        style={styles.chart}
                        bezier
                    />
                </View>

                {/* Income and Expense */}
                <View style={styles.summary}>
                    <View style={styles.summaryItem}>
                        <AntDesign name="arrowup" size={20} color="#00cc99" />
                        <View style={styles.summaryTextContainer}>
                            <Text style={styles.summaryTitle}>Thu Nhập</Text>
                            <Text style={styles.summaryValue}>$11,420.00</Text>
                        </View>
                    </View>
                    <View style={styles.summaryItem}>
                        <AntDesign name="arrowdown" size={20} color="#0066ff" />
                        <View style={styles.summaryTextContainer}>
                            <Text style={styles.summaryTitle}>Chi Tiêu</Text>
                            <Text style={styles.summaryValue}>$20,000.20</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    scrollView: {
        flex: 1,
        marginHorizontal: 20,
    },
    balanceInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    balanceItem: {
        alignItems: 'center',
    },
    balanceTitle: {
        fontSize: 14,
        color: '#666',
    },
    balanceValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#00cc99',
        borderRadius: 4,
    },
    progressTarget: {
        marginLeft: 10,
        fontSize: 12,
        color: '#333',
    },
    toggleButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    toggleButton: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#0066ff',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 5,
    },
    activeButton: {
        backgroundColor: '#0066ff',
    },
    toggleButtonText: {
        color: '#0066ff',
        fontWeight: 'bold',
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    filterButton: {
        padding: 10,
        backgroundColor: '#e6f7ff',
        borderRadius: 20,
    },
    activeFilter: {
        backgroundColor: '#0066ff',
    },
    filterText: {
        color: '#0066ff',
        fontWeight: 'bold',
    },
    graphContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    graphTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    chart: {
        borderRadius: 16,
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    summaryItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    summaryTextContainer: {
        marginLeft: 10,
    },
    summaryTitle: {
        fontSize: 14,
        color: '#666',
    },
    summaryValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AnalysisScreen;
