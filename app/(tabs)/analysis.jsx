import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import {SubContainer} from "@/components/Container";
import { BarChart } from 'react-native-gifted-charts';

const { width } = Dimensions.get('window'); // Get screen width
const boxHeight = 100;
const { height } = Dimensions.get('window'); // Get screen height

const data = [
    {value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Jan'},
    {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Feb'},
    {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Mar'},
    {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Apr'},
    {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'May'},
    {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
];

const dataByDay = [
    { value: 500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Mon' },
    { value: 450, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
    { value: 600, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Tue' },
    { value: 400, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
];

const dataByWeek = data; // Your default data for weeks

const dataByMonth = [
    { value: 7000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Jan' },
    { value: 6500, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
    { value: 8000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Feb' },
    { value: 7500, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
];

const dataByYear = [
    { value: 85000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: '2023' },
    { value: 72000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
    { value: 95000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: '2024' },
    { value: 88000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
];

const AnalysisScreen = () => {
    const [selectedTime, setSelectedTime] = useState('Tuần'); // State for selected time filter
    const [currentData, setCurrentData] = useState(data); // State for chart data
    const [totalSum, setTotalSum] = useState(0); // State for total sum
    const [maxYAxis, setMaxYAxis] = useState(6000); // State for dynamic Y-axis maximum value
    const [totalIncome, setTotalIncome] = useState(0); // State for Thu Nhập
    const [totalExpense, setTotalExpense] = useState(0); // State for Chi Tiêu

    const handleTimeButtonClick = (time) => {
        setSelectedTime(time);

        // Update the chart data and calculate the total sum based on the selected time filter
        let newData;
        switch (time) {
            case 'Ngày':
                newData = dataByDay;
                break;
            case 'Tuần':
                newData = dataByWeek;
                break;
            case 'Tháng':
                newData = dataByMonth;
                break;
            case 'Năm':
                newData = dataByYear;
                break;
            default:
                newData = dataByWeek;
        }
        setCurrentData(newData);

        // Calculate the max Y-axis value dynamically
        const maxValue = Math.max(...newData.map((bar) => bar.value)) + 500; // Add padding
        setMaxYAxis(maxValue);

        // Calculate Thu Nhập and Chi Tiêu
        const income = newData
            .filter((_, index) => index % 2 === 0) // Odd indices (e.g., 0, 2, ...)
            .reduce((sum, bar) => sum + bar.value, 0);

        const expense = newData
            .filter((_, index) => index % 2 !== 0) // Even indices (e.g., 1, 3, ...)
            .reduce((sum, bar) => sum + bar.value, 0);

        setTotalIncome(income);
        setTotalExpense(expense);
    };


    return (
        <LinearGradient
            colors={['#2980b9', '#6dd5fa', '#ffffff']}
            locations={[0, 0.3, 1]}
            style={styles.container}
        >
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Thống Kê & Phân Tích</Text>
            </View>

            <ScrollView>
                {/* Two Boxes */}
                <View style={styles.balanceContainer}>
                    <View style={[styles.box, styles.incomeBox]}>
                        <Text style={styles.boxLabel}>Tổng Số Dư</Text>
                        <Text style={styles.boxValue}>$7,783.00</Text>
                    </View>
                    <View style={[styles.box, styles.expenseBox]}>
                        <Text style={styles.boxLabel}>Tổng Chi Tiêu</Text>
                        <Text style={styles.boxValue}>- $1,187.40</Text>
                    </View>
                </View>

                {/* Toggle Buttons */}
                <View style={styles.toggleContainer}>
                    <TouchableOpacity style={[styles.toggleButton, styles.activeToggleButton]}>
                        <Text style={styles.toggleText}>Cá Nhân</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggleButton}>
                        <Text style={styles.toggleText}>Nhóm</Text>
                    </TouchableOpacity>
                </View>

                {/* Subcontainer */}
                <SubContainer height={height * 0.6}>
                    {/* Time Buttons */}
                    {/* Time Buttons */}
                    <View style={styles.timeSelectorContainer}>
                        {['Ngày', 'Tuần', 'Tháng', 'Năm'].map((time) => (
                            <TouchableOpacity
                                key={time}
                                onPress={() => handleTimeButtonClick(time)}
                                style={[
                                    styles.timeButton,
                                    selectedTime === time && styles.activeTimeButton, // Active button styling
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.timeText,
                                        selectedTime === time && styles.activeTimeText, // Active text styling
                                    ]}
                                >
                                    {time}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>



                    {/* Graph Container */}
                    <View style={styles.graphContainer}>
                        <BarChart
                            data={currentData}
                            barWidth={12}
                            initialSpacing={10}
                            spacing={14}
                            barBorderRadius={4}
                            yAxisThickness={0}
                            xAxisType={'solid'}
                            xAxisColor="#111111"
                            yAxisTextStyle={{ color: '#111111' }}
                            stepValue={Math.ceil(maxYAxis / 6)} // Dynamically adjust step value
                            maxValue={maxYAxis} // Dynamically adjust max Y-axis value
                            noOfSections={6}
                            yAxisLabelTexts={[...Array(7).keys()].map((i) => `${(maxYAxis / 6) * i}`)} // Dynamically set Y-axis labels
                            labelWidth={40}
                            xAxisLabelTextStyle={{ color: '#000000', textAlign: 'center' }}
                        />
                    </View>

                    {/* Graph Description */}
                    <View style={styles.graphDescription}>
                        <View style={styles.descriptionItem}>
                            <FontAwesome5 name="arrow-down" size={20} color="#5AD4FB" />
                            <Text style={styles.descriptionText}>
                                Thu Nhập: ${totalIncome.toLocaleString()}
                            </Text>
                        </View>
                        <View style={styles.descriptionItem}>
                            <FontAwesome5 name="arrow-up" size={20} color="#FF6363" />
                            <Text style={styles.descriptionText}>
                                Chi Tiêu: ${totalExpense.toLocaleString()}
                            </Text>
                        </View>
                    </View>
                </SubContainer>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    box: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 8,
        borderRadius: 10,
    },
    incomeBox: {
        width: '48%', // Each box takes 45% of the width to allow spacing
        height: boxHeight,
        backgroundColor: '#0068ff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',    },
    expenseBox: {
        width: '48%', // Each box takes 45% of the width to allow spacing
        height: boxHeight,
        backgroundColor: '#0068ff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',    },
    boxLabel: {
        fontSize: 14,
        color: '#fff',
    },
    boxValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 16,
    },
    toggleButton: {
        width: '40%',
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    activeToggleButton: {
        backgroundColor: '#007BFF',
    },
    toggleText: {
        fontSize: 14,
        color: '#007BFF',
    },
    subContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        margin: 16,
    },
    timeSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    timeButton: {
        padding: 8,
        borderRadius: 25,
    },
    activeTimeButton: {
        backgroundColor: '#007BFF',
    },
    inactiveTimeButton: {
        backgroundColor: '#f0f0f0',
    },
    timeText: {
        fontSize: 14,
        color: '#007BFF',
    },
    graphContainer: {
        alignItems: 'center',
        width: '90%',
        backgroundColor: "#dbecf8",
        borderRadius: 10
    },
    chart: {
        borderRadius: 8,
    },
    graphDescription: {
        flexDirection: 'column',
        marginTop: 16,
    },
    descriptionItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descriptionText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    activeTimeText: {
        color: '#fff',
    },
    timeSelectorContainer: {
        flexDirection: 'row',
        backgroundColor: '#E7F1FF', // Light blue background for the box
        borderRadius: 20, // Rounded corners for the container
        padding: 5, // Padding inside the box
        justifyContent: 'space-around', // Space between buttons
        marginHorizontal: 20, // Side margin to center the box
        marginBottom: 16, // Bottom spacing
    },
});

export default AnalysisScreen;
