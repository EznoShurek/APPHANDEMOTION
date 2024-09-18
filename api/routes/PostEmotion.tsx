import { useState } from "react";
import { api } from "../api";
import { View, Text, Button } from "react-native";


export default function PostEmotion(props: { name: string | null; description: string; intensity: string; onAddEmotion: any}) {
    const [isLoading, setIsLoading] = useState(false)

    async function sendEmotion() {
        setIsLoading(true)

        api.post(
            "/emotions",
            {
                "id": 0,
                "name": props.name, 
                "description": props.description, 
                "intensity": props.intensity,
                "createdAt": "0"
            },
        ).then( response => {
            props.onAddEmotion()
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