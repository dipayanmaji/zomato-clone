import React from 'react'

function Image({url}) {
    return (
        <img src={url} alt='pic' loading='lazy' />
    )
}

export default Image;