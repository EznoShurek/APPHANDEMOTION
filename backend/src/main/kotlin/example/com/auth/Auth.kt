package example.com.auth

import example.com.dto.LoginDTO
import example.com.dto.UserDTO
import example.com.repository.UserRepository
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.SerializationException

fun Application.authRoutes(
    repository: UserRepository
) {
    routing {
        route("/auth") {
            post("/register") {
                val params = call.receive<UserDTO>()
                try {
                    val result = repository.registerUser(params) ?: call.respond(HttpStatusCode.BadRequest)
                    call.respond(
                        status = HttpStatusCode.Created,
                        message = result
                    )
                } catch (e: Exception) {
                    e.printStackTrace()
                    call.respond(
                        status = HttpStatusCode.BadRequest,
                        message = "Erro ao registrar usuario"
                    )
                }
            }
            post("/login") {
                val params = call.receive<LoginDTO>()
                try {
                    val result = repository.loginUser(params)
                    if (result == null) call.respond(HttpStatusCode.BadRequest)
                    else call.respond(
                        status = HttpStatusCode.OK,
                        message = result
                    )
                } catch (e: Exception) {
                    e.printStackTrace()
                    call.respond(
                        status = HttpStatusCode.BadRequest,
                        message = "Erro ao logar usuario"
                    )
                }
            }
        }
    }
}