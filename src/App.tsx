import './global.css'
import { Header } from './components/header'
import { TaskList } from './components/taskList'
import { CreateTask } from './components/createTask'
import { useState } from 'react'

interface Task {
  text: string;
  checked: boolean;

}
 export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (newTask: string): void => {
  return setTasks([ {text: newTask, checked: false}, ...tasks]);
    
    }
  return (
    
    <div>

      <Header/> 

      <div > 
                 
          <CreateTask onNewTask={addTask} />

          <TaskList tasks={tasks} setTasks={setTasks}/>
        
      
      </div>
    </div>
  )
}


