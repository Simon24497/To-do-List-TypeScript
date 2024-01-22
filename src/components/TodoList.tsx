import React from "react"
import Todo from "./Todo"

interface TodoItem {
	text: string
	completed: boolean
	id: number
}

interface TodoListProps {
	todos: TodoItem[]
	setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
	filteredTodos: TodoItem[]
}

const TodoList: React.FC<TodoListProps> = ({
	todos,
	setTodos,
	filteredTodos,
}) => {
	return (
		<div className="todo-container">
			<ol className="todo-list">
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
			</ol>
		</div>
	)
}

export default TodoList
