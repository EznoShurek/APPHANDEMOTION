package example.com.dto

import kotlinx.serialization.Serializable

@Serializable
data class LoginDTO(
    val login: String,
    val password: String
)
