import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Image } from 'react-native';
import { Video } from 'expo-av';
import FooterNavigation from '../../components/Footer';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import { globalStyles } from '../../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import { Play, Pause } from 'lucide-react-native';

const breathingSteps = [
  {
    title: "Prepare Yourself",
    steps: [
      "Find a comfortable seated position.",
      "Relax your shoulders and close your eyes if you feel comfortable."
    ]
  },
  {
    title: "Begin with a Deep Breath",
    steps: [
      "Inhale deeply through your nose for 4 seconds.",
      "Hold your breath for 4 seconds.",
      "Exhale slowly through your mouth for 6 seconds."
    ]
  },
  {
    title: "Follow the Guided Rhythm",
    steps: [
      "Breathe in sync with the dynamic visual or audio cues.",
      "Focus on the rise and fall of the visuals or the calming sound."
    ]
  },
  {
    title: "Relax Your Body",
    steps: []
  }
];

const BreathingScreen = ({navigation}) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [showControls, setShowControls] = useState(true);
    const [isVideoReady, setIsVideoReady] = useState(false);
    
    const handleBackPress = () => {
        navigation.navigate('Activity');
    };

    useEffect(() => {
      let timer;
      if (showControls && status.isPlaying) {
          timer = setTimeout(() => {
              setShowControls(false);
          }, 3000);
      }
      return () => clearTimeout(timer);
    }, [showControls, status.isPlaying]);

    const togglePlayPause = async () => {
      setShowControls(true);
      if (status.isPlaying) {
          await video.current.pauseAsync();
      } else {
          await video.current.playAsync();
      }
    };

    const handleVideoPress = () => {
      setShowControls(prev => !prev);
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <LinearGradient
                colors={['#505482', '#FFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={globalStyles.backgroundimage}
            >
                <HeaderWithBackButton 
                  title="Guided Breathing & Relaxation Sessions" 
                  onBackPress={handleBackPress} 
                />

                <ScrollView 
                    contentContainerStyle={globalStyles.scrollContent} 
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableOpacity 
                        style={styles.videoCard}
                        onPress={handleVideoPress}
                        activeOpacity={1}
                    >
                        {!isVideoReady && (
                            <Image
                                source={require('../../assets/articles/sleep.png')}
                                style={styles.thumbnail}
                            />
                        )}
                        <Video
                            ref={video}
                            style={styles.video}
                            source={require('../../assets/TestVideo.mp4')}
                            useNativeControls={false}
                            resizeMode="cover"
                            isLooping
                            onPlaybackStatusUpdate={setStatus}
                            onLoad={() => setIsVideoReady(true)}
                        />
                        {showControls && (
                            <TouchableOpacity 
                                style={[ 
                                    styles.playButton, 
                                    status.isPlaying && styles.playButtonPlaying 
                                ]} 
                                onPress={togglePlayPause}
                            >
                                {status.isPlaying ? (
                                    <Pause size={40} color="#fff" />
                                ) : (
                                    <Play size={40} color="#fff" fill="#fff" />
                                )}
                            </TouchableOpacity>
                        )}
                    </TouchableOpacity>
                    <View style={styles.instructionsCard}>
                        {breathingSteps.map((section, index) => (
                            <View key={index} style={styles.section}>
                                <Text style={styles.sectionTitle}>
                                    {index + 1}. {section.title}
                                </Text>
                                {section.steps.map((step, stepIndex) => (
                                    <View key={stepIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.stepText}>{step}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <FooterNavigation />
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    videoCard: {
        marginBottom: 15,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        position: 'relative',
    },
    thumbnail: {
      position: 'absolute',
      width: '100%',
      height: 200,
      borderRadius: 12,
    },
    video: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -32 }, { translateY: -32 }],
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'rgba(255, 69, 99, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButtonPlaying: {
        backgroundColor: 'rgba(255, 69, 99, 0.8)',
    },
    instructionsCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    bulletPoint: {
        flexDirection: 'row',
        paddingLeft: 8,
        marginBottom: 4,
    },
    bullet: {
        marginRight: 8,
        color: '#666',
    },
    stepText: {
        flex: 1,
        color: '#666',
        lineHeight: 20,
    },
});

export default BreathingScreen;
