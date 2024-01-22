import React, { useEffect, useState } from "react"
import Form from "./components/Form"
import "./App.css"
import TodoList from "./components/TodoList"

interface Todo {
	text: string
	completed: boolean
	id: number
}

const App: React.FC = () => {
	const [inputText, setInputText] = useState<string>("")
	const [todos, setTodos] = useState<Todo[]>([])
	const [status, setStatus] = useState<string>("all")
	const [filteredTodos, setFilteredTodos] = useState<Todo[]>([])

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true))
				break
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false))
				break
			default:
				setFilteredTodos(todos)
				break
		}
	}

	const saveLocalTodos = () => {
		if (todos.length > 0) {
			localStorage.setItem("todos", JSON.stringify(todos))
		}
	}

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]))
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos") || "")
			setTodos(todoLocal)
		}
	}

	useEffect(() => {
		getLocalTodos()
	}, [])

	useEffect(() => {
		saveLocalTodos()
		filterHandler()
	}, [todos, status])

	return (
		<div>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	)
}

export default App
