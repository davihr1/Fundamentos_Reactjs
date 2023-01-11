import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { Comment } from './comment';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) { 
    const [comments, setCommetnts] = useState([
        1,
        2,
    ]);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault()
        setCommetnts([1,2,3])
        console.log(comments);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
                {console.log("test return")}
            </header>

            <div className={styles.content}>
                {content.map(linne => {
                    if(linne.type === 'paragraph') {
                        return <p>{linne.content}</p>;
                    } else if(linne.type === 'link') {
                        return <p><a href="#">{linne.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um commentario"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                    return <Comment />
               })}
            </div>
        </article>
    );
}