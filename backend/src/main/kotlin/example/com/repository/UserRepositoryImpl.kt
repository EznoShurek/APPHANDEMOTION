package example.com.repository

import example.com.db.UserDAO
import example.com.db.UserTable
import example.com.db.suspendTransaction
import example.com.db.userDAOToModel
import example.com.dto.LoginDTO
import example.com.dto.UserDTO
import example.com.model.User
import example.com.security.JwtConfig
import example.com.security.hash
import example.com.service.UserService
import org.jetbrains.exposed.sql.and

class UserRepositoryImpl(
    private val userService: UserService
): UserRepository {
    override suspend fun registerUser(userDTO: UserDTO): User? {
        if (emailExists(email = userDTO.email))
            return null
        val user = userDAOToModel(userService.registerUser(userDTO))
            .also { it.authToken = JwtConfig.instance.createAccessToken(it.id.toInt()) }
        return user
    }

    override suspend fun loginUser(loginDTO: LoginDTO): String? {
        val user = userService.findUserByEmail(loginDTO.login) ?: return null

        return JwtConfig.instance.createAccessToken(user.id.value)
    }



    private suspend fun emailExists(email: String): Boolean = suspendTransaction {
        !UserDAO
            .find{ UserTable.email eq email}
            .empty()
    }
}