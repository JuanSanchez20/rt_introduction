import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src="https://unavatar.io/midudev" 
                    alt="Avatar de Midudev" 
                    className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>Miguel Angel Durán</strong>
                    <span className='tw-followCard-info-un'>@midudev</span>
                </div>
            </header>
            
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}