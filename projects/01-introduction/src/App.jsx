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
        userName: 'TMChein',
        name: 'Tomas Chein',
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
                    <TwitterFollowCard key={userName} 
                                        initialIsFollowing={isFollowing}
                                        username={userName}>
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
    </section>
    )
}
