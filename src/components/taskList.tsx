import styles from './taskList.module.css'
import Clipboard from '../assets/Clipboard.png'
import { PlusCircle , Trash} from 'phosphor-react'

import { useState, FormEvent, ChangeEvent} from 'react';





export function TaskList(){

    const [tasks, setTasks] = useState<string[]>([]);
    const [newTaskText, setNewTaskText] = useState('');

    function addTask(newTask: string) {
     return setTasks([...tasks, newTask]);
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
            <input className={styles.checkbox} type="checkbox" />
            <p className={styles.text}>{task}</p>
            <button className={styles.trashButton} type='submit'><Trash size={24} /></button>
          </div>
          
        ))}
      
    </>
  )}
</footer>


        
        
        </div>
        </div>
    )
                        }