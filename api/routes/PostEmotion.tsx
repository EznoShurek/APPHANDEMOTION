import { EmotionModel } from "@/model/EmotionModel";
import axios from "axios";
import { useState } from "react";
import { api } from "../api";
import { View, Text, Button } from "react-native";


export default function PostEmotion(props: { name: string | null; description: string; intensity: string; }) {
    const [isLoading, setIsLoading] = useState(false)

    async function sendEmotion() {
        setIsLoading(true)

        api.post(
            "/emotions",
            props
        ).then( response => {
            console.log(response)
        })
        .catch( error => {
            console.log(error)
        })
        setIsLoading(false)
    }

    return (
        <View>
            <Button
                onPress={sendEmotion}
                title="Salvar Emoção"
            />
        </View>
    )
}