package example.com.model

import kotlinx.serialization.Serializable

enum class Intensity {
    ALTA, MEDIA, BAIXA
}

@Serializable
data class Emotion(
    val name: String,
    val description: String,
    val intensity: Intensity
)