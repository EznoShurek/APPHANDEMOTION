package example.com.Repository

import example.com.db.EmotionDAO
import example.com.db.EmotionTable
import example.com.db.daoToModel
import example.com.db.suspendTransaction
import example.com.model.Emotion
import example.com.model.Intensity
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.update
import java.time.LocalDate

class PostgresEmotionRepository : EmotionRepository {
    override suspend fun allEmotions(): List<Emotion> = suspendTransaction {
        EmotionDAO.all().map(::daoToModel)
    }

    override suspend fun emotionsByIntensity(intensity: Intensity): List<Emotion> = suspendTransaction {
        EmotionDAO
            .find { (EmotionTable.intensity eq intensity.toString()) }
            .map(::daoToModel)
    }

    override suspend fun emotionByName(name: String): Emotion? = suspendTransaction{
        EmotionDAO
            .find{ (EmotionTable.name eq name) }
            .limit(1)
            .map(::daoToModel)
            .firstOrNull()
    }

    override suspend fun addEmotion(emotion: Emotion): Unit = suspendTransaction{
        EmotionDAO.new {
            name = emotion.name
            description = emotion.description
            intensity = emotion.intensity.toString()
            createdAt = LocalDate.now().toString()
        }
    }

    override suspend fun removeEmotion(id: Int): Boolean = suspendTransaction{
        val rowsDeleted = EmotionTable.deleteWhere {
            EmotionTable.id eq id
        }

        rowsDeleted == 1
    }

    override suspend fun editEmotion(emotion: Emotion): Boolean = suspendTransaction {
        val rowsAffected = EmotionTable.update({ EmotionTable.id eq emotion.id }) {
            it[name] = emotion.name
            it[description] = emotion.description
            it[intensity] = emotion.intensity.toString()
        }

        rowsAffected > 0
    }
}