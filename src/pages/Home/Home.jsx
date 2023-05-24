import React, { useState } from 'react'
import './Home.css';
import OrderType from '../../components/OrderType/OrderType';
import FoodFilters from '../../components/FoodFilters/FoodFilters';

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

import biryani from '../../utils/images/inspirationFood/biryani.avif';
import pizza from "../../utils/images/inspirationFood/pizza.avif";
import chicken from "../../utils/images/inspirationFood/chicken.webp";
import burger from "../../utils/images/inspirationFood/burger.avif";
import rolls from "../../utils/images/inspirationFood/rolls.avif";
import friedRice from "../../utils/images/inspirationFood/friedRice.avif";
import thali from "../../utils/images/inspirationFood/thali.avif";
import noodles from "../../utils/images/inspirationFood/noodles.avif";
import cake from "../../utils/images/inspirationFood/cake.avif";
import iceCream from "../../utils/images/inspirationFood/iceCream.avif";
import momos from "../../utils/images/inspirationFood/momos.avif";
import idli from "../../utils/images/inspirationFood/idli.avif";
import GenerateImage from '../../components/GenerateImage/GenerateImage';

const inspirationFoods = [
    { imageUrl: biryani, title: "Biryani" },
    { imageUrl: pizza, title: "Pizza" },
    { imageUrl: chicken, title: "Chicken" },
    { imageUrl: burger, title: "Burger" },
    { imageUrl: rolls, title: "Rolls" },
    { imageUrl: friedRice, title: "Fried Rice" },
    { imageUrl: thali, title: "Thali" },
    { imageUrl: noodles, title: "Noodles" },
    { imageUrl: cake, title: "Cake" },
    { imageUrl: iceCream, title: "Ice Cream" },
    { imageUrl: momos, title: "Momos" },
    { imageUrl: idli, title: "Idli" }
]
const brands = [
    { imageUrl: "../../utils/images/brands/wowMomo.avif", title: "WOW! Momo", time: "24 min" },
    { imageUrl: "../../utils/images/brands/dominosPizza.avif", title: "Domino's Pizza", time: "40 min" },
    { imageUrl: "../../utils/images/brands/kfc.avif", title: "KFC", time: "31 min" },
    { imageUrl: "../../utils/images/brands/burgerKing.avif", title: "Burger King", time: "28 min" },
    { imageUrl: "../../utils/images/brands/arsalan.avif", title: "Arsalan", time: "35 min" },
    { imageUrl: "../../utils/images/brands/pizzaHut.avif", title: "Pizza Hut", time: "33 min" },
    { imageUrl: "../../utils/images/brands/kwalityWalls.avif", title: "Kwality Wall’s Frozen Dessert and Ice Cream Shop", time: "38 min" },
    { imageUrl: "../../utils/images/brands/laPinozPizza.avif", title: "La Pino'z Pizza", time: "30 min" },
    { imageUrl: "../../utils/images/brands/subway.avif", title: "Subway", time: "27 min" },
    { imageUrl: "../../utils/images/brands/edabba.avif", title: "Edabba", time: "29 min" },
]

function Home() {
    const [scrollLength, setScrollLength] = useState(0);

    const prevScroolHandler = () => {
        setScrollLength(scrollLength + 189);
    }
    const nextScroolHandler = () => {
        setScrollLength(scrollLength - 189);
    }

    return (
        <div className='home'>

            <OrderType />
            <FoodFilters />

            <div className='inspiration-foods-container'>
                <div className='inspiration-foods-items'>
                    <h3>Inspiration for your first order</h3>
                    {scrollLength < 0 && <section className='scroll-btn' id='prev-btn' onClick={prevScroolHandler}><MdOutlineArrowBackIos /></section>}
                    <section className='all-food-items-container'>
                        <div className='all-food-items' style={{ transform: `translate(${scrollLength}px)` }}>
                        {
                            inspirationFoods.map((item, index) => {
                                return <div className='item-container' key={index}>
                                    <div className='item-image-div'>
                                        <GenerateImage url={item.imageUrl} alt={item.title} />
                                    </div>
                                    <span className='item-title'>{item.title}</span>
                                </div>
                            })
                        }
                        </div>
                    </section>

                    {scrollLength > -1134 && <section className='scroll-btn' id='next-btn' onClick={nextScroolHandler}><MdOutlineArrowForwardIos /></section>}
                </div>
            </div>
        </div>
    )
}

export default Home;