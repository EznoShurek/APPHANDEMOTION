package example.com.security

import io.ktor.server.auth.*

data class UserIdPrincipalForUser(val id: Int) : Principal
