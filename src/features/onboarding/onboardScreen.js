import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

const { width, height } = Dimensions.get("window");

const COLORS = {primary: "#FD539A", secondary: "#FFCCD3"};

const OnboardingScreen = ({navigation}) => {

    const Square = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
          backgroundColor = selected ? COLORS.primary : COLORS.secondary;
        } else {
          backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }
        return (
          <View
            style={{
              width: 20,
              height: 6,
              borderRadius: 10,
              marginHorizontal: 3,
              backgroundColor,
            }}
          />
        );
      };
      
      const backgroundColor = isLight => (isLight ? COLORS.primary : COLORS.secondary);
      const color = isLight => backgroundColor(!isLight);
      
      const Done = ({ isLight, ...props }) => (
        <Text {...props} style={{marginRight: 15, fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>DONE</Text>
      );
      
      const Skip = ({ isLight, skipLabel, ...props }) => (
        <Text {...props} style={{marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>SKIP</Text>
      );
      
      const Next = ({ isLight, ...props }) => (
        <Text {...props} style={{marginRight: 15, fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>NEXT</Text>
        // <Button
        //   color={COLORS.primary}
        //   title={'Next'}
        //   buttonStyle={{
        //     backgroundColor: backgroundColor(isLight),
        //   }}
        //   containerViewStyle={{
        //     marginVertical: 10,
        //     width: 70,
        //     backgroundColor: backgroundColor(isLight),
        //   }}
        //   textStyle={{ color: color(isLight) }}
        //   {...props}
        // />
      );

    return (
        <Onboarding
            bottomBarColor={'white'}
            DotComponent={Square}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            imageContainerStyles={styles.img}
            titleStyles={styles.title}
            subTitleStyles={styles.subtitle}
            onSkip={() => navigation.replace("Dashboard")}
            onDone={() => navigation.navigate("Dashboard")}
            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image source={require('../../assets/image1.png')} />,
                    title: 'Don\'t Feel Alone',
                    subtitle: 'You don\'t likes to run alone and the built-in group feature helps you connect someone running like you',
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={require('../../assets/image2.png')} />,
                    title: 'Healthy Life',
                    subtitle: 'Run and earn healthy point to be outstanding in other runner',
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={require('../../assets/image3.png')} />,
                    title: 'Run Anywhere',
                    subtitle: 'Integrated maps and running route enhance your team experience',
                },
            ]}

        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -40,
    },
    subtitle: {
        fontSize: 15,
        marginTop: 0,
        maxWidth:"60%",
        textAlign: 'center',
        lineHeight: 23,
    },
    img: {
        marginTop: -50
    }
});