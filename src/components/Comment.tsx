import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface commentProps {
    content: string
}

export function Comment({content}:commentProps) {
    fucntion handleDeleteComment(){
        
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://pps.whatsapp.net/v/t61.24694-24/182741969_167166602051784_2318020111474093067_n.jpg?ccb=11-4&oh=01_AdQUzoACBJt9qNECPzX6WyES0PLucvv_emczx6iwBPvdzA&oe=647A21BF" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>eloback</strong>
                            <time title='Publicado 01 maio' dateTime='2023-05-01 20:15:23'>há 15min atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Apagar Comentário"><Trash size={24} /></button>
                    </header>
                    <p>{content}</p>
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