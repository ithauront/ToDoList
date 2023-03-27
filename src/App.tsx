import './global.css'
import { Header } from './components/header'
import { NewTask } from './components/newTask'
 export function App() {
  
  return (
    <div>

      <Header/> 

      <div > 
        <aside>
          <NewTask />
        </aside>
            
        <main>
          <div>
            <p>tarefas criadas</p>
          </div> // outro componente que iremos criar
        </main>
      
      </div>
    </div>
  )
}


