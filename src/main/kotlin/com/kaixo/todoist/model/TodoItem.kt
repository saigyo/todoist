package com.kaixo.todoist.model

data class TodoItem(var id: Long,
                    var title: String,
                    var description: String,
                    var state: ItemState = ItemState.TODO)
