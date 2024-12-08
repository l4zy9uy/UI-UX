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
    // @ts-ignore
    const renderNotificationItem = ({ item }) => (
        <View style={styles.notificationContainer}>
            <Ionicons name={item.icon} size={30} color="#0068ff" />
            <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationDescription}>{item.description}</Text>
            </View>
            <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
    );

    // @ts-ignore
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
        <LinearGradient colors={['#66ccff', '#99ddff']} style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={30} color="#fff" />
                <Text style={styles.headerTitle}>Thông Báo</Text>
                <Feather name="bell" size={30} color="#fff" />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#66ccff',
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
        backgroundColor: '#fff',
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    notificationContent: {
        flex: 1,
        marginLeft: 10,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    notificationDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    notificationTime: {
        fontSize: 12,
        color: '#999',
    },
});

export default NotificationScreen;
