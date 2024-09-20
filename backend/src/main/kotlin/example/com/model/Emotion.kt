package example.com.model

import kotlinx.serialization.Serializable

enum class Intensity {
    ALTA, MEDIA, BAIXA
}

@Serializable
data class Emotion(
    val id: Int,
    val name: String,
    val description: String,
    val intensity: Intensity,
    val createdAt: String
)