import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FooterNavigation from '../components/Footer';
import TodayCard from '../components/TodayCard';
import JournalCard from '../components/JournalCard';
import FilterModal from '../components/FilterModal';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../styles/global';
import { getJournalsByMonth } from '../services/journalService';

const maxWidth = 375;

const JournalScreen = () => {
    const navigation = useNavigation();
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [prevJournals, setPrevJournals] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)); // Default to current month
    
    useEffect(() => {
        const fetchJournals = async () => {
            try {
                const journals = await getJournalsByMonth(selectedMonth);
                setPrevJournals(journals.sort((a, b) => new Date(b.date) - new Date(a.date))); // Sort journals by date in descending order
            } catch (error) {
                console.error("Error fetching journals:", error);
            }
        };
        
        fetchJournals();
    }, [selectedMonth]);
    
    const handleWriteJournal = () => {
        const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
        navigation.navigate('JournalDetails', { date: today });
    };
    
    const handleNavigateToJournal = (date) => {
        if (date) {
            console.log("Navigating to JournalDetails with date:", date);
            navigation.navigate('JournalDetails', { date }); // Navigasi ke halaman detail berdasarkan tanggal
        } else {
            console.error("Invalid date for journal detail navigation.");
        }
    };
    
    const handleMonthChange = (direction) => {
        const currentMonth = new Date(selectedMonth + "-01");
        const newMonth = new Date(
            currentMonth.setMonth(currentMonth.getMonth() + direction)
        )
        .toISOString()
        .slice(0, 7);
        setSelectedMonth(newMonth);
    };
    
    const getPreviewText = (text) => {
        return text.split(" ").slice(0, 5).join(" ") + "...";
    };
    
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
        <TodayCard onPress={handleWriteJournal} variant="orange" buttonText="✎ Write a journal today!"/>
        
        <View style={styles.prevJournalSection}>
        <View style={styles.prevJournalHeader}>
        <Text style={[globalStyles.header, styles.prevJournalTitle]}>Prev. Journal</Text>
        {/* <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
            <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity> */}
            </View>
            
            <View style={styles.dateNavigation}>
            <TouchableOpacity onPress={() => handleMonthChange(-1)}>
            <Text style={styles.dateNavigationText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={[globalStyles.content, styles.dateRange]}>{selectedMonth}</Text>
            <TouchableOpacity onPress={() => handleMonthChange(1)}>
            <Text style={styles.dateNavigationText}>{'>'}</Text>
            </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.journalList}>
            {prevJournals.map((journal, index) => (
                <JournalCard
                key={index}
                date={journal.date}
                preview={getPreviewText(journal.userInput)}
                onPress={() => {
                    console.log("JournalCard pressed for date:", journal.date); 
                    handleNavigateToJournal(journal.date);
                }}
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
                    setSelectedMonth(range);
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