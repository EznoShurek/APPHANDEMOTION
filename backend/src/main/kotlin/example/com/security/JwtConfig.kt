package example.com.security

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm

class JwtConfig (
    private val secretKey: String
) {
    private val algorithm = Algorithm.HMAC256(secretKey)

    val verifier: JWTVerifier = JWT
        .require(algorithm)
        .withIssuer(ISSUER)
        .withAudience(AUDIENCE)
        .build()

    fun createAccessToken(id: Int): String = JWT
        .create()
        .withIssuer(ISSUER)
        .withAudience(AUDIENCE)
        .withClaim(CLAIM, id)
        .sign(algorithm)

    companion object {
        private const val ISSUER = "test-ktor"
        private const val AUDIENCE = "test-ktor"
        const val CLAIM = "id"

        lateinit var instance: JwtConfig
            private set

        fun initialize(secretKey: String) =
            synchronized(this) {
                if(!::instance.isInitialized) {
                    instance = JwtConfig(secretKey)
                }
            }
    }
}
