import React, { useState } from 'react'
import defaultImage from '../../utils/images/placeholder.webp';
import LazyLoading from '../LazyLoading/LazyLoading';

function GenerateImage({ url, alt, title }) {
    const [loading, setLoading] = useState(true);

    const replaceImage = (e) => {
        e.target.src = defaultImage;
        setLoading(false);
    }
    const displayImage = (e) => {
        setLoading(false);
    }

    return (
        <>
            {loading && <LazyLoading />}
            <img style={{ display: loading ? "none" : "block" }}
                src={url} alt={alt}
                onLoad={displayImage}
                onError={replaceImage}
                title={title}
            // loading='lazy'
            />
        </>
    )
}

export default GenerateImage;