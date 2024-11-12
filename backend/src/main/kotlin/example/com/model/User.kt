package example.com.model

import kotlinx.serialization.Serializable

@Serializable
data class User(
    val id: Long = 0L,
    val name: String,
    var authToken: String = "",
    val password: String,
    val email: String,
    val createdAt: Long
)
