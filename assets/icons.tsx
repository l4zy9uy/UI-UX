import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export const icons: {
    home: (props: { color?: string; size?: number }) => React.ReactNode;
    analysis: (props: { color?: string; size?: number }) => React.ReactNode;
    transaction: (props: { color?: string; size?: number }) => React.ReactNode;
    category: (props: { color?: string; size?: number }) => React.ReactNode;
    notification: (props: { color?: string; size?: number }) => React.ReactNode;
    profile: (props: { color?: string; size?: number }) => React.ReactNode;
} = {
    home: (props) => <AntDesign name="home" size={22} {...props} />,
    analysis: (props) => <AntDesign name="barschart" size={22} {...props} />,
    transaction: (props) => <Entypo name="line-graph" size={22} {...props} />,
    category: (props) => <Ionicons name="file-tray-stacked-outline" size={24} {...props} />,
    notification: (props) => <Ionicons name="notifications-outline" size={24} {...props} />,
    profile: (props) => <AntDesign name="setting" size={24} {...props} />,
};
