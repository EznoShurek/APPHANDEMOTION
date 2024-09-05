package example.com.Repository

import example.com.db.EmotionDAO
import example.com.db.EmotionTable
import example.com.db.daoToModel
import example.com.db.suspendTransaction
import example.com.model.Emotion
import example.com.model.Intensity
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.deleteWhere

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
        }
    }

    override suspend fun removeEmotion(name: String): Boolean = suspendTransaction{
        val rowsDeleted = EmotionTable.deleteWhere {
            EmotionTable.name eq name
        }

        rowsDeleted == 1
    }

    override suspend fun editEmotion(name: String): Boolean {
        TODO("Not yet implemented")
    }
}