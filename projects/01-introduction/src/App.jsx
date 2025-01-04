import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName: 'pherald',
        name: 'Pablo Hernandez',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    }
]

export function App() {
    return(
    <section className='App'>
        {
            users.map((user) => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard username={userName} 
                                        initialIsFollowing={isFollowing}
                                        key={userName}>
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
    </section>
    )
}