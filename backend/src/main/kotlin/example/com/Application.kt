package example.com

import com.example.plugins.configureSerialization
import example.com.Repository.FakeTaskRepository
import example.com.Repository.PostgresEmotionRepository
import example.com.plugins.*
import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    val repository = PostgresEmotionRepository()

    configureSerialization(repository)
    configureDatabases()
    configureRouting()
}
