import './GenerateItem.scss';
import React from 'react';
import GenerateImage from '../GenerateImage/GenerateImage';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const GenerateItem = ({ item }) => {
    return (
        <div className='item' id={item.id}>
            <div className='item-images'>
                {item.item_image_thumb_url && <div className='main-image'> <GenerateImage url={item.item_image_thumb_url} alt={item.name} /> </div>}
                <img className='tag-image' src={item.item_tag_image} style={{ position: !item.item_image_thumb_url && "unset" }} />
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