package example.com.repository

import example.com.dto.EmotionDTO
import example.com.model.Emotion
import example.com.model.Intensity

interface EmotionRepository {
    suspend fun allEmotions(): List<Emotion>
    suspend fun emotionsByIntensity(intensity: Intensity): List<Emotion>
    suspend fun emotionByName(name: String): Emotion?
    suspend fun addEmotion(emotion: EmotionDTO)
    suspend fun removeEmotion(id: Int): Boolean
    suspend fun editEmotion(emotion: Emotion): Boolean
}