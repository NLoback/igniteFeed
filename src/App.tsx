import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/223253605_1553468925076275_3801217370321793839_n.jpg?ccb=11-4&oh=01_AdRWbER2ebRVLjL4uwIeM00fQ8xtB0Be6dy6BIoeS_hGwg&oe=64737FDE',
      name: 'Felipe Severino',
      role: 'Diretor de Marketing'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala Galera'
      },
      {
        type: 'paragraph', content: 'Acabei de Publicar um anao dinamarques correndo atras de um poodle, Grande filmagem digna de um Oscar!'
      },
      {
        type: 'link', content: 'anao.png/teucu'
      },
    ],
    publishedAt: new Date('2023-05-01 20:15:23'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/319777303_1371278420109253_3923036798105496197_n.jpg?ccb=11-4&oh=01_AdRxIZhUaQgsyh3cFwSae6avPcZgXOrDAZLEPVw64Me9mw&oe=64738143',
      name: 'Ryan_C#_Perigoso',
      role: 'Matador de Pirocas'
    },
    content: [
      { type: 'paragraph', content: 'Gente ╰(◡‿◡✿╰) '},
      { type: 'paragraph', content: 'Não sinto minhas pernas, se um dia eu tinha c# eu desconheço'},
      {
        type: 'link', content: 'meucooléumtunel.png/ripcool'
      },
    ],
    publishedAt: new Date('2023-05-12 21:15:23'),
  },
]

function App() {

  return (
    <>
       <Header/>
       <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post => {
              return( 
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
       </div>
    </>
  )
}

export default App
