import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return(
    <section className='App'>
        <TwitterFollowCard username='midudev'>
            Miguel Angel Durán
        </TwitterFollowCard>
        <TwitterFollowCard username='pherald'>
            Pablo Hernandez
        </TwitterFollowCard>
        <TwitterFollowCard username='elonmusk'>
            Elon Musk
        </TwitterFollowCard>
    </section>
    )
}