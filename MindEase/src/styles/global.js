import { useFonts } from 'expo-font';
import {StyleSheet, Dimensions} from 'react-native';
const maxWidth = 375;
const { width, height } = Dimensions.get('window');
const globalStyles = StyleSheet.create({
  header: {
    fontFamily: 'Lexend-Regular',
    fontWeight: "bold",
    textAlign: "left",
    color: "#333",
    fontSize: 24,
  },
  content: {
    fontFamily: 'Lexend-Regular',
    fontWeight: "normal",
    color: "#333",
    fontSize: 16,
  },
  subheader: {
    fontFamily: 'Lexend-Regular',
    fontWeight: "bold",
    color: "#333",
    fontSize: 18,
  },
  backgroundimage: {
    flex: 1,
    width: '100%',
    maxWidth: maxWidth,
    height: '100%',
  },
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

const useGlobalFonts = () => {
  const [fontsLoaded] = useFonts({
    'Lexend-Regular': require('../assets/fonts/Lexend.ttf'),
  });

  return fontsLoaded;
};

export { globalStyles, useGlobalFonts };
