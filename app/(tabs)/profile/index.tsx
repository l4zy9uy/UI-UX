import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Animated } from 'react-native';
import { Text } from 'react-native-paper';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Container, SubContainer } from '@/components/Container';

const ProfileScreen = () => {
    return (
        <Container>
            {/* Header */}
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={styles.headerTitle}>Tài Khoản</Text>
                <Feather name="bell" size={24} color="white" />
            </View>

            {/* Sub-container */}
            <SubContainer>
                {/* Profile Info */}
                <View style={styles.profileInfo}>
                    <Image
                        source={{
                            uri: 'https://via.placeholder.com/100', // Replace with actual profile image URL
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.profileName}>Viết Thành</Text>
                    <Text style={styles.profileId}>ID: 25030024</Text>
                </View>

                {/* Menu Items */}
                <View style={styles.menu}>
                    <MenuItem
                        icon={<AntDesign name="user" size={24} color="#0066ff" />}
                        label="Sửa Thông Tin Cá Nhân"
                        link="/(tabs)/profile/personal-info"
                    />
                    <MenuItem
                        icon={<Feather name="lock" size={24} color="#0066ff" />}
                        label="Bảo Mật"
                        link="/(tabs)/profile/security"
                    />
                    <MenuItem
                        icon={<MaterialIcons name="settings" size={24} color="#0066ff" />}
                        label="Cài Đặt"
                        link="/(tabs)/profile/settings"
                    />
                    <MenuItem
                        icon={<AntDesign name="customerservice" size={24} color="#0066ff" />}
                        label="Hỗ Trợ"
                        link="/(tabs)/profile/support"
                    />
                    <MenuItem
                        icon={<Feather name="log-out" size={24} color="#0066ff" />}
                        label="Đăng Xuất"
                        onPress={() => console.log('Logout Pressed')}
                        link=""
                    />
                </View>
            </SubContainer>
        </Container>
    );
};

const MenuItem = ({ icon, label, link, onPress }: any) => {
    const [scaleValue] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const animatedStyle = {
        transform: [{ scale: scaleValue }],
    };
    console.log(link)
    return (
        <Link href={link} asChild>
            <Pressable
                style={({ pressed }) => [
                    styles.menuItem,
                    pressed && { backgroundColor: '#f0f0f0' },
                ]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={onPress}
            >
                <Animated.View style={animatedStyle}>
                    <View style={styles.menuIcon}>{icon}</View>
                    <Text style={styles.menuText}>{label}</Text>
                </Animated.View>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
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
    profileInfo: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    profileId: {
        fontSize: 14,
        color: '#666',
    },
    menu: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuIcon: {
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
});

export default ProfileScreen;
