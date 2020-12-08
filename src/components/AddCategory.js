import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('') //si se inicia con vacio sera undefined y marcara error

    const handleInputValue = (e)=>{

        console.log(e.target.value)

        setinputValue(e.target.value)
    }

    const handleSubmit=(e)=>{

        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories( cats=> [inputValue, ...cats ]);
            setinputValue('');
        }

        console.log('submit hecho');

        

    }

    return (
        <form onSubmit={handleSubmit}>

        <input
            type="text"
            value={inputValue}
            onChange={ handleInputValue}
        />
            
        </form>
    )
}



AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}