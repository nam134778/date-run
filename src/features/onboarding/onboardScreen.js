import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

const COLORS = {primary: "#FD539A", secondary: "#FFCCD3"};

const slides = [
    {
        id: '1',
        image: require('../../assets/image1.png'),
        title: 'Don\'t Feel Alone',
        subtitle: 'You don\'t likes to run alone and the built-in group feature helps you connect someone running like you',
    },
    {
        id: '2',
        image: require('../../assets/image2.png'),
        title: 'Healthy Life',
        subtitle: 'Run and earn healthy point to be outstanding in other runner',
    },
    {
        id: '3',
        image: require('../../assets/image3.png'),
        title: 'Run Anywhere',
        subtitle: 'Integrated maps and running route enhance your team experience',
    },
]

const Slide = ({item}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Image
                source={item.image}
                style={{height: '60%', width, resizeMode: 'contain'}}
            />
            <Text style={styles.title}>{item.title}</Text>
            {/* <Text style={styles.subtitle}>{item.subtitle}</Text> */}
        </View>
    )
}


const OnboardingScreen = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);
    const Footer = () => {
        return(
            <View
            style={{
                height: height * 0.1,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}>
                <View style={{flexDirection: 'row',justifyContent: 'center', marginTop: 20}}>
                    {slides.map((_,index) => (
                        <View key={index} style={[styles.indicator, currentSlideIndex == index && {backgroundColor: COLORS.primary, width: 30}]} />
                    ))}
                </View>
            </View>)
    }
    const Footer2 = () => {
        return(
            <>
                {
                    currentSlideIndex == slides.length - 1 ? (<View style={{flexDirection: 'row', marginBottom: 10, maxWidth: "90%"}}>
                        <TouchableOpacity style={[styles.btn]}
                            onPress={() => navigation.navigate("Dashboard")}
                        >
                            <Text style={{fontWeight: 'bold', fontSize: 15, color:"white"}}>
                                GET STARTED
                            </Text>
                        </TouchableOpacity>
                        </View>):(<View style={{flexDirection: 'row', marginBottom: 10, maxWidth: "90%"}}>
                                    <TouchableOpacity style={[styles.btn]}
                                        onPress={skip}>
                                        <Text style={{color:"white"}}>SKIP</Text>
                                    </TouchableOpacity>
                                    <View style={{width: 15}}/>
                                    <TouchableOpacity style={[styles.btn]}
                                        onPress={goNextSlide}
                                    >
                                        <Text style={{color:"white"}}>NEXT</Text>
                                    </TouchableOpacity>
                                </View>)
                }
            </>
        )
    };

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    }

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <FlatList
                ref={ref}
                pagingEnabled
                onMomentumScrollEnd={updateCurrentSlideIndex}
                style={{marginTop: 100 }}
                data={slides}
                contentContainerStyle={{height: height * 0.75}}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <Slide item={item} />}
            />
            <Footer />
            <Footer2 />
        </SafeAreaView>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 15,
        marginTop: 20,
        maxWidth:"70%",
        textAlign: 'center',
        lineHeight: 23,
    },
    indicator: {
        height: 10,
        width: 20,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        marginHorizontal: 3,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    }
});