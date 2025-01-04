import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return(
    <section className='App'>
        <TwitterFollowCard username='midudev' isFollowing>
            Miguel Angel Durán
        </TwitterFollowCard>
        <TwitterFollowCard username='pherald' isFollowing>
            Pablo Hernandez
        </TwitterFollowCard>
        <TwitterFollowCard username='elonmusk' isFollowing={false}>
            Elon Musk
        </TwitterFollowCard>
    </section>
    )
}