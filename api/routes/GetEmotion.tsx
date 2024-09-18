import { EmotionModel } from "@/model/EmotionModel";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { formatDate } from "@/utils/formatDate";
import { AppError } from "@/utils/AppError";
import { FlatList, View } from "react-native";
import ItemEmotion from "@/components/EmotionItem";
import { useFocusEffect } from "expo-router";

export function AllEmotions() {
    const [emotion, setEmotion] = useState<EmotionModel[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchEmotion() {
        try {
            setIsLoading(true)
            const { data } = await api.get("/emotions")
            console.log(data)
            const emotions = data.map((emotion: EmotionModel) => ({
                ...emotion,
            }));

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
    }, [])
    

    return (
        <View>
            <FlatList
            data={emotion}
            scrollEnabled={false}
            renderItem={item => 
                <ItemEmotion 
                    itemInfo={item.item}
                    onSetLoading = {(it) => {setIsLoading(it)}}
                    onDelete={() => fetchEmotion()}
                />
            }/>
        </View>
    )
}
