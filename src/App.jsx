import styles from './App.module.css';
import './global.css';

import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/davihr1.png',
      name: 'davihr1',
      role: 'CTO @ hboMax'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'davihr1',
      role: 'CTO @hboMax'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-22 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/davihr1.png',
      name: 'diego3g',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-2022 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (<Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App
