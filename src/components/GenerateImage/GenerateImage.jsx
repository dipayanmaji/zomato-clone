import React, { useState } from 'react'
import defaultImage from '../../utils/images/placeholder.webp';
import LazyLoading from '../LazyLoading/LazyLoading';

function GenerateImage({ url, alt }) {
    const [loaded, setLoaded] = useState(false);
    const replaceImage = (e) => {
        e.target.src = defaultImage;
    }
    return (
        <>
            <img style={{ display: !loaded ? 'none' : 'block', height: 'inherit', width: 'inherit', borderRadius: '50%', objectFit: 'cover' }}
                src={url} alt={alt}
                loading='lazy'
                onError={replaceImage}
                onLoad={() => setLoaded(true)}
            />
            {!loaded && <LazyLoading />}
        </>
    )
}

export default GenerateImage;