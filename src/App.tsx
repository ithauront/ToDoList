import './global.css'
import { Header } from './components/header'
import { Tasks } from './components/tasks'
 export function App() {
  

  return (
    <div>

      <Header/> 

      <div > 
                 
        <main>
          <Tasks />
        </main>
      
      </div>
    </div>
  )
}


