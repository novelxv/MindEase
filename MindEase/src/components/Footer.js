import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const FooterNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navItems = [
    { name: 'Chat', icon: require('../assets/footer/chat-icon.png'), path: 'Chat' },
    { name: 'Journal', icon: require('../assets/footer/journal-icon.png'), path: 'Journal' },
    { name: 'Home', icon: require('../assets/footer/home-icon.png'), path: 'Home' },
    { name: 'Activity', icon: require('../assets/footer/activity-icon.png'), path: 'Activity' },
    { name: 'Article', icon: require('../assets/footer/article-icon.png'), path: 'Article' }
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = route.name === item.path;
        
        return (
          <TouchableOpacity
            key={item.name}
            style={[styles.tab, isActive]}
            onPress={() => navigation.navigate(item.path)}
          >
            <View style={[styles.iconContainer, isActive && styles.activeTab]}>
              <Image
                source={item.icon}
                style={[
                  styles.icon,
                  isActive && styles.activeIcon,
                ]}
              />
            </View>
            <Text style={[
              styles.label,
              isActive && styles.activeLabel
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
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
    justifyContent: 'center',

  },
  activeTab: {
    backgroundColor: '#E1EEF9',
  },
  icon: {
    width: 18,
    height: 18,
    marginBottom: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40, 
    height: 25, 
    borderRadius: 20, 
  },
  activeIcon: {
    tintColor: '#555454',
  },
  label: {
    fontSize: 12,
    color: '#AFAFAF',
  },
  activeLabel: {
    color: '#555454',
  },
});

export default FooterNavigation;
