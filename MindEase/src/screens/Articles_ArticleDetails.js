import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../styles/global';

const ArticleDetails = ({navigation}) => {
    const handleBackPress = () => {
        navigation.navigate('Article');
    };
    return (
        <SafeAreaView style={globalStyles.container}>
            <ImageBackground 
                source={require('../assets/watercolor-blue.png')} 
                style={globalStyles.backgroundimage}
                resizeMode="cover">
                <HeaderWithBackButton title="Activity" onBackPress={handleBackPress} />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >

                </ScrollView>

                <FooterNavigation />
            </ImageBackground>
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

export default ArticleDetails;
