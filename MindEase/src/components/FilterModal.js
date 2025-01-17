import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'lucide-react-native';

const FilterModal = ({ visible, onClose, onSelectRange }) => {
  const dateRanges = [
    { title: 'This Week', date: 'Dec 16 - 22' },
    { title: 'Last Week', date: 'Dec 8 - 15' },
    { title: 'This Month', date: 'Dec 1 - 22' },
    { title: 'Last Month', date: 'Nov 1 - 30' },
    { title: 'Custom Range', date: '' },
  ];

  if (!visible) return null;

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Sort by Date</Text>
        </View>

        {dateRanges.map((range, index) => (
          <TouchableOpacity
            key={index}
            style={styles.rangeItem}
            onPress={() => onSelectRange(range.title)}
          >
            <View style={styles.rangeContent}>
              <Calendar size={24} color="#333" />
              <View style={styles.rangeText}>
                <Text style={styles.rangeTitle}>{range.title}</Text>
                {range.date && <Text style={styles.rangeDate}>{range.date}</Text>}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 400,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  closeIcon: {
    fontSize: 24,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  rangeItem: {
    paddingVertical: 15,
  },
  rangeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rangeText: {
    marginLeft: 15,
  },
  rangeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  rangeDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default FilterModal;