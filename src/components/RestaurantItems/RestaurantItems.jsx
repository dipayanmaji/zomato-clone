import './RestaurantItems.scss';
import React, { useCallback, useEffect, useState } from 'react';
import GenerateItem from '../GenerateItem/GenerateItem';
import { RiCompass3Line } from 'react-icons/ri';
import { RxClock } from 'react-icons/rx';

const RestaurantItems = ({ menuList, orderDetails }) => {
    const [currCategory, setCurrCategory] = useState(menuList.menus[0].menu.id);
    let [offsets, setOffsets] = useState({});

    const categoryClicked = (e) => {
        setCurrCategory(e.target.id);
        window.scrollTo(0, offsets[e.target.id].offsetTop - 55); // 55px down from top
    }

    const refHandler = useCallback((e) => {
        try {
            offsets[e.id] = e;
        }
        catch (err) {
            // console.log(err);
        }
    }, [])

    document.addEventListener("scroll", scrollHandler);
    function scrollHandler() {
        for (const key in offsets) {
            if (offsets[key].offsetTop - 60 <= window.pageYOffset) { // 60px down from top
                setCurrCategory(key);
            }
        }
    }

    useEffect(() => {
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    return (
        <div className='restaurant-items'>
            <div className='categories-section'>
                {
                    menuList.menus.map((menuObj, index) => {
                        return <div id={menuObj.menu.id} key={index} className={`category-name ${currCategory == menuObj.menu.id && "selected-category"}`} onClick={categoryClicked}>
                            {menuObj.menu.name} ({
                                menuObj.menu.categories.reduce((total, categoryObj) => {
                                    return total += categoryObj.category.items.length
                                }, 0)
                            })
                        </div>
                    })
                }
            </div>
            <div className='items-section'>
                <div className='heading'>
                    <RiCompass3Line />
                    <span className='tracking-text'>{orderDetails.trackingText}</span> |
                    <RxClock />
                    <span className='delivery-time'>{orderDetails.deliveryTime}</span>
                </div>
                <div className='promocodes'>
                    {
                        menuList.promosOnMenu.promos.map((promo, index) => {
                            return <div className='promo' key={index}>
                                <span className='title'>{promo.titleObj.text}</span>
                                <span className='voucher'>use code {promo.voucher_code}</span>
                            </div>
                        })
                    }
                </div>

                {
                    menuList.menus.map((menuObj, index) => {
                        return <div key={index} className='category-wise' id={menuObj.menu.id} ref={refHandler}>
                            <h4 className='category-name'>{menuObj.menu.name}</h4>
                            {
                                menuObj.menu.categories.map((categoryObj, index) => {
                                    return <div className='semi-category' key={index}>
                                        {categoryObj.category.name && <p className='semi-category-name'>{categoryObj.category.name}</p>}
                                        {
                                            categoryObj.category.items.map((itemObj, index) =>
                                                <GenerateItem key={index} item={itemObj.item} />
                                            )
                                        }
                                        <hr className='category-divider' />
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantItems;