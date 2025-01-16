import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MessageSquare, Book, Home, Leaf, FileText } from 'lucide-react';

const FooterNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navItems = [
    { name: 'Chat', icon: MessageSquare, path: 'Chat' },
    { name: 'Journal', icon: Book, path: 'Journal' },
    { name: 'Home', icon: Home, path: 'Home' },
    { name: 'Activity', icon: Leaf, path: 'Activity' },
    { name: 'Article', icon: FileText, path: 'Article' }
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = route.name === item.path;
        const Icon = item.icon;
        
        return (
          <TouchableOpacity
            key={item.name}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => navigation.navigate(item.path)}
          >
            <Icon
              size={24}
              color={isActive ? "#0066FF" : "#666666"}
              style={styles.icon}
            />
            <Text style={[
              styles.label,
              isActive && styles.activeLabel
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    width: '100%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#E6F0FF',
  },
  icon: {
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#666666',
  },
  activeLabel: {
    color: '#0066FF',
  },
});

export default FooterNavigation;