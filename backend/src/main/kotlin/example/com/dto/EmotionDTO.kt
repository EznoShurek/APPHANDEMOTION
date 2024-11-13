package example.com.dto

import kotlinx.serialization.Serializable

@Serializable
data class EmotionDTO(
    val name: String,
    val description: String,
    val intensity: String
)
