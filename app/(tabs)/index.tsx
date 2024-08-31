import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image style={styles.reactLogo} />}>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem-vindo(a)!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Como você está se sentindo hoje?</ThemedText>
        
        {/* botoes com icons de caarinha feliz, neutra e triste */}
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 100,           // Altura da caixa de texto
    padding: 10,           // Espaçamento interno
    borderWidth: 2,        // Espessura da borda
    borderColor: '#000',   // Cor da borda (preto)
    borderRadius: 8,       // Bordas arredondadas
    fontSize: 16,          // Tamanho da fonte
    textAlignVertical: 'top', // Alinha o texto no topo ao digitar
    backgroundColor: '#fff', // Cor de fundo da caixa de texto (branco) < apoio chatgpt
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
    backgroundColor: '#1D3D47', // funçao que indica qual botao está selecionado através da cor
  },
});
