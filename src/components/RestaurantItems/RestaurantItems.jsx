import './RestaurantItems.scss';
import React from 'react';
import GenerateItem from '../GenerateItem/GenerateItem';

const RestaurantItems = ({ menus, orderDetails }) => {
    return (
        <div className='restaurant-items'>
            <div className='categories-section'>
                {
                    menus.map((menuObj, index) => {
                        return <div key={index} className='category-name'>
                            {menuObj.menu.name} ({menuObj.menu.categories[0].category.items.length})
                        </div>
                    })
                }
            </div>
            <div className='items-section'>
                <div className='heading'></div>
                <div className='promocodes'></div>

                {
                    menus.map((menuObj, index) => {
                        return <div key={index} className='category-wise'>
                            <h4 className='category-name'>{menuObj.menu.name}</h4>
                            {
                                menuObj.menu.categories[0].category.items.map((itemObj, index) =>
                                    <GenerateItem key={index} item={itemObj.item} />
                                )
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantItems;