package com.example.plugins

import example.com.Repository.EmotionRepository
import example.com.model.Emotion
import example.com.model.Intensity
import io.ktor.http.*
import io.ktor.serialization.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureSerialization(repository: EmotionRepository) {
    install(ContentNegotiation) {
        json()
    }
    routing {
        route("/emotions") {
            get {
                val emotions = repository.allEmotions()
                call.respond(emotions)
            }

            get("/byName/{emotionName}") {
                val name = call.parameters["emotionName"]
                if (name == null) {
                    call.respond(HttpStatusCode.BadRequest)
                    return@get
                }
                val emotion = repository.emotionByName(name)
                if (emotion == null) {
                    call.respond(HttpStatusCode.NotFound)
                    return@get
                }
                call.respond(emotion)
            }

            get("/byIntensity/{intensity}") {
                val intensityAsText = call.parameters["intensity"]
                if (intensityAsText == null) {
                    call.respond(HttpStatusCode.BadRequest)
                    return@get
                }
                try {
                    val intensity = Intensity.valueOf(intensityAsText)
                    val emotions = repository.emotionsByIntensity(intensity)


                    if (emotions.isEmpty()) {
                        call.respond(HttpStatusCode.NotFound)
                        return@get
                    }
                    call.respond(emotions)
                } catch (ex: IllegalArgumentException) {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }

            post {
                try {
                    val emotion = call.receive<Emotion>()
                    repository.addEmotion(emotion)
                    call.respond(HttpStatusCode.OK)
                } catch (ex: IllegalStateException) {
                    call.respond(HttpStatusCode.BadRequest)
                } catch (ex: JsonConvertException) {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }

            delete("/{emotionId}") {
                val id = call.parameters["emotionId"]
                if (id == null) {
                    call.respond(HttpStatusCode.BadRequest)
                    return@delete
                }
                if (repository.removeEmotion(id.toInt())) {
                    call.respond(HttpStatusCode.OK)
                } else {
                    call.respond(HttpStatusCode.NotFound)
                }
            }

            put {
                try {
                    val emotion = call.receive<Emotion>()
                    if (repository.editEmotion(emotion))
                        call.respond(HttpStatusCode.OK)
                    else
                        call.respond(HttpStatusCode.NotFound)
                } catch (ex: IllegalStateException) {
                    call.respond(HttpStatusCode.BadRequest)
                } catch (ex: JsonConvertException) {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
        }

        route("/extra") {
            post {
                try {

                } catch (ex: IllegalStateException) {
                    call.respond(HttpStatusCode.BadRequest)
                } catch (ex: JsonConvertException) {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
        }
    }
}