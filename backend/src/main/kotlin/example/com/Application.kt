package example.com

import com.example.plugins.configureSerialization
import example.com.auth.authRoutes
import example.com.repository.PostgresEmotionRepository
import example.com.plugins.*
import example.com.repository.UserRepository
import example.com.repository.UserRepositoryImpl
import example.com.security.configSecurity
import example.com.service.UserServiceImpl
import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    val emotionRepository = PostgresEmotionRepository()
    val service = UserServiceImpl()
    val userRepository = UserRepositoryImpl(service)

    configSecurity()
    configureSerialization(emotionRepository)
    configureDatabases()
    configureRouting()
    authRoutes(userRepository)
    initDB()
}
