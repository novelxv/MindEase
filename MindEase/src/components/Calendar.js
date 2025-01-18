import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const Calendar = ({ 
  initialMarkedDates = {
    '2025-01-20': 'yellow',
    '2025-01-21': 'mint',
    '2025-01-22': 'lightGreen', 
    '2025-01-23': 'coral',
    '2025-01-24': 'brown',
    '2025-01-25': 'green',
    '2025-01-26': 'selected'
  }
}) => {

  const currentDate = new Date();
  const currYear = currentDate.getFullYear();
  const currMonth = currentDate.getMonth();
  const currDate = currentDate.getDate();

  const [currentMonth, setCurrentMonth] = useState(currMonth);
  const [currentYear, setCurrentYear] = useState(currYear);
  const [selectedDate, setSelectedDate] = useState(currDate);
  const [markedDates, setMarkedDates] = useState(initialMarkedDates);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const getPreviousMonthDays = (month, year) => {
    const firstDay = getFirstDayOfMonth(month, year);

    if (firstDay === 0) return [];
    
    const previousMonth = month === 0 ? 11 : month - 1;
    const previousYear = month === 0 ? year - 1 : year;
    const daysInPreviousMonth = getDaysInMonth(previousMonth, previousYear);
    
    return Array.from({ length: firstDay }, (_, index) => ({
      date: daysInPreviousMonth - firstDay + index + 1,
      disabled: true,
      month: previousMonth,
      year: previousYear
    }));
  };

  const getNextMonthDays = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const lastDay = new Date(year, month, daysInMonth).getDay();

    if (lastDay === 6) return [];
    
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    
    return Array.from({ length: 6 - lastDay }, (_, index) => ({
      date: index + 1,
      disabled: true,
      month: nextMonth,
      year: nextYear
    }));
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  useEffect(() => {
    setSelectedDate(null);
  }, [currentMonth, currentYear]);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.monthYear}>
        {months[currentMonth]} {currentYear}
      </Text>
      <View style={styles.navigationButtons}>
        <TouchableOpacity onPress={prevMonth}>
          <Text style={styles.navButton}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextMonth}>
          <Text style={styles.navButton}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDays = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return (
      <View style={styles.daysRow}>
        {days.map(day => (
          <Text key={day} style={styles.dayText}>{day}</Text>
        ))}
      </View>
    );
  };

  const getDateStyle = (date, isCurrentMonth = true) => {
    if (!isCurrentMonth) return [styles.date, styles.disabledDate];
    
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const mark = markedDates[dateString];
    
    if (mark) {
      switch (mark) {
        case 'yellow':
          return [styles.date, styles.yellowBg];
        case 'mint':
          return [styles.date, styles.mintBg];
        case 'lightGreen':
          return [styles.date, styles.lightGreenBg];
        case 'coral':
          return [styles.date, styles.coralBg];
        case 'brown':
          return [styles.date, styles.brownBg];
        case 'green':
          return [styles.date, styles.greenBg];
        case 'selected':
          return [styles.date, styles.selectedDate];
        default:
          return [styles.date];
      }
    }
    return [styles.date];
  };

  const renderDates = () => {
    const previousMonthDays = getPreviousMonthDays(currentMonth, currentYear);
    const currentMonthDays = Array.from(
      { length: getDaysInMonth(currentMonth, currentYear) }, 
      (_, i) => ({
        date: i + 1,
        disabled: false,
        month: currentMonth,
        year: currentYear
      })
    );
    const nextMonthDays = getNextMonthDays(currentMonth, currentYear);
    
    const allDays = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

    return (
      <View style={styles.calendar}>
        {allDays.map((day, index) => (
          <TouchableOpacity 
            key={`${day.month}-${day.date}-${index}`}
            style={[
              ...getDateStyle(day.date, !day.disabled),
              day.date === selectedDate && !day.disabled ? styles.selectedDate : null
            ]}
            onPress={() => !day.disabled && setSelectedDate(day.date)}
            disabled={day.disabled}
          >
            <Text style={[
              styles.dateText,
              day.disabled && styles.disabledDateText,
              day.date === 10 && !day.disabled && styles.redText
            ]}>
              {day.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDays()}
      {renderDates()}
      <TouchableOpacity style={styles.journalButton}>
        <Text style={styles.journalButtonText}>
          View This Day Journal →
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: Dimensions.get('window').width - 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthYear: {
    fontSize: 17,
    fontWeight: '600',
  },
  navigationButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  navButton: {
    fontSize: 24,
    color: '#007AFF',
    padding: 5,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayText: {
    width: 40,
    textAlign: 'center',
    color: '#999999',
    fontSize: 16,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  date: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    flex: 0,
    minWidth: 40,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '500',
  },
  disabledDate: {
    opacity: 0.3,
  },
  disabledDateText: {
    color: '#999999',
  },
  redText: {
    color: '#FF0000',
  },
  yellowBg: {
    backgroundColor: '#FFE5A3',
    borderRadius: 20,
  },
  mintBg: {
    backgroundColor: '#B8E5B5',
    borderRadius: 20,
  },
  lightGreenBg: {
    backgroundColor: '#D1FFD0',
    borderRadius: 20,
  },
  coralBg: {
    backgroundColor: '#FFB5B5',
    borderRadius: 20,
  },
  brownBg: {
    backgroundColor: '#D4A5A5',
    borderRadius: 20,
  },
  greenBg: {
    backgroundColor: '#B8E5B5',
    borderRadius: 20,
  },
  selectedDate: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 20,
  },
  journalButton: {
    backgroundColor: '#FFD3B5',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  journalButtonText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Calendar;