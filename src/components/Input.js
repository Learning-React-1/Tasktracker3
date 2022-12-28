import './Input.css'
import {useState} from 'react'
function Input({addtask}){
    const [currinputtask,setCurrInputTask]=useState('');
    const [currinputdate,setCurrInputDate]=useState('');
    const [currinputreminder,setCurrInputReminder]=useState(false);
    function formsubmithandler(e){
        e.preventDefault();
        if(currinputtask==='' || currinputdate===''){
            alert('please fill both task and date');
            return;
        }
        addtask(currinputtask,currinputdate,currinputreminder);
        setCurrInputTask('');
        setCurrInputDate('');
        setCurrInputReminder(false);
    }
return(
    <div className='Input'>
        <form onSubmit={(e)=>{formsubmithandler(e)}}>
            <div className='inputclasstext'>
                <div>Task Name</div>
                <input type='text' value={currinputtask} onChange={(e)=>{setCurrInputTask(e.target.value)}}></input>
            </div>
            <div className='inputclasstext'>
                <div>Task date</div>
                <input type='text' value={currinputdate} onChange={(e)=>{setCurrInputDate(e.target.value)}}></input>
            </div>
           <div className='inputclasscheckbox'>
                <input type='checkbox' checked={currinputreminder} onChange={(e)=>{setCurrInputReminder(e.target.checked)}}></input>
                <span>set reminder</span>
           </div>
            
            <input type='submit' className='inputclasssubmit'></input>
        </form>
        
    </div>
)
}
export default Input;