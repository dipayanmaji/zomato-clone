import React, { useEffect, useState } from 'react'
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

import wowMomo from "../../utils/images/brands/wowMomo.avif"
import dominosPizza from "../../utils/images/brands/dominosPizza.avif"
import kfc from "../../utils/images/brands/kfc.avif"
import burgerKing from "../../utils/images/brands/burgerKing.avif"
import arsalan from "../../utils/images/brands/arsalan.avif"
import pizzaHut from "../../utils/images/brands/pizzaHut.avif"
import kwalityWalls from "../../utils/images/brands/kwalityWalls.avif"
import laPinozPizza from "../../utils/images/brands/laPinozPizza.avif"
import subway from "../../utils/images/brands/subway.avif"
import edabba from "../../utils/images/brands/edabba.avif"
import Restaurants from '../../components/Restaurants/Restaurants';

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
    { imageUrl: wowMomo, title: "WOW! Momo", time: "24 min" },
    { imageUrl: dominosPizza, title: "Domino's Pizza", time: "40 min" },
    { imageUrl: kfc, title: "KFC", time: "31 min" },
    { imageUrl: burgerKing, title: "Burger King", time: "28 min" },
    { imageUrl: arsalan, title: "Arsalan", time: "35 min" },
    { imageUrl: pizzaHut, title: "Pizza Hut", time: "33 min" },
    { imageUrl: kwalityWalls, title: "Kwality Wall’s Frozen Dessert and Ice Cream Shop", time: "38 min" },
    { imageUrl: laPinozPizza, title: "La Pino'z Pizza", time: "30 min" },
    { imageUrl: subway, title: "Subway", time: "27 min" },
    { imageUrl: edabba, title: "Edabba", time: "29 min" },
]

function Home() {
    const [itemsScrollLength, setItemsScrollLength] = useState(0);
    const [brandsScrollLength, setBrandsScrollLength] = useState(0);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    const itemsPrevScroolHandler = () => {
        setItemsScrollLength(itemsScrollLength + 189);
    }
    const itemNextScroolHandler = () => {
        setItemsScrollLength(itemsScrollLength - 189);
    }

    const brandsPrevScroolHandler = () => {
        setBrandsScrollLength(brandsScrollLength + 189);
    }
    const brandsNextScroolHandler = () => {
        setBrandsScrollLength(brandsScrollLength - 189);
    }

    return (
        <div className='home'>

            <OrderType />
            <FoodFilters />

            {/* Inspiration for your first order */}
            <div className='inspiration-foods-container'>
                <div className='inspiration-foods-items'>
                    <h3>Inspiration for your first order</h3>
                    {itemsScrollLength < 0 && <section className='scroll-btn' id='prev-btn' onClick={itemsPrevScroolHandler}><MdOutlineArrowBackIos /></section>}
                    <section className='all-food-items-container'>
                        <div className='all-food-items' style={{ transform: `translate(${itemsScrollLength}px)` }}>
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
                    {itemsScrollLength > -1134 && <section className='scroll-btn' id='next-btn' onClick={itemNextScroolHandler}><MdOutlineArrowForwardIos /></section>}
                </div>
            </div>

            {/* Top brands for you */}
            <div className='brands-container'>
                <div className='brands-items'>
                    <h3>Top brands for you</h3>
                    {brandsScrollLength < 0 && <section className='scroll-btn' id='prev-btn' onClick={brandsPrevScroolHandler}><MdOutlineArrowBackIos /></section>}
                    <section className='all-brands-container'>
                        <div className='all-brands' style={{ transform: `translate(${brandsScrollLength}px)` }}>
                            {
                                brands.map((brand, index) => {
                                    return <div className='brand-container' key={index}>
                                        <div className='brand-image-div'>
                                            <GenerateImage url={brand.imageUrl} alt={brand.title} />
                                        </div>
                                        <span className='brand-title'>{brand.title}</span>
                                        <span className='brand-time'>{brand.time}</span>
                                    </div>
                                })
                            }
                        </div>
                    </section>
                    {brandsScrollLength > -756 && <section className='scroll-btn' id='next-btn' onClick={brandsNextScroolHandler}><MdOutlineArrowForwardIos /></section>}
                </div>
            </div>

            {/* Restaurants */}
            <Restaurants />

        </div>
    )
}

export default Home;