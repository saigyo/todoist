package com.kaixo.todoist.resource

import com.kaixo.todoist.model.TodoItem
import com.kaixo.todoist.persistence.TodoItemRepository
import io.crnk.core.queryspec.QuerySpec
import io.crnk.core.repository.ResourceRepositoryBase
import io.crnk.core.resource.list.ResourceList
import org.springframework.stereotype.Component
import java.lang.IllegalArgumentException

@Component
class TodoItemResourceRepository(private val todoItemRepository: TodoItemRepository) : ResourceRepositoryBase<TodoItem, Long>(TodoItem::class.java) {
    override fun delete(id: Long?) {
        if (id != null) {
            todoItemRepository.deleteById(id)
        }
    }

    override fun <S : TodoItem?> save(todoItem: S): S {
        if (todoItem == null) {
            throw IllegalArgumentException()
        }
        return todoItemRepository.save(todoItem)
    }
    override fun findAll(querySpec: QuerySpec?): ResourceList<TodoItem> {
        if (querySpec == null) {
            throw IllegalArgumentException()
        }
        // TODO ok... this is rather inefficient. In reality the querySpec would have to be translated into a respective data repository query.
        return querySpec.apply(todoItemRepository.findAll())
    }
}
