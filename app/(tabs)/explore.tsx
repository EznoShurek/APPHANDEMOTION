import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput, View, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [currentPhrase, setCurrentPhrase] = useState('');

  const phrases = [
    "Você é incrível!",
    "Acredite em si mesmo!",
    "Continue firme, você consegue!",
    "Cada dia é uma nova chance!",
    "eu, Enzo, desenvolvedor desse app, gostaria de te conhecer, sabia?"
  ];

  useEffect(() => {
    const updatePhrase = () => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]);
    };

    updatePhrase();
    const intervalId = setInterval(updatePhrase, 15000);
    return () => clearInterval(intervalId);
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre você!</ThemedText>
      </ThemedView>

      <ThemedText>Fale mais sobre você, se sinta à vontade e abra seu coração!</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="As minhas noites de sono têm sido..."
        placeholderTextColor="#999"
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Como você se imagina daqui a um mês?"
        placeholderTextColor="#999"
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="A maior alegria da minha semana foi..."
        placeholderTextColor="#999"
        multiline
      />
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 10, 
  },
  input: {
    height: 100,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    marginTop: 12,
  },
  phraseText: {
    fontSize: 18,
    color: 'white', 
    marginLeft: 10, 
  },
  phraseContainer: {
    backgroundColor: '#1D3D47', 
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
  },
});
