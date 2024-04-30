// Dashboard.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.rowContainer}>
                    <Image source={require('../assets/logo/logo.png')} style={styles.logo} />
                    {/* <Text style={styles.subtitle}>Your journey is safe with us</Text> */}
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.row}>
                        <Image source={require('../assets/icon/dp.png')} style={styles.icon} />
                        <Text style={styles.profileText}>Haziq Ruslan</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    rowContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 150,
        height: 80,
        marginTop: 10,
        marginLeft:10,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 60,
    },
    profileText: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default Dashboard;
