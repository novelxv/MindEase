import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import FooterNavigation from '../components/Footer';
import TodayCard from '../components/TodayCard';
import JournalCard from '../components/JournalCard';
import FilterModal from '../components/FilterModal';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../styles/global';

const maxWidth = 375;

const JournalScreen = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const prevJournals = [
    { date: '21/12/2024', preview: 'Dear Minnie, Today...' },
    { date: '20/12/2024', preview: 'Dear Minnie, Today...' },
    { date: '19/12/2024', preview: 'Dear Minnie, Today...' },
    { date: '18/12/2024', preview: 'Dear Minnie, Today...' },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
          <ImageBackground 
            source={require('../assets/watercolor-orange.png')} 
            style={globalStyles.backgroundimage}
            resizeMode="cover"
          >
          <HeaderWithBackButton title="Journal" />
        <View style={styles.content}>
          
          <TodayCard onPress={() => console.log('Today button clicked')} variant="orange" buttonText="✎ Write a journal today!"/>
          
          <View style={styles.prevJournalSection}>
            <View style={styles.prevJournalHeader}>
              <Text style={styles.prevJournalTitle}>Prev. Journal</Text>
              <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
                <Text style={styles.filterText}>Filter</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.dateNavigation}>
              <Text style={styles.dateNavigationText}>{'<'}</Text>
              <Text style={styles.dateRange}>Dec 16 - 22 2024</Text>
              <Text style={styles.dateNavigationText}>{'>'}</Text>
            </View>

            <ScrollView style={styles.journalList}>
              {prevJournals.map((journal, index) => (
                <JournalCard
                  key={index}
                  date={journal.date}
                  preview={journal.preview}
                  emoji={"😞"}
                />
              ))}
            </ScrollView>
          </View>
        </View>
          </ImageBackground>
        <FooterNavigation />
        {filterModalVisible && (
          <FilterModal
            visible={filterModalVisible}
            onClose={() => setFilterModalVisible(false)}
            onSelectRange={(range) => {
              console.log('Selected range:', range);
              setFilterModalVisible(false);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: maxWidth,
    backgroundColor: '#FFF9C4',
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  prevJournalSection: {
    flex: 1,
  },
  prevJournalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  prevJournalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  filterText: {
    fontSize: 16,
    color: '#666',
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateNavigationText: {
    fontSize: 18,
    color: '#666',
  },
  dateRange: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  journalList: {
    flex: 1,
  },
});

export default JournalScreen;