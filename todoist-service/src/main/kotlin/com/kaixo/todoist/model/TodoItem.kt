package com.kaixo.todoist.model

import com.fasterxml.jackson.annotation.JsonProperty
import io.crnk.core.resource.annotations.JsonApiId
import io.crnk.core.resource.annotations.JsonApiResource
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
@JsonApiResource(type="todoItems")
data class TodoItem(@JsonApiId
                    @GeneratedValue(strategy = GenerationType.AUTO)
                    @Id var id: Long? = null,
                    @JsonProperty var title: String? = null,
                    @JsonProperty var description: String? = null,
                    @JsonProperty var state: ItemState? = null)
