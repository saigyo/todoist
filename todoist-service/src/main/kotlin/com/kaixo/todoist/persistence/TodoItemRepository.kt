package com.kaixo.todoist.persistence

import com.kaixo.todoist.model.TodoItem
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface TodoItemRepository : CrudRepository<TodoItem, Long> {
}
