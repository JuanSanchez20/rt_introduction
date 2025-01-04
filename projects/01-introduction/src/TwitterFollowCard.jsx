export function TwitterFollowCard({username, name}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${username}`}
                    alt="Avatar de Midudev" 
                    className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-info-un'>@{username}</span>
                </div>
            </header>
            
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}