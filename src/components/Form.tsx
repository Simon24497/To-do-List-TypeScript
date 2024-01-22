import React from "react"

interface Todo {
	text: string
	completed: boolean
	id: number
}

interface FormProps {
	inputText: string
	setInputText: React.Dispatch<React.SetStateAction<string>>
	todos: Todo[]
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
	setStatus: React.Dispatch<React.SetStateAction<string>>
}

const Form: React.FC<FormProps> = ({
	inputText,
	setInputText,
	todos,
	setTodos,
	setStatus,
}) => {
	const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
	}

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()

		if (inputText.trim() === "") {
			return
		}

		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		])

		setInputText("")
	}

	const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setStatus(e.target.value)
	}

	return (
		<form>
			<div>
				<input
					onChange={inputTextHandler}
					value={inputText}
					type="text"
					className="todo-input"
				/>
				<button
					onClick={submitHandler}
					type="submit"
					className="todo-button">
					<i className="fas fa-plus-square"></i>
				</button>
			</div>

			<div className="select">
				<select
					onChange={statusHandler}
					name="todos"
					className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	)
}

export default Form
