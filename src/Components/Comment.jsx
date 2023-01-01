import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';

export function Comment() {
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src='https://github.com/diego3g.png' />

            <div className={style.commentBox}>
                 <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Davi Henrique</strong>

                            <time title="11 de Maio ás 08:00h" dateTime="2022-05-11 08:00:25">Cerca de 1h á trás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito bom devon, parabens!!
                    </p>
                 </div>

                 <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                 </footer>
            </div>
        </div>
    );
}