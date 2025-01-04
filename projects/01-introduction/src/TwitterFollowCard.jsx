import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({username, children, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button tw-followCard-button-following' 
    : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

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
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                    </button>
            </aside>
        </article>
    )
}

// Validación de las propiedades
TwitterFollowCard.propTypes = {
    username: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    initialIsFollowing: PropTypes.bool
};