import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { EmotionModel } from "@/model/EmotionModel";

export default function ItemEmotion(dataInfo: EmotionModel) {
    return(
        <ThemedView style={styles.emotionItemContainer}>
            <ThemedText style={styles.emotionText}>{dataInfo.name}</ThemedText>
            <View style={styles.emotionOptionGroup}>
            <TouchableOpacity 
            style={styles.emotionOption}
            onPress={() => alert("deletar")}
            >
                <Entypo name = "trash" size={32} color={'white'}/>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.emotionOption}
            onPress={() => alert("editar")}
            >
                <Entypo name = 'pencil' size={32} color={'white'}/>
            </TouchableOpacity>
            </View>
        </ThemedView>
    )
} 


const styles = StyleSheet.create({
    emotionItemContainer: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 12,
        marginVertical: 6
    },
    emotionText: {
        flex: 1,
        padding: 12
    },
    emotionOptionGroup: {
        flexDirection: 'row',
        paddingVertical: 6
    },
    emotionOption: {
        paddingHorizontal: 6
    }
})