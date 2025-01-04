import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({username, children, isFollowing}) {
    const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1];
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button tw-followCard-button-following' 
    : 'tw-followCard-button';

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
                <button className={buttonClassName}>{text}</button>
            </aside>
        </article>
    )
}

// Validación de las propiedades
TwitterFollowCard.propTypes = {
    username: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired
};