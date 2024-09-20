import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'; // Importando Text
import { Entypo } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import PostEmotion from '@/api/routes/PostEmotion';

export default function HomeScreen() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState('');

  const phrases = [
    "Às vezes, a vida nos ensina a dançar na tempestade!",
    "Diga para aqueles, o quanto você os ama!",
    "O amor-próprio é o primeiro passo para a felicidade!",
    "A vida é uma montanha-russa; abrace as emoções em cada curva",
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
        <ThemedText type="title">Seja bem-vindo(a)!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Como você está se sentindo hoje?</ThemedText>

        {/* Botões com ícones de carinha feliz, neutra e triste */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.emotionButton,
              selectedEmotion === 'feliz' && styles.selectedButton,
            ]}
            onPress={() => setSelectedEmotion('feliz')}
          >
            <Entypo name="emoji-happy" size={24} color={selectedEmotion === 'feliz' ? '#fff' : '#000'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.emotionButton,
              selectedEmotion === 'neutro' && styles.selectedButton,
            ]}
            onPress={() => setSelectedEmotion('neutro')}
          >
            <Entypo name="emoji-neutral" size={24} color={selectedEmotion === 'neutro' ? '#fff' : '#000'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.emotionButton,
              selectedEmotion === 'triste' && styles.selectedButton,
            ]}
            onPress={() => setSelectedEmotion('triste')}
          >
            <Entypo name="emoji-sad" size={24} color={selectedEmotion === 'triste' ? '#fff' : '#000'} />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Tenho me sentido assim porque..."
          placeholderTextColor="#999"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <PostEmotion
          name={selectedEmotion}
          description={description}
          intensity="ALTA"
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
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
    color: 'white', 
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  emotionButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#1D3D47', 
  },
});
