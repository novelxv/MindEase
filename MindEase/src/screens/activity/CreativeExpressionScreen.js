import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import FooterNavigation from '../../components/Footer';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import TodayCard from '../../components/TodayCard';

const maxWidth = 375;

const CreativeExpressionScreen = ({navigation}) => {
  const handleBackPress = () => {
      navigation.navigate('Activity');
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.content}>
      <LinearGradient
        colors={['#505482', '#FFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={globalStyles.backgroundimage}>
        <HeaderWithBackButton title="Creative Emotional Expression" isWhite={true} onBackPress={handleBackPress} />
        <TodayCard onPress={() => console.log('Today button clicked')} variant="purple" buttonText="Create Something New"/>
        <View style={styles.prevJournalSection}>
          <ScrollView style={styles.journalList}>

          </ScrollView>
        </View>
        
        <FooterNavigation />
      </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    maxWidth: maxWidth,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  cardWrapper: {
    marginBottom: 20,
  },
  prevJournalSection: {
    flex: 1,
  },
});

export default CreativeExpressionScreen;
