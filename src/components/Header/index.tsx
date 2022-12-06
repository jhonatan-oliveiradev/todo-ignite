import { FormEvent, useState, ChangeEvent } from "react";
import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";

interface Props {
	onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
	const [title, setTitle] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		onAddTask(title);
		setTitle("");
	}

	function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
		setTitle(e.target.value);
	}

	return (
		<header className={styles.header}>
			<img src={todoLogo} />

			<form className={styles.newTaskForm} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Adicione uma nova tarefa"
					onChange={onChangeTitle}
					value={title}
				/>
				<button>
					Criar
					<AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
