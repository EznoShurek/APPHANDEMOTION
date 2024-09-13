import React, { useState } from 'react';
import { Alert, Image, StyleSheet, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import PostEmotion from '@/api/routes/PostEmotion';
import EmotionCarrousel from '@/components/emotionCarrousel';
import DailyForm from '../dailyForm';

export default function HomeScreen() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [description, setDescription] = useState("")
  const [showDailyForm, setShowDailyForm] = useState(false)

  function moreInfo() {
    Alert.alert(
      "Emoção salva", 
      "Deseja falar mais sobre o seu dia?",
      [
        {
          text: "Não",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => setShowDailyForm(true),
          style: "default"
        }
      ]
  );
  }

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
        <EmotionCarrousel
          selectedEmotion={selectedEmotion}
          onEmotionSelected={(name) => setSelectedEmotion(name)}
        />

        <TextInput
          style={styles.input}
          placeholder="Tenho me sentido assim porque..."
          placeholderTextColor="#999"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <PostEmotion
          name = {selectedEmotion}
          description = {description}
          intensity = "ALTA"
          onAddEmotion={() => {
            moreInfo
            setDescription("")
          }}
        />
      </ThemedView>
      <DailyForm
        visible={showDailyForm}
        callBack={(bool) => setShowDailyForm(bool)}
      />
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
