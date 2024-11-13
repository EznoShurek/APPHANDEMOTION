import {EmotionModel} from "@/model/EmotionModel";
import React, {useCallback} from "react";
import {useState} from "react";
import {api} from "../api";
import {AppError} from "@/utils/AppError";
import {Button, FlatList, RefreshControl, View} from "react-native";
import ItemEmotion from "@/components/EmotionItem";
import EditEmotion from "./EditEmotion";
import {Skeleton} from "@/components/Skeleton";
import {ThemedText} from "@/components/ThemedText";
import {useFocusEffect} from "expo-router";

export function AllEmotions() {
    const [emotion, setEmotion] = useState<EmotionModel[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [emotionEdit, setEmotionEdit] = useState<EmotionModel | null>(null)
    const [visible, setVisible] = useState(false)

    async function fetchEmotion() {
        try {
            setIsLoading(true)
            const {data} = await api.get("/emotions")
            setEmotion([])
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

    const onRefresh = () => {
        setTimeout(() => {
            setIsLoading(true)
            fetchEmotion()
        }, 2000);
    }

    // const MyScreen = () => {
        useFocusEffect(
            useCallback(() => {
                return () => {
                    fetchEmotion()
                };
            }, [])
        );
    // }

        return (
            <View>
                {
                    isLoading ?
                        (<View className="justify-center items-center">
                            <Skeleton className="w-80 h-56 mt-10 bg-gray-300"/>
                            <Skeleton className="w-80 h-56 mt-10 bg-gray-300"/>
                        </View>) : (
                            emotion.length > 0 ?

                                (<FlatList
                                    data={emotion}
                                    scrollEnabled={false}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={isLoading}
                                            onRefresh={onRefresh}
                                            colors={["gray"]}
                                            progressBackgroundColor={"black"}
                                        />
                                    }
                                    renderItem={item =>
                                        <ItemEmotion
                                            itemInfo={item.item}
                                            onSetLoading={(it) => {
                                                setIsLoading(it)
                                            }}
                                            onDelete={() => fetchEmotion()}
                                            setEdit={(editItem) => {
                                                setEmotionEdit(editItem)
                                                setVisible(true)
                                            }}
                                        />
                                    }/>) : (
                                    <View className="justify-center items-center p-6">
                                        <ThemedText className={"m-10"}>
                                            Nenhuma emoção cadastrada, pressione o botão abaixo para recarregar a pagina
                                        </ThemedText>
                                        <Button title={"Recarregar"} onPress={() => fetchEmotion()}/>
                                    </View>
                                )
                        )
                }

                {emotionEdit != null &&
                    <EditEmotion
                        visible={visible}
                        emotion={emotionEdit!}
                        callBackSave={() => {
                            setEmotionEdit(null)
                            fetchEmotion()
                            setVisible(false)
                        }}
                    />
                }
            </View>
        )
    }

