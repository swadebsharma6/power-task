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
    const [taskToUpdate, SetTaskToUpdate] = useState(null);

    const handleAddTask =(newTask, isAdd)=>{
        if(isAdd){
            setTasks([...tasks, newTask]);
        }
        else{
            setTasks(
                tasks.map(task => {
                    if(task.id === newTask.id){
                        return newTask
                    }
                    return task;
                })
            )
        }
       
        setShowSetModal(false)   
        
    }

    const handleEditTask =(task)=>{
        SetTaskToUpdate(task)
        setShowSetModal(true);
       
        console.log('Edit Task', task)
    }

    const onCloseClick =()=>{
        setShowSetModal(false);
        SetTaskToUpdate(null);
    }

    const handleDeleteTask =(taskId)=>{

        const deleteTasks = tasks.filter(task => task.id !== taskId);
        setTasks(deleteTasks)

    }

    const handleDeleteAllClick =()=>{
        tasks.length = 0;
        setTasks([...tasks]);
    }

    // const handleFavorite =(taskId)=>{
    //     const taskIdx = tasks.find(task => task.id === taskId);
    //     const newTasks = [...tasks];
    //     newTasks[taskIdx].isFavorite =  !newTasks[taskIdx].isFavorite;
    //     setTasks(newTasks);
    // }


    return (
        <section className="mb-20" id="tasks">
      { showAddModal && <AddTaskModal 
        onSave ={handleAddTask} 
        onCloseClick={onCloseClick}
        taskToUpdate={taskToUpdate}
        />}
		<div className="container">
		<div className="p-2 flex justify-end">
			<SearchTask/>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction
                 handleAddClick={()=> setShowSetModal(true)}
                 onDeleteAllClick={handleDeleteAllClick}
                 />
				<TaskList
                 tasks={tasks} 
                 onEdit ={handleEditTask}
                 onDelete={handleDeleteTask}
               
                 />
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;