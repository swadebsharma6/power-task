import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
    const defaultTask ={
        'id': crypto.randomUUID(),
        'title': "Learn React",
        'description': 'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
        'tags': ['web', 'react', 'Js'],
        'priority': 'High',
        'isFavorite': true

    }

    const [tasks, setTasks] = useState([defaultTask]);


    return (
        <section className="mb-20" id="tasks">
		<div className="container">
		<div className="p-2 flex justify-end">
			<SearchTask/>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction/>
				<TaskList tasks={tasks}/>
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;