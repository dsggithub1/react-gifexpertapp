import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([ 'Samurai X']);

/*     const handleAdd = ()=>{

        //setCategories([...categories,'Nuevo']); //asi reemplaza el valor de categories, no lo agrega al arreglo previemente existente

        setCategories( cats => [...cats,'Nuevo']); // se toma su ultimo estado anterior y luego se le agrega el nuevo elemento

        //las 2 opciones anteriores son validas


    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>


            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map((cat)=>(
                        // {return <li key={cat}> {cat} </li>}
                        <GifGrid 
                        key = {cat}
                        category = {cat} />
                    ))
                }
            </ol>
        </>
    )
}
