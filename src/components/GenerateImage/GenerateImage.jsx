import React, { useEffect, useState } from 'react'
import defaultImage from '../../utils/images/placeholder.webp';
import LazyLoading from '../LazyLoading/LazyLoading';

function GenerateImage({ url, alt }) {
    const [loaded, setLoaded] = useState(false);
    const replaceImage = (e) => {
        setLoaded(true);
        e.target.src = defaultImage;
    }
    const displayImage = () => {
        setLoaded(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000)
    }, [])

    return (
        <>
            {!loaded && <LazyLoading />}

            <img style={{ display: !loaded ? 'none' : 'block' }}
                src={url} alt={alt}
                loading='lazy'
                onLoad={displayImage}
                onError={replaceImage}
            />
        </>
    )
}

export default GenerateImage;