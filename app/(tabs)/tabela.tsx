import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const phrases = [
    "Você é incrível!",
    "O sucesso é a soma de pequenos esforços!",
    "Acredite no poder dos seus sonhos!",
    "Os desafios são oportunidades disfarçadas!","conheci o meu amigo que desenvolveu esse projeto comigo no videogame! Amizades valem ouro!",
    "eu, Enzo, desenvolvedor desse app, gostaria de te conhecer, sabia?"
  ];

  const [currentPhrase, setCurrentPhrase] = useState('');

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
        <ThemedText type="title">Você importa!</ThemedText>
      </ThemedView>
      <ThemedText>
        A chance de você estar aqui é incrivelmente pequena, e isso faz de sua existência algo verdadeiramente precioso. Mesmo nas dificuldades e nas oscilações emocionais, lembre-se: você tem um valor imenso e uma contribuição única para oferecer ao mundo. Sua presença faz toda a diferença.
      </ThemedText>
      <Collapsible title="Ajuda?">
        <ThemedText>
          Esse aplicativo é apenas uma forma de auxiliar e se você sente que precisa de uma ajuda mais ampla então consulte um<ThemedText type="defaultSemiBold"> profissional da saúde.</ThemedText>{' '}
          Site e número do <ThemedText type="defaultSemiBold"> CVV (centro de valorização da vida) </ThemedText> logo abaixo.
        </ThemedText>
        <ExternalLink href="https://cvv.org.br/">
          <ThemedText type="link">Centro de Valorização da Vida</ThemedText> Sua vida importa.
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
