import PropTypes from 'prop-types';

export function TwitterFollowCard({username, children}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${username}`}
                    alt="Avatar de Midudev" 
                    className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-info-un'>@{username}</span>
                </div>
            </header>
            
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}

// Validación de las propiedades
TwitterFollowCard.propTypes = {
    username: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};