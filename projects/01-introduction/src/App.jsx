import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return(
    <section className='App'>
        <TwitterFollowCard username='midudev' initialIsFollowing>
            Miguel Angel Durán
        </TwitterFollowCard>
        <TwitterFollowCard username='pherald' initialIsFollowing>
            Pablo Hernandez
        </TwitterFollowCard>
        <TwitterFollowCard username='elonmusk' initialIsFollowing>
            Elon Musk
        </TwitterFollowCard>
    </section>
    )
}