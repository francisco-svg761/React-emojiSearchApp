import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const inputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit= {handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={inputChange}
            />
        </form>
    )
}
