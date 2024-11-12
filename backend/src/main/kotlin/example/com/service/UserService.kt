package example.com.service

import example.com.db.UserDAO
import example.com.dto.UserDTO

interface UserService {
    suspend fun registerUser(userDTO: UserDTO): UserDAO
    suspend fun findUserByEmail(email: String): UserDAO?
}