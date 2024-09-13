import { Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";


export default function EmotionCarrousel(props: 
    { selectedEmotion: string | null; onEmotionSelected: ((name: string) => void) }) {
        return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={[
                styles.emotionButton,
                props.selectedEmotion === 'feliz' && styles.selectedButton,
            ]}
            onPress={() => props.onEmotionSelected('feliz')}
            >
            <Entypo name="emoji-happy" size={24} color={props.selectedEmotion === 'feliz' ? '#fff' : '#000'} />
            </TouchableOpacity>

            <TouchableOpacity
            style={[
                styles.emotionButton,
                props.selectedEmotion === 'neutro' && styles.selectedButton,
            ]}
            onPress={() => props.onEmotionSelected('neutro')}
            >
            <Entypo name="emoji-neutral" size={24} color={props.selectedEmotion === 'neutro' ? '#fff' : '#000'} />
            </TouchableOpacity>

            <TouchableOpacity
            style={[
                styles.emotionButton,
                props.selectedEmotion === 'triste' && styles.selectedButton,
            ]}
            onPress={() => props.onEmotionSelected('triste')}
            >
            <Entypo name="emoji-sad" size={24} color={props.selectedEmotion === 'triste' ? '#fff' : '#000'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
      }
})