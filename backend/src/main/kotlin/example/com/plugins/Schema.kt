package example.com.plugins

import example.com.db.EmotionTable
import example.com.db.UserTable
import io.ktor.server.application.*
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.initDB() {
    transaction {
        SchemaUtils.create(EmotionTable)
        SchemaUtils.create(UserTable)
    }
}