import './GenerateItem.scss';
import React from 'react';

const GenerateItem = ({ item }) => {
    return (
        <div className='item'>
            {item.name}
        </div>
    )
}

export default GenerateItem;