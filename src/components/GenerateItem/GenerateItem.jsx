import './GenerateItem.scss';
import React from 'react';
import GenerateImage from '../GenerateImage/GenerateImage';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/CartItemSlice';

const GenerateItem = ({ item }) => {
    const cartItems = useSelector((state) => state.cart_items.items);
    const dispatch = useDispatch();

    const addItemsHandler = (e) => {
        const id = e.target.id;
        dispatch(addToCart({ id, name: item.name, image: item.item_image_thumb_url, price: item.display_price }));
    }
    const removeItemsHandler = (e) => {
        const id = e.target.id;
        dispatch(removeFromCart({ id }));
    }

    return (
        <div className='item' id={item.id}>
            <div className='item-images'>
                {item.item_image_thumb_url && <div className='main-image'> <GenerateImage url={item.item_image_thumb_url} alt={item.name} /> </div>}
                <img className='tag-image' src={item.item_tag_image} alt='' />

                <div className='add-to-cart'>
                    {
                        !cartItems[item.id] ? <button className='add-button' id={item.id} onClick={addItemsHandler}>ADD</button> :
                            <>
                                <button className='minus-button' id={item.id} onClick={removeItemsHandler}>-</button>
                                <span className='count'>{cartItems[item.id].quantity}</span>
                                <button className='plus-button' id={item.id} onClick={addItemsHandler}>+</button>
                            </>
                    }
                </div>
            </div>

            <div className='item-details'>
                <h4 className='item-name'>{item.name}</h4>

                {item.tag_objects[0] &&
                    <div className='tags'>
                        {
                            item.tag_objects.map((eachTagObj, index) => {
                                return <div className='tag' key={index} style={{ backgroundColor: eachTagObj.title.text === "BESTSELLER" ? "rgb(244, 162, 102)" : "rgb(83, 140, 238)" }}>
                                    {eachTagObj.title.text}
                                </div>
                            })
                        }
                    </div>
                }

                <div className='votes'>
                    <div className='vote-stars'>
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                    </div>
                    <span className='vote-text'>{item.rating?.total_rating_text}</span>
                </div>
                <div className='item-price'>₹{item.display_price}</div>
                <div className='item-description'>{item.desc}</div>
            </div>
        </div>
    )
}

export default GenerateItem;