import React from 'react';

function SkipLink({page}) {
    return (
        <a className='skip-to-content-link' href={`#${page}`} aria-label='Skip to Content'>
            Skip to content
        </a>
    );
}

export default SkipLink;
