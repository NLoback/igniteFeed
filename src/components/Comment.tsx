import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://pps.whatsapp.net/v/t61.24694-24/319777303_1371278420109253_3923036798105496197_n.jpg?ccb=11-4&oh=01_AdTmmGj-3w138eDHsqKeLd7927dY_i6EG7UGO6cU4TrxHw&oe=6467A3C3" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ryan-kun</strong>
                            <time title='Publicado 01 maio' dateTime='2023-05-01 20:15:23'>há 15min atrás</time>
                        </div>
                        <button title="Apagar Comentário"><Trash size={24} /></button>
                    </header>
                    <p>Anão também tem sentimentos!! isto é crime !!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>-1</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}