import React from 'react';
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

const { width } = Dimensions.get('window');

const data = [
    {
        title: 'Hôm nay',
        notifications: [
            { icon: 'bell', title: 'Nhắc Nhở!', description: 'Cài đặt tiết kiệm tự động của bạn để đạt được mục tiêu tiết kiệm.', time: '17:00 - 24 Tháng 4' },
            { icon: 'star', title: 'Cập Nhật Mới', description: 'Cài đặt tiết kiệm tự động của bạn để đạt được mục tiêu tiết kiệm.', time: '17:00 - 24 Tháng 4' }
        ]
    },
    {
        title: 'Hôm qua',
        notifications: [
            { icon: 'shopping-cart', title: 'Giao Dịch', description: 'Một giao dịch mới vừa được hoàn thành\nTạp Hoá | Khăn 1 - $100.00', time: '17:00 - 24 Tháng 4' },
            { icon: 'bell', title: 'Nhắc Nhở!', description: 'Cài đặt tiết kiệm tự động của bạn để đạt được mục tiêu tiết kiệm.', time: '17:00 - 24 Tháng 4' }
        ]
    },
    {
        title: 'Tuần này',
        notifications: [
            { icon: 'alert-circle', title: 'Chi Tiêu Vượt Giới Hạn!', description: 'We recommend that you be more attentive to your finances.', time: '17:00 - 24 Tháng 4' }
        ]
    }
];

const NotificationScreen = () => {
    const renderNotificationItem = ({ item }) => (
        <View style={styles.notificationContainer}>
            {/* First Row: Icon and Title */}
            <View style={styles.row}>
                <Ionicons name={item.icon} size={30} color="#0068ff" style={styles.notificationIcon} />
                <Text style={styles.notificationTitle}>{item.title}</Text>
            </View>

            {/* Second Row: Description */}
            <Text style={styles.notificationDescription}>{item.description}</Text>

            {/* Third Row: Time */}
            <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
    );


    const renderSection = ({ item }) => (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <FlatList
                data={item.notifications}
                renderItem={renderNotificationItem}
                keyExtractor={(item, index) => `${item.title}-${index}`}
            />
        </View>
    );

    return (
        <LinearGradient
            colors={['#2980b9', '#6dd5fa', '#ffffff']}
            locations={[0, 0.3, 1]}
            style={styles.container}
        >
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Thông Báo</Text>
            </View>

            {/* Notifications */}
            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={renderSection}
                    keyExtractor={(item, index) => `${item.title}-${index}`}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flex: 1,
        backgroundColor: '#f8fbff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -20,
        padding: 20,
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0068ff',
        marginBottom: 10,
    },
    notificationContainer: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, // Shadow for Android
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    notificationIcon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6f2ff',
        borderRadius: 20,
        textAlign: 'center',
        marginRight: 10, // Space between icon and title
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flex: 1, // Allow the title to take up the remaining space in the row
    },
    notificationDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    notificationTime: {
        fontSize: 12,
        color: '#999',
        textAlign: 'right',
    },
});

export default NotificationScreen;
