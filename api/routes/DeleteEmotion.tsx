import { AppError } from "@/utils/AppError";
import { api } from "../api";

export async function DeleteEmotion(id: Number): Promise<boolean> {
 
    return (await api.delete(`/emotions/${id.toString()}`)).data
}