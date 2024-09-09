import { EmotionModel } from "@/model/EmotionModel";
import React from "react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { formatDate } from "@/utils/formatDate";
import { AppError } from "@/utils/AppError";
import { FlatList, View } from "react-native";
import ItemEmotion from "@/components/EmotionItem";

export function AllEmotions() {
    const [emotion, setEmotion] = useState<EmotionModel[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchEmotion() {
        try {
            const { data } = await api.get("/emotions")
            const emotions = data.map((emotion: EmotionModel) => ({
                ...emotion,
                created_at: formatDate(emotion.created_at)
            }));

            console.log(emotions);
            setEmotion(emotions);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const message = isAppError ? error.message : "Não foi possivel encontrar os dados do usuario"
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(
        () => {
            fetchEmotion()
        }, []
    );

    return (
        <FlatList
        data={emotion}
        renderItem={({item}) => 
            <ItemEmotion 
                {...item}
            />
        }/>
    )
}
