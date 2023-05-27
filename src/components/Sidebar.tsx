import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src='https://images.unsplash.com/photo-1682939634610-5187eb7f9619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'/>
            <div className={styles.profile}>
               <Avatar hasBorder src="https://pps.whatsapp.net/v/t61.24694-24/223253605_1553468925076275_3801217370321793839_n.jpg?ccb=11-4&oh=01_AdRWbER2ebRVLjL4uwIeM00fQ8xtB0Be6dy6BIoeS_hGwg&oe=64737FDE"/>
               <strong>Felipe Severino</strong> 
                <span>Diretor de Marketing</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu Perfil</a>
            </footer>
        </aside>
    )
}