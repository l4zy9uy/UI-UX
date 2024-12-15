import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const CategoryList = ({ title, data }) => (
    <>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            scrollEnabled={true}
            renderItem={({ item }) => (
                <View style={styles.itemRow}>
                    {/* Icon */}
                    <FontAwesome5 name={item.icon} size={24} color="#5AD4FB" style={styles.icon} />

                    {/* Category Name and Date */}
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDate}>{item.date}</Text>
                    </View>

                    {/* Detail Name and Amount */}
                    <View style={styles.itemRightContainer}>
                        <Text style={styles.itemDetail}>{item.detail}</Text>
                        <Text style={styles.itemAmount}>{item.amount}</Text>
                    </View>
                </View>
            )}
            contentContainerStyle={styles.flatListContent}
        />
    </>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: '#eef8ff',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 12,
    },
    itemTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    itemDate: {
        fontSize: 10,
        color: '#666',
        marginTop: 4,
    },
    itemRightContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    itemDetail: {
        fontSize: 12,
        color: '#666',
    },
    itemAmount: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#007BFF',
        marginTop: 4,
    },
    flatListContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
});

export default CategoryList;
