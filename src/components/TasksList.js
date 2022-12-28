import './TasksList.css'
import Task from './Task'
function TasksList({alltasks,changereminderstate,deletetask}){
return(
<div>
    {
        alltasks.map((task)=>{
            return <Task key={task.id} id={task.id} task={task.task} date={task.date} reminder={task.reminder} changereminderstate={changereminderstate} deletetask={deletetask}></Task>
        })
    }
    
</div>
)
}
export default TasksList;