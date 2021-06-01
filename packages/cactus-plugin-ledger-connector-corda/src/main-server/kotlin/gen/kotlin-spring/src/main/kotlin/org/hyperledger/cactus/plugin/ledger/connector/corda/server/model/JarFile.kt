package org.hyperledger.cactus.plugin.ledger.connector.corda.server.model

import java.util.Objects
import com.fasterxml.jackson.annotation.JsonProperty
import javax.validation.constraints.DecimalMax
import javax.validation.constraints.DecimalMin
import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import javax.validation.constraints.Pattern
import javax.validation.constraints.Size
import javax.validation.Valid

/**
 * 
 * @param filename 
 * @param hasDbMigrations Indicates whether the cordapp jar in question contains any embedded migrations that Cactus can/should execute between copying the jar into the cordapp directory and starting the node back up.
 * @param contentBase64 
 */
data class JarFile(

    @get:Size(min=1,max=255)
    @field:JsonProperty("filename", required = true) val filename: kotlin.String,

    @field:JsonProperty("hasDbMigrations", required = true) val hasDbMigrations: kotlin.Boolean,

    @get:Size(min=1,max=1073741824)
    @field:JsonProperty("contentBase64", required = true) val contentBase64: kotlin.String
) : kotlin.collections.HashMap<String, kotlin.Any>(){

}

