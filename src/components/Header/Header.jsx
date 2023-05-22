import './Header.css';
import React from 'react';
import zomato from '../../utils/images/zomato.png'

const Header = ()=>{
    return(
        <div className='header-container'>
            <div className='header'>
                <img id='logo' src={zomato} alt="Zomato" />

                <div className='search-container'>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;