package example.com.utils

import kotlinx.serialization.Serializable

@Serializable
sealed class BaseResponse<T> {
    @Serializable
    data class SuccessResponse<T>(
        val message: String? = null,
        val data: T? = null
    ): BaseResponse<T>()

    @Serializable
    data class ErrorResponse<T>(
        val message: String? = null,
        val data: T? = null
    ): BaseResponse<T>()
}
