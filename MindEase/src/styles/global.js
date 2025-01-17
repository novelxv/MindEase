import { useFonts } from 'expo-font';
import {StyleSheet, Dimensions} from 'react-native';
const maxWidth = 375;
const { width, height } = Dimensions.get('window');
const globalStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    fontFamily: 'Lexend-Regular',
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    color: "#333",
    fontSize: 24,
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
