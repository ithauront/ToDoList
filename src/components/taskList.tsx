import styles from './taskList.module.css'
import Clipboard from '../assets/Clipboard.png'
import { PlusCircle , Trash} from 'phosphor-react'

import { useState, FormEvent, ChangeEvent} from 'react';


interface Task {
    text: string;
    checked: boolean;

}


export function TaskList(){

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskText, setNewTaskText] = useState('');



    function addTask(newTask: string) {
     return setTasks([...tasks, {text: newTask, checked: false}]);
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        if (newTaskText.trim() !== '') {
      addTask(newTaskText);
      setNewTaskText('')
    }
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
     }
         
    const deleteTask = (index:number) => {
        const taskWithoutDeletedOne = [...tasks];
        taskWithoutDeletedOne.splice(index, 1);
        setTasks(taskWithoutDeletedOne)

    }

    const handletaskChecked= (index:number) => {
        const taskWithoutCheckedOne = [...tasks];
        const checkedTask = taskWithoutCheckedOne.splice(index, 1)[0];
        checkedTask.checked = !checkedTask.checked;
        const taskCheckedAtTheBottom = [...taskWithoutCheckedOne, checkedTask]
        setTasks(taskCheckedAtTheBottom);
            }

    

    return(
        <div>
        <header >
        <form onSubmit={handleCreateNewTask} className={styles.form}>
                <textarea name="task"  placeholder="Adicione uma nova tarefa" value={newTaskText} 
                onChange={handleNewTaskChange}/>
                 <footer>
                    <button type="submit"><span className={styles.buttonText}>Criar</span>< PlusCircle size={18}/></button>
                </footer>
        </form>
        </header>

        <div className={styles.tasksListWrapper}>
        <main className={styles.tasksCreated}>
          <div className={styles.created}>
                 <p>Tarefas Criadas</p> <span>{tasks.length}</span>
            </div>
            <div className={styles.done}>
                 <p>Concluidas</p> <span>0</span>
            </div> 
       
        </main>
        
        <footer className={tasks.length === 0 ? styles.empty : ''}>
  {tasks.length === 0 ? (
    <>
      <img className={styles.clipboard} src={Clipboard} alt="Clipboard" />
      <p><strong>Voce Ainda não tem tarefas cadastradas</strong></p>            
      <p>Crie tarefas e organize seus itens a fazer</p>
    </>
  ) : (
    <>
      
        {tasks.map((task, index) => (
            
          <div className={styles.taskOnTheList} key={index}>
            <input className={styles.checkbox} type="checkbox" onChange={() => handletaskChecked(index)} checked={task.checked}/>
            <p className={styles.text}>{task.text}</p>
            <button className={styles.trashButton} onClick={() => deleteTask(index)} title='deleteTask'><Trash size={24} /></button>
          </div>
          
        ))}
      
    </>
  )}
</footer>


        
        
        </div>
        </div>
    )
                        }