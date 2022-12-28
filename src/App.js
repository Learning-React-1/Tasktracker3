import './App.css';
import Header from './components/Header'
import TasksList from './components/TasksList';
import Input from './components/Input';
import {useState,useEffect} from 'react';
function App() {
  const [showinput,setShowInput]=useState(true)
  const [alltasks,setAllTasks]=useState([])
  useEffect(()=>{
    fetchtasks();
  },[])
  /**************************************start of useful functions for managment of state************************************************************** */
  const fetchtasks=async ()=>{
    const res=await fetch('/tasks');
    const data=await res.json();
    setAllTasks(data);
  }
  function setinputstate(){
    setShowInput((showinput)=>{
      return !showinput;
    })
  }
  async function changereminderstate(taskid,task,date,reminder){
    console.log(taskid);
    const res=await fetch(`/tasks/${taskid}`,{method:"put",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({id:taskid,task:task,date:date,reminder:!reminder})
    })
    const currtask=await res.json();
    setAllTasks((prevalltasks)=>{
      const updatedtasks=prevalltasks.map((task)=>{return {...task}})
      return updatedtasks.map((task)=>{
        if(task.id===taskid){
          task.reminder=currtask.reminder;
          return task;
        }
        else{
          return task;
        }
      });
    })
  }

  async function addtask(inputtask,inputdate,inputreminder){
    const res=await fetch('/tasks',{method:'POST',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({task:inputtask,date:inputdate,reminder:inputreminder}),
  })
  const data=await res.json();
  console.log(data);
  setAllTasks((prevalltasks)=>{
    return [...prevalltasks,data];
  })
    // setAllTasks((prevalltasks)=>{
    //   const updatedtasks=prevalltasks.map((task)=>{return {...task}})
    //   updatedtasks.push({id:Math.random()*100000000,task:inputtask,date:inputdate,reminder:inputreminder})
    //   console.log(updatedtasks);
    //   return updatedtasks;
    // })
  }


  async function deletetask(taskid){
    await fetch(`/tasks/${taskid}`,{method:'DELETE'});
    setAllTasks((prevalltasks)=>{
      const updatedtasks=prevalltasks.map((task)=>{return {...task}})
      return updatedtasks.filter((task)=>{return task.id!==taskid});
    })
  }

  /***************************************************************************************************************** */
  return (
    <div className="App">
      <Header setinputstate={setinputstate}></Header>
      {showinput ? <Input addtask={addtask}></Input>:<span></span>}
      <TasksList alltasks={alltasks} changereminderstate={changereminderstate} deletetask={deletetask}></TasksList>
    </div>
  );
}

export default App;
