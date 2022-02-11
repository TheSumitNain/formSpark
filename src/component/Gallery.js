import React, { useState } from 'react';
import BtnList from './BtnList';
import Cards from './Cards';
import Menu from './menu';

const allCategory = [...new Set(Menu.map((curElem) => curElem.category)),"all"];
console.log(allCategory);

const Gallery = () => {

    const [items, setItems] = useState(Menu);
    const [cateItem, setCateItem] = useState(allCategory);

    const filterItem = (cateItem) => {
        if(cateItem === "all") {
            setItems(Menu);
            return;
        }
        const updatedItem = Menu.filter((curElem) => {
            return curElem.category === cateItem;
        })
        setItems(updatedItem);
    };

    return (
        <>
            <div className='heading'>
                <h1>Order Your Favourite Dish</h1>
            </div>
            <div className='hr'></div>
            <BtnList filterItem={filterItem} cateItem={cateItem} />
            <Cards items={items} />
        </>
    )
}

export default Gallery;
