import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar}
                    src="https://pps.whatsapp.net/v/t61.24694-24/223253605_1553468925076275_3801217370321793839_n.jpg?ccb=11-4&oh=01_AdSnpyUxXV2asF46jPVKoSZE0wMOH_ClHZQd8BPGB9Qy6w&oe=6465379E"/>
                    <div className={styles.authorInfo}>
                        <strong>Felipe Severino</strong>
                        <span>Diretor de Marketing</span>
                    </div>
                </div>
                <time title='Publicado 01 maio' dateTime='2023-05-01 20:15:23'>Publicado a 1h</time>
            </header>
                <div className={styles.content}>
                    <p>Fala Galera</p>
                    <p>Acabei de Publicar um anao dinamarques correndo atras de um poodle, Grande filmagem digna de um Oscar!</p>
                    <p><a href='#'>anao.png/teucu</a></p>
                    <p><a href="#"> #anaotbegente</a>{''} 
                   <a href='#'> #teucu </a>{''}
                   <a href='#'> #suamae </a>{''}
                   <a href='#'> #compreiumanao</a>{''}
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea placeholder='Comente aqui'></textarea>
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
            </article>
    )

}