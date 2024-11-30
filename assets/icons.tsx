import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import React from "react";

export const icons: {
    home: (props: { color?: string; size?: number }) => React.ReactNode;
    analysis: (props: { color?: string; size?: number }) => React.ReactNode;
    transaction: (props: { color?: string; size?: number }) => React.ReactNode;
    category: (props: { color?: string; size?: number }) => React.ReactNode;
    profile: (props: { color?: string; size?: number }) => React.ReactNode;
} = {
    home: (props) => <AntDesign name="home" size={26} {...props} />,
    analysis: (props) => <AntDesign name="barschart" size={24} {...props} />,
    transaction: (props) => <Entypo name="line-graph" size={24} {...props} />,
    category: (props) => <MaterialIcons name="category" size={24} {...props} />,
    profile: (props) => <AntDesign name="setting" size={24} {...props} />,
};
