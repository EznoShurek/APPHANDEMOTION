import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { AllEmotions } from '@/api/routes/GetEmotion';

export default function TabTwoScreen() {
  const [currentPhrase, setCurrentPhrase] = useState('');

  const phrases = [
    "Você é incrível!",
    "Acredite em si mesmo!",
    "Continue firme, você consegue!",
    "Cada dia é uma nova chance!",
    "Eu, Enzo, desenvolvedor desse app, gostaria de te conhecer, sabia?"
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setCurrentPhrase(phrases[randomIndex]);
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.phraseContainer}>
          <Text style={styles.phraseText}>{currentPhrase}</Text>
        </View>
      }
    >
      <ThemedText style={styles.bodyTitle}>Linha do tempo de emoções</ThemedText>
      <AllEmotions />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  phraseContainer: {
    backgroundColor: '#1D3D47',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
  },
  phraseText: {
    fontSize: 18,
    color: 'white', // Mantenha a cor do texto
  },
  bodyTitle: {
    alignSelf: 'center',
    padding: 6,
    fontSize: 18,
  },
});
