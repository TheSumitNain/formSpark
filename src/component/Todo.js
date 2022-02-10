import React, { useState } from "react";


const Practice = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert("please fill the data");
        } else if (inputData && !toggleBtn) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleBtn(true);
            setInputData('');
            setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData };
            setItems([...items, allInputData]);
            setInputData("");
        }
    }

    const editItem = (id) => {
        const newEditItem = items.find((elem) => {
            return elem.id === id;
        });
        setToggleBtn(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    }

    const removeItem = (ind) => {
        const updateData = items.filter((elm) => {
            return ind !== elm.id;
        });
        setItems(updateData);
    }

    const removeAll = () => {
        setItems([]);
    };

    return (
        <>
            <div className="main_div">
                <div className="child_div">
                    <div className="addItems">
                        <input type="text" placeholder="add item..." value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                            toggleBtn ? <button onClick={addItem}>add</button> :
                                <button onClick={addItem}>edit</button>
                        }
                    </div>
                    {
                        items.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.name}</h3>
                                    <div>
                                        <button onClick={() => editItem(elem.id)}>edit</button>
                                        <button onClick={() => removeItem(elem.id)}>remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="removeAll">
                        <button onClick={removeAll}>Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Practice;