import React from 'react';

const Cards = ({items}) => {
    return (
        <>
<div className='cards'>
                {
                    items.map((elem) => {

                        const { id, name, image, category, price, describtion } = elem;
                        return (
                            <div className='card' key={id}>
                                <div className='logo'>
                                    <img src={image} alt='pic' />
                                 </div>
                                <div className='describtion'>
                                    <h4>{name}</h4>
                                    <p>{describtion}</p>
                                    <div className='order'>
                                        <h3>Price: {price}</h3>
                                        <button>Order Now</button>
                                    </div>
                                    <p className='lastLine'>*Prices may vary on selected Date</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </>
    )
};

export default Cards;
