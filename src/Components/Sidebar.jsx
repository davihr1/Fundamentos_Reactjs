import { PencilSimpleLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover}
             src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
              />

            <div className={styles.profile}>
                <Avatar src="https://github.com/davihr1.png" />

                <strong>Davi Henrique</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    editar seu perfil
                </a>
            </footer>
        </aside>
    );
}