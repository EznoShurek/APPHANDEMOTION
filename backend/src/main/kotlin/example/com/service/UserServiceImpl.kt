package example.com.service

import example.com.db.UserDAO
import example.com.db.UserTable
import example.com.db.suspendTransaction
import example.com.db.userDAOToModel
import example.com.dto.UserDTO
import example.com.security.JwtConfig
import example.com.security.hash

class UserServiceImpl: UserService {
    override suspend fun registerUser(userDTO: UserDTO): UserDAO = suspendTransaction{
        UserDAO.new {
            name = userDTO.name
            email = userDTO.email
            password = hash(userDTO.password)
            createdAt = System.currentTimeMillis()
        }
    }

    override suspend fun findUserByEmail(email: String): UserDAO? = suspendTransaction {
        UserDAO
            .find{ UserTable.email eq email }
            .firstOrNull()
    }
}