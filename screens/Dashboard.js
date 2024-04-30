// Dashboard.js
import React, { useState } from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart, PieChart } from "react-native-gifted-charts";

const Dashboard = () => {

    const lineData = [
        { value: 58, dataPointText: '58' },
        { value: 56, dataPointText: '56' },
        { value: 78, dataPointText: '78' },
        { value: 74, dataPointText: '74' },
        { value: 98, dataPointText: '98' },
    ];

    const lineData2 = [
        { value: 40, dataPointText: '40' },
        { value: 36, dataPointText: '36' },
        { value: 60, dataPointText: '60' },
        { value: 54, dataPointText: '54' },
        { value: 85, dataPointText: '85' },
    ];

    const lineData3 = [
        { value: 20, dataPointText: '20' },
        { value: 25, dataPointText: '25' },
        { value: 40, dataPointText: '40' },
        { value: 37, dataPointText: '37' },
        { value: 50, dataPointText: '50' },
    ];

    const pieData = [
        { value: 70, color: '#CC0007' },
        { value: 30, color: 'lightgray' }
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        { key: '1', source: require('../assets/images/bangi.png') },
        { key: '2', source: require('../assets/images/nilai.png') },
        { key: '3', source: require('../assets/images/seremban.png') },
        { key: '4', source: require('../assets/images/seremban2.png') },
    ];

    const renderImage = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedImage(item.source)}>
            <Image source={item.source} style={styles.livecam} />
        </TouchableOpacity>
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.rowContainer}>
                        <Image source={require('../assets/logo/logo.png')} style={styles.logo} />
                    </View>

                    <View style={styles.rowContainer}>
                        <View style={styles.row}>
                            <Image source={require('../assets/icon/dp.png')} style={styles.icon} />
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.subtitle}>Welcome Back</Text>
                </View>

                <View style={styles.locationButton}>
                    <Text style={styles.locationText}>UKM, Bangi</Text>
                </View>

                <Image source={require('../assets/icon/arrow.png')} style={styles.arrow} />

                <View style={styles.locationButton}>
                    <Text style={styles.locationText}>Seremban</Text>
                </View>

                <View style={styles.chartContainer}>

                    <Text style={styles.chartText}>Number of Vehicle: 233</Text>

                    <View style={styles.chartRow}>
                        <View style={styles.label1}></View>
                        <Text style={styles.labelText}>Car</Text>

                        <View style={styles.label2}></View>
                        <Text style={styles.labelText}>Motorcycle</Text>

                        <View style={styles.label3}></View>
                        <Text style={styles.labelText}>Heavy Vehicle</Text>
                    </View>

                    <LineChart
                        data={lineData}
                        data2={lineData2}
                        data3={lineData3}
                        height={250}
                        showVerticalLines
                        spacing={80}
                        initialSpacing={0}
                        color1="#00943A"
                        color2="#7ED957"
                        color3="#009439"
                        textColor1="green"
                        dataPointsHeight={6}
                        dataPointsWidth={6}
                        dataPointsColor1="grey"
                        dataPointsColor2="grey"
                        dataPointsColor3="grey"
                        textShiftY={-2}
                        textShiftX={-5}
                        textFontSize={13}
                        isAnimated={true}
                    />
                </View>

                <View style={styles.trafficRow}>
                    <View style={styles.trafficContainer}>
                        <Text style={styles.title}>Traffic Update</Text>

                        <View style={styles.updateRow}>
                            <Text style={styles.trafficText}>3</Text>
                            <Text style={styles.title}>Accident(s)</Text>
                            <Image source={require('../assets/icon/accident.png')} style={styles.trafficIcon} />
                        </View>

                        <View style={styles.updateRow}>
                            <Text style={styles.trafficText}>1</Text>
                            <Text style={styles.title}>Construction(s)</Text>
                            <Image source={require('../assets/icon/construction.png')} style={styles.trafficIcon} />
                        </View>

                    </View>

                    <View style={styles.levelContainer}>
                        <Text style={styles.title}>Congestion Level</Text>
                        <View>
                            <PieChart
                                donut
                                innerRadius={40}
                                radius={60}
                                data={pieData}
                                centerLabelComponent={() => {
                                    return <Text style={{ fontSize: 20 }}>70%</Text>;
                                }}
                            />
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>Livecam</Text>

                <FlatList
                    data={images}
                    renderItem={renderImage}
                    keyExtractor={item => item.key}
                    horizontal
                />
                <Modal visible={selectedImage !== null} transparent>
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                        onPress={() => setSelectedImage(null)}
                    >
                        <Image source={selectedImage} style={styles.modalImage} />
                    </TouchableOpacity>
                </Modal>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    rowContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    chartRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
    },
    trafficRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        marginBottom: 20,
        justifyContent: 'center',
    },
    updateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    camRow: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 80,
        marginTop: 10,
        marginLeft: 10,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 150,
    },
    arrow: {
        width: 40,
        height: 40,
        marginVertical: 5,
        alignSelf: 'center',
    },
    trafficIcon: {
        width: 40,
        height: 40,
        marginLeft: 20,
    },
    profileText: {
        marginLeft: 10,
        fontSize: 16,
    },
    subtitle: {
        marginLeft: 10,
        fontSize: 20,
    },
    chartText: {
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    locationButton: {
        marginTop: 10,
        alignSelf: 'center',
        width: '95%',
        height: 40,
        backgroundColor: '#E4E4E4',
        borderRadius: 20,
        justifyContent: 'center',
    },
    locationText: {
        fontSize: 20,
        marginLeft: 20,
    },
    chartContainer: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        padding: 10,
    },
    trafficContainer: {
        width: '65%',
        height: 200,
        marginTop: 20,
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        padding: 10,
    },
    levelContainer: {
        width: '35%',
        height: 200,
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        padding: 10,
    },
    labelText: {
        marginLeft: 10,
        fontSize: 20,
    },
    label1: {
        backgroundColor: "#00943A",
        width: 20,
        height: 20,
    },
    label2: {
        backgroundColor: "#7ED957",
        width: 20,
        height: 20,
        marginLeft: 20,
    },
    label3: {
        backgroundColor: "#009439",
        width: 20,
        height: 20,
        marginLeft: 20,
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    trafficText: {
        marginLeft: 10,
        fontSize: 40,
        color: "green",
        fontWeight: "bold",
    },
    livecam: {
        width: 120,
        height: 120,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 30,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalImage: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
});

export default Dashboard;
