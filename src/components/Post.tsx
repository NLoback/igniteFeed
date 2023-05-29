import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {  format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[ ];
}

export interface PostProps {
  post: PostType;
}

export function Post({post}: PostProps) {
    const [comments, setComments] = useState([
        {
            id: 0,
            commentText: "Meteu essa Maluco",
        },
     ]
 )

    const [newCommentText, setNewCommentText] = useState('')
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    } )

    function handleCreateNewComment (event:  FormEvent) {
        event.preventDefault()
        setComments([...comments, {id: comments.length, commentText: newCommentText}])
        setNewCommentText('')
        
    }

    function handleNewCommentChange( event:  ChangeEvent<HTMLTextAreaElement> ) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentID: number) {
        const newComments = comments.filter((item) => item.id !== commentID)
        console.log(newComments)
        setComments(newComments)
    }

    function handleNewCommentInvalid(event:  InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Escreva um comentário')
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {post.content.map((line) => {
                    if(line.type === 'paragraph')
                        return <p key={line.content} >{line.content}</p>
                    else if (line.type === 'link')
                        return <a key={line.content} href='#'>{line.content}</a>
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
                    placeholder='Comente aqui'
                    onInvalid={handleNewCommentInvalid}
                    required
                    ></textarea>
                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
                </footer>
            </form>
    
            <div className={styles.commentList}>
                {comments.map(comment=>{
                    return(
                        <Comment
                            key={comment.id}
                            id={comment.id}
                            content={comment.commentText}
                            onDeleteComment={deleteComment}
                        />
                        ) 
                    })}
            </div>
        </article>
    )

}