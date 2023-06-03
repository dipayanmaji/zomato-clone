import './RestaurantLoading.scss';
import React from 'react';
import LazyLoading from '../LazyLoading/LazyLoading';

const RestaurantLoading = () => {
    return (
        <div className='restaurant-loading'>
            <section className='top-section'><LazyLoading /></section>

            <section className='bottom-section'>
                <section className='left-section'>
                    <div className='large'><LazyLoading /></div>
                    <div className='small'><LazyLoading /></div>

                    <div className='small-box-collection'>
                        <div className='small-box'><LazyLoading /></div>
                        <div className='small-box'><LazyLoading /></div>
                        <div className='small-box'><LazyLoading /></div>
                    </div>

                    <div className='medium'><LazyLoading /></div>

                    <div className='small-collection'>
                        <div className='small'><LazyLoading /></div>
                        <div className='small'><LazyLoading /></div>
                        <div className='small'><LazyLoading /></div>
                    </div>

                    <div className='together-collection'>
                        <div className='collection'>
                            <div className='large-box'><LazyLoading /></div>
                            <div className='thin-large'><LazyLoading /></div>
                            <div className='thin-small'><LazyLoading /></div>
                        </div>

                        <div className='collection'>
                            <div className='large-box'><LazyLoading /></div>
                            <div className='thin-large'><LazyLoading /></div>
                            <div className='thin-small'><LazyLoading /></div>
                        </div>
                    </div>
                </section>

                <section className='right-section'>
                    <div className='small'><LazyLoading /></div>
                    <div className='medium'><LazyLoading /></div>
                    <div className='small'><LazyLoading /></div>

                    <div className='collection'>
                        <div className='large-box'><LazyLoading /></div>
                        <div className='thin-large'><LazyLoading /></div>
                        <div className='thin-small'><LazyLoading /></div>
                    </div>

                    <div className='small-collection'>
                        <div className='small'><LazyLoading /></div>
                        <div className='small'><LazyLoading /></div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default RestaurantLoading;