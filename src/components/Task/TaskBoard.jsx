import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
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
    const [showAddModal, setShowSetModal] = useState(false);

    const handleAddTask =(task)=>{
        console.log('adding task', task);
        setTasks([...tasks, task]);
        setShowSetModal(false)   
        
    }

    const handleEditTask =(task)=>{
        console.log('Edit Task', task)
    }


    return (
        <section className="mb-20" id="tasks">
      { showAddModal && <AddTaskModal onSave ={handleAddTask} />}
		<div className="container">
		<div className="p-2 flex justify-end">
			<SearchTask/>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction handleAddClick={()=> setShowSetModal(true)}/>
				<TaskList tasks={tasks} onEdit ={handleEditTask}/>
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;