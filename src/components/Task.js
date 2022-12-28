import './Task.css'
function Task({id,task,date,reminder,changereminderstate,deletetask}){
    function reflectheremiderstatus(reminder){
        return reminder ? "red": "aqua";
    }
return(
    <div id={id} className='Task' style={{borderColor:reflectheremiderstatus(reminder)}} onClick={()=>{changereminderstate(id,task,date,reminder)}}>
       
        <div className='taskmain'>
            {task}<pre><span onClick={()=>{deletetask(id)}} className='close'> x </span></pre>
        </div>
        <div>
            {date}
        </div>
        
    </div>
)
}
export default Task;