package example.com.dto

import kotlinx.serialization.Serializable

@Serializable
data class UserDTO(
    val name: String,
    val email: String,
    val password: String
)
