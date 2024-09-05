package example.com.Repository

import example.com.model.Emotion
import example.com.model.Intensity

interface EmotionRepository {
    suspend fun allEmotions(): List<Emotion>
    suspend fun emotionsByIntensity(intensity: Intensity): List<Emotion>
    suspend fun emotionByName(name: String): Emotion?
    suspend fun addEmotion(emotion: Emotion)
    suspend fun removeEmotion(name: String): Boolean
    suspend fun editEmotion(name: String): Boolean
}