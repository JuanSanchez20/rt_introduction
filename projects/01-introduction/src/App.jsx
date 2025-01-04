import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return(
    <section className='App'>
        <TwitterFollowCard username='midudev' name='Miguel Ángel Durán'/>
        <TwitterFollowCard username='pherald' name='Pablo Hernandez'/>
        <TwitterFollowCard username='elonmusk' name='Elon Musk'/>
    </section>
    )
}