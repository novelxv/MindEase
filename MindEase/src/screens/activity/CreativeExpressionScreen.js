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
      <LinearGradient
        colors={['#505482', '#FFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={globalStyles.backgroundimage}>
        <HeaderWithBackButton title="Creative Emotional Expression" isWhite={true} onBackPress={handleBackPress} />
        <View style={styles.content}>
        
        
        </View>
        <FooterNavigation />
      </LinearGradient>
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
    padding: 20,
  },
  cardWrapper: {
    marginBottom: 20,
  },
  prevJournalSection: {
    flex: 1,
  },
});

export default CreativeExpressionScreen;


// import React, { useRef, useState } from 'react';
// import { ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import ViewShot from "react-native-view-shot";
// import * as MediaLibrary from 'expo-media-library';
// import { Canvas, Path, useCanvasRef } from '@shopify/react-native-skia';
// import FooterNavigation from '../../components/Footer';
// import HeaderWithBackButton from '../../components/HeaderWithBackButton';
// import { globalStyles } from '../../styles/global';
// import { Pencil, Eraser, Square, Palette, Trash2 } from 'lucide-react-native';

// const CreativeExpressionScreen = ({navigation}) => {
//     const [paths, setPaths] = useState([]);
//     const [currentPath, setCurrentPath] = useState(null);
//     const [tool, setTool] = useState('pencil');
//     const [color, setColor] = useState('#000000');
//     const [strokeWidth, setStrokeWidth] = useState(2);
//     const viewShotRef = useRef();
//     const canvasRef = useCanvasRef();

//     const [hasPermission, setHasPermission] = useState(null);

//     React.useEffect(() => {
//         (async () => {
//             const { status } = await MediaLibrary.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     const onTouchStart = (event) => {
//         const { x, y } = event.nativeEvent;
//         if (tool === 'pencil' || tool === 'eraser') {
//             const newPath = {
//                 path: `M ${x} ${y}`,
//                 color: tool === 'eraser' ? '#FFFFFF' : color,
//                 strokeWidth: tool === 'eraser' ? 20 : strokeWidth,
//             };
//             setCurrentPath(newPath);
//         }
//     };

//     const onTouchMove = (event) => {
//         const { x, y } = event.nativeEvent;
//         if (currentPath && (tool === 'pencil' || tool === 'eraser')) {
//             setCurrentPath({
//                 ...currentPath,
//                 path: `${currentPath.path} L ${x} ${y}`,
//             });
//         }
//     };

//     const onTouchEnd = () => {
//         if (currentPath) {
//             setPaths([...paths, currentPath]);
//             setCurrentPath(null);
//         }
//     };

//     const clearCanvas = () => {
//         setPaths([]);
//     };

//     const handleSave = async () => {
//         if (!hasPermission) {
//             const { status } = await MediaLibrary.requestPermissionsAsync();
//             if (status !== 'granted') {
//                 alert('Sorry, we need camera roll permissions to save the image.');
//                 return;
//             }
//         }

//         try {
//             const uri = await viewShotRef.current.capture();
//             await MediaLibrary.saveToLibraryAsync(uri);
//             alert('Drawing saved to gallery!');
//         } catch (error) {
//             console.error('Error saving drawing:', error);
//             alert('Failed to save drawing.');
//         }
//     };

//     const tools = [
//         { id: 'pencil', icon: Pencil },
//         { id: 'eraser', icon: Eraser },
//         { id: 'shape', icon: Square },
//         { id: 'palette', icon: Palette },
//         { id: 'clear', icon: Trash2, onPress: clearCanvas },
//     ];

//     return (
//         <SafeAreaView style={globalStyles.container}>
//             <LinearGradient
//                 colors={['#505482', '#FFF']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 0, y: 1 }}
//                 style={globalStyles.backgroundimage}
//             >
//                 <HeaderWithBackButton 
//                     title="Creative Emotional Expression" 
//                     isWhite={true} 
//                     onBackPress={() => navigation.navigate('Activity')} 
//                 />

//                 <ViewShot
//                     ref={viewShotRef}
//                     options={{ format: "png", quality: 0.9 }}
//                     style={styles.canvasContainer}
//                 >
//                     <View style={styles.canvasWrapper}>
//                         <Canvas
//                             style={styles.canvas}
//                             onTouch={onTouchStart}
//                             onTouchMove={onTouchMove}
//                             onTouchEnd={onTouchEnd}
//                         >
//                             {paths.map((path, index) => (
//                                 <Path
//                                     key={index}
//                                     path={path.path}
//                                     color={path.color}
//                                     style="stroke"
//                                     strokeWidth={path.strokeWidth}
//                                 />
//                             ))}
//                             {currentPath && (
//                                 <Path
//                                     path={currentPath.path}
//                                     color={currentPath.color}
//                                     style="stroke"
//                                     strokeWidth={currentPath.strokeWidth}
//                                 />
//                             )}
//                         </Canvas>
//                     </View>
//                 </ViewShot>

//                 <View style={styles.toolbarContainer}>
//                     <View style={styles.toolbar}>
//                         {tools.map((item) => (
//                             <TouchableOpacity
//                                 key={item.id}
//                                 style={[
//                                     styles.toolButton,
//                                     tool === item.id && styles.toolButtonActive
//                                 ]}
//                                 onPress={() => item.onPress ? item.onPress() : setTool(item.id)}
//                             >
//                                 <item.icon 
//                                     size={24} 
//                                     color={tool === item.id ? '#505482' : '#666'} 
//                                 />
//                             </TouchableOpacity>
//                         ))}
//                     </View>

//                     <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//                         <Text style={styles.saveButtonText}>Save</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <FooterNavigation />
//             </LinearGradient>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     canvasContainer: {
//         flex: 1,
//         margin: 15,
//     },
//     canvasWrapper: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 20,
//         overflow: 'hidden',
//         flex: 1,
//     },
//     canvas: {
//         flex: 1,
//     },
//     toolbarContainer: {
//         padding: 15,
//     },
//     toolbar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         backgroundColor: '#FFFFFF',
//         borderRadius: 30,
//         padding: 10,
//         marginBottom: 15,
//     },
//     toolButton: {
//         width: 44,
//         height: 44,
//         borderRadius: 22,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5F5F5',
//     },
//     toolButtonActive: {
//         backgroundColor: '#E8E9F3',
//     },
//     saveButton: {
//         backgroundColor: '#505482',
//         borderRadius: 30,
//         padding: 15,
//         alignItems: 'center',
//     },
//     saveButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: '600',
//     },
// });

// export default CreativeExpressionScreen;

