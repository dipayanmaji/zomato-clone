import './GenerateImage.css';
import React, { useEffect, useRef, useState } from 'react'
import defaultImage from '../../utils/images/placeholder.webp';
import LazyLoading from '../LazyLoading/LazyLoading';

function GenerateImage({ url, alt }) {
    const [loaded, setLoaded] = useState(false);
    const imageRef = useRef();
    const replaceImage = (e) => {
        setLoaded(true);
        e.target.src = defaultImage;
    }
    const displayImage = () => {
        scrollHandler();
    }

    document.addEventListener("scroll", scrollHandler);
    function scrollHandler() {
        try {
            if ((window.pageYOffset + (window.innerHeight - 100) >= imageRef.current.offsetParent.offsetTop)) {
                setLoaded(true);
            }
        }
        catch (err) {
            // console.log(err);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            scrollHandler();
        }, 1500)
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    return (
        <div className='lazy-image' ref={imageRef}>
            {!loaded && <LazyLoading />}

            <img style={{ display: !loaded ? "none" : "block" }}
                src={url} alt={alt}
                loading='lazy'
                onLoad={displayImage}
                onError={replaceImage}
            />
        </div>
    )
}

export default GenerateImage;