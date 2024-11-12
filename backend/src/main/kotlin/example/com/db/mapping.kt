package example.com.db

import example.com.model.Emotion
import example.com.model.Intensity
import example.com.model.User
import kotlinx.coroutines.Dispatchers
import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Transaction
import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction

object EmotionTable: IntIdTable("emotions") {
    val name = varchar("name", 50)
    val description = varchar("description", 200)
    val intensity = varchar("intensity", 10)
    val createdAt = varchar("created_at", 100)
}


object UserTable: IntIdTable("users") {
    val name = text("name")
    val email = text("email")
    val password = text("password")
    val createdAt = long("created_at")
}

class EmotionDAO(id: EntityID<Int>): IntEntity(id) {
    companion object : IntEntityClass<EmotionDAO>(EmotionTable)

    var name by EmotionTable.name
    var description by EmotionTable.description
    var intensity by EmotionTable.intensity
    var createdAt by EmotionTable.createdAt
}

class UserDAO(id: EntityID<Int>): IntEntity(id) {
    companion object: IntEntityClass<UserDAO>(UserTable)

    var name by UserTable.name
    var email by UserTable.email
    var password by UserTable.password
    var createdAt by UserTable.createdAt
}

suspend fun <T> suspendTransaction(block: Transaction.() -> T): T =
    newSuspendedTransaction(Dispatchers.IO, statement = block)


fun emotionDAOToModel(dao: EmotionDAO) = Emotion(
    dao.id.value,
    dao.name,
    dao.description,
    Intensity.valueOf(dao.intensity),
    dao.createdAt
)

fun userDAOToModel(dao: UserDAO) = User(
    name = dao.name,
    password = dao.password,
    email = dao.email,
    createdAt = dao.createdAt
)
