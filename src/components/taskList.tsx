  import styles from './taskList.module.css'
  import Clipboard from '../assets/Clipboard.png'
  import { Trash} from 'phosphor-react'

  interface Task {
      text: string;
      checked: boolean;

  }

  interface TaskListProps{
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }

  export function TaskList({tasks, setTasks}: TaskListProps){  
          
      const deleteTask = (index:number) => {
          const taskWithoutDeletedOne = [...tasks];
          taskWithoutDeletedOne.splice(index, 1);
          setTasks(taskWithoutDeletedOne)

      }

      

      const handletaskChecked= (index:number) => {
        const updatedTaskList = [...tasks];
        const checkedTask = updatedTaskList.splice(index, 1)[0];
        checkedTask.checked = !checkedTask.checked;
        if (!checkedTask.checked) {
          updatedTaskList.unshift(checkedTask)
        }
        else {updatedTaskList.push(checkedTask)}
        
        setTasks(updatedTaskList);
            }

      const completedTask = tasks.filter(task => task.checked === true); 

      return(
          <div>
          

          <div className={styles.tasksListWrapper}>
          <main className={styles.tasksCreated}>
            <div className={styles.created}>
                  <p>Tarefas Criadas</p> <span className={styles.counter}>{tasks.length}</span>
              </div>
              <div className={styles.done}>
                  <p>Concluidas</p> <span className={styles.counter}>{completedTask.length}</span></div>
              
        
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
              <input className={`${styles.checkbox}`} type="checkbox" onChange={() => handletaskChecked(index)} checked={task.checked}/>
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