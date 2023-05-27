import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {  format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'



export function Post({author, publishedAt, content}: any) {
    const [comments, setComments] = useState([
       {
        id: 0,
        commentText: "Meteu essa Maluco",
       },
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    } )

    function handleCreateNewComment (event: any) {
        event.preventDefault()
        setComments([...comments, {id: comments.length, commentText: newCommentText}])
        setNewCommentText('')
        
    }

    function handleNewCommentChange( event: any ) {
        setNewCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map((i:{type:string, content: string}) => {
                    if(i.type === 'paragraph')
                        return <p key={i.content} >{i.content}</p>
                    else if (i.type === 'link')
                        return <a key={i.content} href='#'>{i.content}</a>
                    })}
            </div>

            <form 
                onSubmit={handleCreateNewComment} 
                className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder='Comente aqui'></textarea>
                    
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment=>{
                    return(
                        <Comment
                            key={comment.id}
                            content={comment.commentText}
                        />
                        ) 
                    })}

            </div>

        </article>
    )

}