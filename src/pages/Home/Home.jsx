import React, { useEffect, useState } from 'react'
import './Home.css';
import OrderType from '../../components/OrderType/OrderType';
import FoodFilters from '../../components/FoodFilters/FoodFilters';
import Restaurants from '../../components/Restaurants/Restaurants';

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdKeyboardArrowUp } from 'react-icons/md';

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
import { Link } from 'react-router-dom';
import CartView from '../../components/CartView/CartView';

const inspirationFoods = [
    { imageUrl: biryani, title: "Biryani", page_url: "/kolkata/arsalan-park-street-area/order/20795" },
    { imageUrl: pizza, title: "Pizza", page_url: "/kolkata/dominos-pizza-1-bara-bazar/order/18733272" },
    { imageUrl: chicken, title: "Chicken", page_url: "/kolkata/kfc-new-market-area/order/207376" },
    { imageUrl: burger, title: "Burger", page_url: "/kolkata/wow-momo-2-sealdah-area/order/19231719" },
    { imageUrl: rolls, title: "Rolls", page_url: "/kolkata/india-restaurant-kidderpore/order/207471" },
    { imageUrl: friedRice, title: "Fried Rice", page_url: "/kolkata/jai-hind-dhaba-paddapukur/order/20273" },
    { imageUrl: thali, title: "Thali", page_url: "/kolkata/daily-bhoj-topsia/order/194606538" },
    { imageUrl: noodles, title: "Noodles", page_url: "/kolkata/india-restaurant-kidderpore/order/207471" },
    { imageUrl: cake, title: "Cake", page_url: "/kolkata/kwality-walls-frozen-dessert-and-ice-cream-shop-college-street/order/203595354" },
    { imageUrl: iceCream, title: "Ice Cream", page_url: "/kolkata/kwality-walls-frozen-dessert-and-ice-cream-shop-college-street/order/203595354" },
    { imageUrl: momos, title: "Momos", page_url: "/kolkata/wow-momo-2-sealdah-area/order/19231719" },
    { imageUrl: idli, title: "Idli", page_url: "/kolkata/daily-bhoj-topsia/order/194606538" }
]
const brands = [
    { imageUrl: wowMomo, title: "WOW! Momo", time: "24 min", page_url: "/kolkata/wow-momo-2-sealdah-area/order/19231719" },
    { imageUrl: dominosPizza, title: "Domino's Pizza", time: "40 min", page_url: "/kolkata/dominos-pizza-1-bara-bazar/order/18733272" },
    { imageUrl: kfc, title: "KFC", time: "31 min", page_url: "/kolkata/kfc-new-market-area/order/207376" },
    { imageUrl: burgerKing, title: "Burger King", time: "28 min", page_url: "/kolkata/burger-king-new-market-area/order/19867842" },
    { imageUrl: arsalan, title: "Arsalan", time: "35 min", page_url: "/kolkata/arsalan-park-street-area/order/20795" },
    { imageUrl: pizzaHut, title: "Pizza Hut", time: "33 min", page_url: "/kolkata/pizza-hut-howrah-station-area-howrah/order/249812" },
    { imageUrl: kwalityWalls, title: "Kwality Wall’s Frozen Dessert and Ice Cream Shop", time: "38 min", page_url: "/kolkata/kwality-walls-frozen-dessert-and-ice-cream-shop-college-street/order/203595354" },
    { imageUrl: laPinozPizza, title: "La Pino'z Pizza", time: "30 min", page_url: "/kolkata/la-pinoz-pizza-camac-street-area/order/195702102" },
    { imageUrl: subway, title: "Subway", time: "27 min", page_url: "/kolkata/subway-theatre-road/order/18398878" },
    { imageUrl: edabba, title: "Edabba", time: "29 min", page_url: "/kolkata/edabba-esplanade/order/19137878" },
]

function Home({ filterType, setFilterType }) {
    const [itemsScrollLength, setItemsScrollLength] = useState(0);
    const [brandsScrollLength, setBrandsScrollLength] = useState(0);
    const [displayGoToTopBtn, setDisplayGoToTopBtn] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 2400) {
            setDisplayGoToTopBtn(true);
        }
        else {
            setDisplayGoToTopBtn(false);
        }
    })

    useEffect(() => {
        document.title = "Zomato Clone"
        setTimeout(() => { //without setTimeout window scroll did not work here, that's why I use setTimeout
            window.scrollTo(0, 0);
        }, 0)
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
            <FoodFilters filterType={filterType} setFilterType={setFilterType} />

            {/* Inspiration for your first order */}
            {!filterType && <div className='inspiration-foods-container'>
                <div className='inspiration-foods-items'>
                    <h3>Inspiration for your first order</h3>
                    {itemsScrollLength < 0 && <section className='scroll-btn' id='prev-btn' onClick={itemsPrevScroolHandler}><MdOutlineArrowBackIos /></section>}
                    <section className='all-food-items-container'>
                        <div className='all-food-items' style={{ transform: `translate(${itemsScrollLength}px)` }}>
                            {
                                inspirationFoods.map((item, index) => {
                                    return <Link className='item-container' key={index} to={item.page_url}>
                                        <div className='item-image-div'>
                                            <GenerateImage url={item.imageUrl} alt={item.title} />
                                        </div>
                                        <span className='item-title'>{item.title}</span>
                                    </Link>
                                })
                            }
                        </div>
                    </section>
                    {itemsScrollLength > -1134 && <section className='scroll-btn' id='next-btn' onClick={itemNextScroolHandler}><MdOutlineArrowForwardIos /></section>}
                </div>
            </div>}

            {/* Top brands for you */}
            {!filterType && <div className='brands-container'>
                <div className='brands-items'>
                    <h3>Top brands for you</h3>
                    {brandsScrollLength < 0 && <section className='scroll-btn' id='prev-btn' onClick={brandsPrevScroolHandler}><MdOutlineArrowBackIos /></section>}
                    <section className='all-brands-container'>
                        <div className='all-brands' style={{ transform: `translate(${brandsScrollLength}px)` }}>
                            {
                                brands.map((brand, index) => {
                                    return <Link className='brand-container' key={index} to={brand.page_url}>
                                        <div className='brand-image-div'>
                                            <GenerateImage url={brand.imageUrl} alt={brand.title} />
                                        </div>
                                        <span className='brand-title'>{brand.title}</span>
                                        <span className='brand-time'>{brand.time}</span>
                                    </Link>
                                })
                            }
                        </div>
                    </section>
                    {brandsScrollLength > -756 && <section className='scroll-btn' id='next-btn' onClick={brandsNextScroolHandler}><MdOutlineArrowForwardIos /></section>}
                </div>
            </div>}

            {/* Restaurants */}
            <Restaurants filterType={filterType} />

            {/* go to top button */}
            <button className='goToTop-btn' style={{
                opacity: displayGoToTopBtn && 1,
                visibility: displayGoToTopBtn && "visible"
            }} onClick={() => window.scrollTo(0, 0)}><MdKeyboardArrowUp /></button>

            {/* cart view */}
            <CartView />
        </div>
    )
}

export default Home;