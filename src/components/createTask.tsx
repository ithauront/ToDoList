import styles from './createTask.module.css'
import { useState, FormEvent, ChangeEvent } from 'react';
import { PlusCircle} from 'phosphor-react'

interface CreateTaskProps{
onNewTask: (newTask: string)=> void;
}
export function CreateTask({onNewTask}: CreateTaskProps) {
    
    const [newTaskText, setNewTaskText] = useState('');

  
    
    function handleCreateNewTask(event: FormEvent){
            event.preventDefault()
            if (newTaskText.trim() !== '') {
          onNewTask(newTaskText);
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

    </div>
)

}