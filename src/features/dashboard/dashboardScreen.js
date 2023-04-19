import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ProgressBarAndroid, StatusBar, ScrollView } from 'react-native';
// import { Stack, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Feather';
const COLORS = {primary: "#FD539A", secondary: "#FFCCD3"};
import { Avatar, LinearProgress } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const DashboardScreen = ({navigation}) => {
    return (
        // <View style={styles.container}>
        //     <Text>Dashboard Screen</Text>
        //     <Button
        //         title="Click Here"
        //         onPress={() => alert("Button Clicked!")}
        //     />
        // </View>
        // <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F6FB'}}>
            <StatusBar translucent={true} backgroundColor={COLORS.primary} />
            <View style={styles.header}>
                {/* <Icon name="settings" size={28} color={"white"} /> */}
                <View>
                    <Text style={{ marginTop: 60, marginLeft: 55, fontSize: 18, fontWeight: '700', color: 'white'}}>{'Mike Johnson'}</Text>
                    <Avatar
                        size={46}
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.1}
                        containerStyle={{marginTop: -25, backgroundColor: "gray"}}
                    />
                </View>

                <Icon name="settings" size={28} color={"white"} style={{marginTop: 60}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    backgroundColor: COLORS.primary,
                    height: 145,
                    borderBottomLeftRadius: 18,
                    borderBottomRightRadius: 18,
                    paddingHorizontal: 30
                }}>
                    <View>
                        <View style={styles.profileContainer} elevation={2}>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 13}}>
                                <Text style={{ fontSize: 18, fontWeight: '700'}}>{'Total distance'}</Text>
                                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: '700', color: COLORS.primary}}>{'50'}</Text>
                                <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: '700', color: COLORS.primary}}>km</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 13}}>
                                {/* <Text style={{ fontSize: 18, fontWeight: '700'}}>{'Total distance'}</Text> */}
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={0.5}
                                    height={10}
                                    style={{width: '100%'}}
                                    />
                                {/* <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: '700', color: COLORS.primary}}>km</Text> */}
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.sectionTitle}>Friend</Text>
            </ScrollView>
        </SafeAreaView>
        // </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    profileContainer: {
        height: 140, width: '100%',
        backgroundColor: 'white',
        borderRadius: 18,
        position: 'absolute',
        top: 30,
        paddingHorizontal: 25
    },
    sectionTitle: {
        marginHorizontal: 30,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 40,
    }
});

export default DashboardScreen;