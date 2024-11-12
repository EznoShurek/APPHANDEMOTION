package example.com.repository

import example.com.dto.LoginDTO
import example.com.dto.UserDTO
import example.com.model.User

interface UserRepository {
    suspend fun registerUser(userDTO: UserDTO): User?
    suspend fun loginUser(loginDTO: LoginDTO): String?
}