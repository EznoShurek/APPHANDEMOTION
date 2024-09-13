import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { EmotionModel } from "@/model/EmotionModel";
import { useState } from "react";

export default function ItemEmotion(props: {itemInfo: EmotionModel}) {
    const [expanded, setExpanded] = useState(false)
    let arrow
    if(expanded){
        arrow = <Entypo name="arrow-bold-down" size={24} color={'white'}/>
    } else {
        arrow = <Entypo name="arrow-bold-up" size={24} color={'white'}/>
    }

    return(
        <><ThemedView style={styles.emotionContainer}>
            <ThemedView style={styles.emotionItemContainer}>
                <TouchableOpacity style={styles.expandableText} onPress={() => setExpanded(!expanded)}>
                    {arrow}
                    <ThemedText style={styles.emotionText}>{props.itemInfo.name}</ThemedText>
                </TouchableOpacity>
                <View style={styles.emotionOptionGroup}>
                    <TouchableOpacity
                        style={styles.emotionOption}
                        onPress={() => alert("deletar")}
                    >
                        <Entypo name="trash" size={32} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.emotionOption}
                        onPress={() => alert("editar")}
                    >
                        <Entypo name='pencil' size={32} color={'white'} />
                    </TouchableOpacity>
                </View>
            </ThemedView>
            {expanded && (
                <Text>apdojfapsofja</Text>
            )}
        </ThemedView>
        <View style={{height: 10}}/>
        </>
    )
} 


const styles = StyleSheet.create({
    expandableText: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    emotionItemContainer: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 6,
        backgroundColor: 'transparent',
    },
    emotionContainer: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 12
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