import React from 'react';
import { View, Pressable, StyleSheet, PressableProps, Text } from 'react-native';
import { icons } from '@/assets/icons';

interface TabBarButtonProps extends PressableProps {
    isFocused: boolean;
    label: string;
    routeName: keyof typeof icons;
    color: string;
}

const TabBarButton: React.FC<TabBarButtonProps> = (props) => {
    const { isFocused, routeName, color, ...pressableProps } = props;

    // Ensure the routeName maps to a valid icon
    const IconComponent = icons[routeName] || (() => <Text>Invalid icon</Text>);

    return (
        <Pressable {...pressableProps} style={styles.container}>
            <View
                style={[
                    styles.iconContainer,
                    isFocused && styles.activeIconContainer, // Apply active styles if focused
                ]}
            >
                {/* Render the icon */}
                <IconComponent color={isFocused ? '#ffffff' : color} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'transparent',
    },
    activeIconContainer: {
        backgroundColor: '#0068ff',
        borderRadius: 15,
    },
});

export default TabBarButton;
