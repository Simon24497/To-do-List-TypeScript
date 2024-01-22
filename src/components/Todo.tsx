import React from "react"

interface TodoItem {
	text: string
	completed: boolean
	id: number
}

interface TodoProps {
	todo: TodoItem
	todos: TodoItem[]
	setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

const Todo: React.FC<TodoProps> = ({ todo, todos, setTodos }) => {
	const deleteHandler = () => {
		const newTodos = todos.filter((el) => el.id !== todo.id)

		setTodos(newTodos)

		if (newTodos.length === 0) {
			localStorage.removeItem("todos")
		} else {
			localStorage.setItem("todos", JSON.stringify(newTodos))
		}
	}

	const completedHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed }
				}
				return item
			})
		)
	}

	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""} `}>
				{todo.text}
			</li>
			<button
				className="complete-btn"
				onClick={completedHandler}>
				<i className="fas fa-check"></i>
			</button>
			<button
				className="trash-btn"
				onClick={deleteHandler}>
				<i className="fas fa-trash"> </i>
			</button>
		</div>
	)
}

export default Todo
