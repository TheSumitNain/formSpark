import React from 'react';

const BtnList = ({ filterItem, cateItem }) => {
    return (
        <>
            <div className='btns'>
                <div className='btn_list'>
                    {cateItem.map((curElem, index) => {
                        return <button className='buttons' key={index} onClick={() => filterItem(curElem)}>{curElem}</button>;
                    })}
                    {/* <button className='buttons' onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className='buttons' onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className='buttons' onClick={() => filterItem("evening")}>Evening</button>
                    <button className='buttons' onClick={() => filterItem("dinner")}>Dinner</button> */}
                    {/* <button className='buttons' onClick={() => setItems(Menu)}>All</button> */}
                </div>
            </div>
        </>

    )
};

export default BtnList;
