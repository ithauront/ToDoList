import styles from './tasks.module.css'
import Clipboard from '../assets/Clipboard.png'
export function Tasks(){
    return(
        <div className={styles.tasks}>
        <header className={styles.header}>
            <div className={styles.created}>
                 <p>Tarefas Criadas</p> <span>0</span>
            </div>
            <div className={styles.done}>
                 <p>Concluidas</p> <span>0</span>
            </div> 
        </header>

        <main className={styles.empty}>
            
            <img className={styles.clipboard} src={Clipboard} alt="Clipboard" />
            <p><strong>Voce ainda não tem tarefas cadastradas</strong></p>            
            <p>Crie tarefas e organize seus itens a fazer</p>
           
        </main>
        </div>
    )
}//colocar uma função dentro do main que diz que if tarefas criadas == 0 return renderizar o main que fizemos, els renderizar as tarefas criadas. 