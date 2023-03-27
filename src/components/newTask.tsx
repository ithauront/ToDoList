import { PlusCircle } from 'phosphor-react'
import styles from './newTask.module.css'

export function NewTask () {
    return(
        <form className={styles.form}>
                <textarea name="task"  placeholder="Adicione uma nova tarefa"></textarea>
                <footer>
                    <button type="submit"><span className={styles.buttonText}>Criar</span>< PlusCircle size={18}/></button>
                </footer>
        </form>
        
    );
}