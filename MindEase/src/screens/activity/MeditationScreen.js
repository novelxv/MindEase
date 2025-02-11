import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import FooterNavigation from '../../components/Footer';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import { globalStyles } from '../../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

const stories = [
  {
    id: 1,
    title: 'Welcome to Your Meditation Journey!',
    description: 'Inhale deeply… hold… exhale slowly… Focus on your breath as it flows naturally',
    image: require('../../assets/activities/sleep_stories/Stories1.png'),
    audio: require('../../assets/activities/sleep_stories/meditation.mp3'),
  },
];

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const MeditationScreen = ({navigation}) => {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [position, setPosition] = useState(0);
    const [selectedStory, setSelectedStory] = useState(stories[0]);
    const positionTimer = useRef(null);

    const [duration, setDuration] = useState(0);

    async function loadAudio() {
        try {
            const { sound } = await Audio.Sound.createAsync(
                selectedStory.audio,
                {},
                (status) => {
                    if (status.isLoaded) {
                        setPosition(status.positionMillis / 1000);
                        setDuration(status.durationMillis / 1000);
                    }
                }
            );
            const status = await sound.getStatusAsync();
            setDuration(status.durationMillis / 1000);
            setSound(sound);
        } catch (error) {
            console.error('Error loading audio:', error);
        }
    }

    React.useEffect(() => {
        loadAudio();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
            if (positionTimer.current) {
                clearInterval(positionTimer.current);
            }
        };
    }, [selectedStory]);

    const handlePlayPause = async () => {
      if (!sound) return;
    
      if (isPlaying) {
        await sound.pauseAsync();
        clearInterval(positionTimer.current);
      } else {
        await sound.playAsync();
        positionTimer.current = setInterval(async () => {
          const status = await sound.getStatusAsync();
          setPosition(status.positionMillis / 1000);
    
          if (status.didJustFinish) {
            clearInterval(positionTimer.current);
            setIsPlaying(false);
          }
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    };
    

    const handleSliderChange = async (value) => {
        if (sound) {
            await sound.setPositionAsync(value * 1000);
            setPosition(value);
        }
    };

    const handleSkipBack = async () => {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
    
      const currentIndex = stories.findIndex((story) => story.id === selectedStory.id);
      const newIndex = (currentIndex - 1 + stories.length) % stories.length;
      const newStory = stories[newIndex];
    
      setSelectedStory(newStory);
      setIsPlaying(false);
      loadNewStory(newStory);
    };
    
    const handleSkipForward = async () => {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
    
      const currentIndex = stories.findIndex((story) => story.id === selectedStory.id);
      const newIndex = (currentIndex + 1) % stories.length;
      const newStory = stories[newIndex];
    
      setSelectedStory(newStory);
      setIsPlaying(false);
      loadNewStory(newStory);
    };
    
    
    const loadNewStory = async (story) => {
      try {
        setDuration(0);
        const { sound: newSound } = await Audio.Sound.createAsync(
          story.audio,
          {},
          (status) => {
            if (status.isLoaded) {
              setPosition(status.positionMillis / 1000);
              setDuration(status.durationMillis / 1000);
            }
          }
        );
        setSound(newSound);
        setPosition(0);
      } catch (error) {
        console.error('Error loading new story:', error);
      }
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
              title="Meditation Session" 
              isWhite={true} 
              onBackPress={async () => {
                if (sound) {
                    await sound.stopAsync();
                    await sound.unloadAsync();
                    setSound(null);
                }
                navigation.navigate('Activity');
            }} 
          />

          <View style={styles.mainContainer}>
            <View style={styles.imageSection}>
              <Image source={selectedStory.image} style={styles.storyImage} resizeMode="cover" />
            </View>

            <View style={styles.playerContainer}>
                <View style={styles.playerContent}>
                    <Text style={styles.storyTitle}>{selectedStory.title}</Text>
                    <Text style={styles.storyDescription}>{selectedStory.description}</Text>
                    
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{formatTime(position)}</Text>
                        <Text style={styles.timeText}>{formatTime(duration)}</Text>
                    </View>

                    <Slider
                      style={styles.slider}
                      minimumValue={0}
                      maximumValue={duration}
                      value={position}
                      onValueChange={handleSliderChange}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="rgba(75, 74, 74, 0.67)"
                      thumbTintColor="#000000"
                    />

                    <View style={styles.controls}>
                    <TouchableOpacity style={styles.controlButton} onPress={handleSkipBack}>
                      <SkipBack size={24} color="#000000" />
                    </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.playButton} 
                            onPress={handlePlayPause}
                        >
                            {isPlaying ? (
                                <Pause size={32} color="#000000" />
                            ) : (
                                <Play size={32} color="#000000" />
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.controlButton} onPress={handleSkipForward}>
                          <SkipForward size={24} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
          <FooterNavigation />
          </LinearGradient>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
  },
  imageSection: {
      aspectRatio: 1,
      width: '100%',
  },
  storiesContainer: {
      padding: 15,
  },
  storyCard: {
      aspectRatio: 1,
      width: Dimensions.get('window').width - 30,
      borderRadius: 20,
      overflow: 'hidden',
      marginRight: 15,
  },
  selectedCard: {
      borderWidth: 2,
      borderColor: '#FFF',
  },
  storyImage: {
      width: '70%',
      height: '70%',
      margin: "auto",
      borderRadius: 20,
  },
  playerContainer: {
      padding: 15,
      paddingTop: 0,
  },
  playerContent: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 20,
      padding: 20,
      marginTop: 10,
  },
  storyTitle: {
      color: '#000000',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
  },
  storyDescription: {
      color: '#000000',
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.8,
      marginBottom: 15,
  },
  timeContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
  },
  timeText: {
      color: '#000000',
      fontSize: 14,
  },
  slider: {
      width: '100%',
      height: 40,
  },
  controls: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
      marginTop: 10,
  },
  controlButton: {
      padding: 10,
  },
  playButton: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
  },
});

export default MeditationScreen;