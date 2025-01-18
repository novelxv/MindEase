import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../../components/Footer';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../../styles/global';
import { LinearGradient } from 'expo-linear-gradient';

const CreativeExpressionScreen = ({navigation}) => {
    const handleBackPress = () => {
        navigation.navigate('Activity');
    };
    return (
        <SafeAreaView style={globalStyles.container}>
            <LinearGradient
                colors={['#505482', '#FFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={globalStyles.backgroundimage}
            >
                <HeaderWithBackButton title="Creative Emotional Expression" isWhite={true} onBackPress={handleBackPress} />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
                </ScrollView>

                <FooterNavigation />
            </LinearGradient>
        </SafeAreaView>

        
      );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  cardWrapper: {
    marginBottom: 20,
  },
});

export default CreativeExpressionScreen;
