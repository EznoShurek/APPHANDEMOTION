import EmotionCarrousel from "@/components/emotionCarrousel"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useState } from "react"
import { Modal, TextInput, StyleSheet, Image, Button, View, TouchableOpacity } from "react-native"
import { api } from "../api"
import { EmotionModel } from "@/model/EmotionModel"
import { Entypo } from "@expo/vector-icons"

async function SendEditEmotion(emotion: EmotionModel): Promise<Boolean> {
    return (await api.put("/emotions", emotion)).status == 200
}

export default function EditEmotion(props: {emotion: EmotionModel, visible: boolean, callBackSave: any}) {
    const [text, setText] = useState(props.emotion.description)
    const [selectedEmotion, setSelectedEmotion] = useState(props.emotion.name)

    return(
        <Modal visible={props.visible}>
            <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image style={styles.reactLogo} />}>
    
      <ThemedView style={styles.stepContainer}>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <TouchableOpacity onPress={() => props.callBackSave()}>
            <Entypo name="back" size={32} color={'white'} style={{paddingHorizontal: 12}}/>
          </TouchableOpacity>
          <ThemedText type="subtitle">Como você está se sentindo hoje?</ThemedText>
        </View>
        
        <EmotionCarrousel
          selectedEmotion={selectedEmotion}
          onEmotionSelected={(name) => setSelectedEmotion(name)}
        />

        <TextInput
          style={styles.input}
          placeholder="Tenho me sentido assim porque..."
          placeholderTextColor="#999"
          multiline
          value={text}
          onChangeText={setText}
        />

        <Button
            title="Editar"
            onPress={ async () =>{
              if(
                await SendEditEmotion({
                  "id": props.emotion.id,
                  "name": selectedEmotion,
                  "description": text,
                  "intensity": props.emotion.intensity,
                  "createdAt": props.emotion.createdAt
                })){
                  props.callBackSave()
                }
            }}
        />
      </ThemedView>
    </ParallaxScrollView>
        </Modal>
    )
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