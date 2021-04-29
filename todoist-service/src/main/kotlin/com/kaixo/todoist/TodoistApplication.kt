package com.kaixo.todoist

import com.kaixo.todoist.model.ItemState
import com.kaixo.todoist.model.TodoItem
import com.kaixo.todoist.persistence.TodoItemRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import java.util.stream.Stream


@SpringBootApplication
class TodoistApplication {
	@Bean
	fun init(todoItemRepository: TodoItemRepository): CommandLineRunner {
		return CommandLineRunner { args: Array<String?>? ->
			Stream.of("Buy milk", "Call mom", "Bring out the rubbish").forEach { title: String ->
				val item = TodoItem(title = title, description = "dobidoobidoo", state = ItemState.TODO)
				todoItemRepository.save(item)
			}
			todoItemRepository.findAll().forEach(System.out::println)
		}
	}
}

fun main(args: Array<String>) {
	runApplication<TodoistApplication>(*args)
}
