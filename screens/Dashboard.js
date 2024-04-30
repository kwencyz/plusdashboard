// Dashboard.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Dashboard!</Text>
            <Text>This is a dummy page for your dashboard display.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

export default Dashboard;
