import styles from './header.module.css'
import logo from '../assets/rocket.png'

export function Header () {
    return (
    <div>
        <header className={styles.header}> 
        <div className={styles.title}>
        <img src={logo} alt="rocketLogo" />
          <strong >
            <span className={styles.blue}> to</span><span className={styles.purple}>do</span>
          </strong> 
        </div>
        
        </header>
    </div>
    );

}

        