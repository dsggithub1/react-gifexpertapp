//import React, { useState , useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {

    

    //const [count, setCount] = useState(0);

    //const [images, setImages] = useState([])

    //const state = useFetchGifs();
    //la linea anterior puede ser: const { data, loading} = useFetchGifs();

    const {data:images,loading} = useFetchGifs(category);

    console.log(loading);



    //ejecuta la funcion getGifs solo cuando el componente es ejecutado la 1a vez
    //el array vacio implica que tiene ninguna dependencia

    /* useEffect(()=>{
        getGifs( category ).then(  setImages  ); //el anterior es lo mismo: ( imgs=> setImages(imgs) );
    },[category]); */

    

    //getGifs();

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {/* { loading? 'Cargando':'Fin de carga'} */}

        {loading && <p className="animate__animated animate__flash">Cargando imagenes...</p>}

         <div className="card-grid"> 

                {/* {images.map((image)=>{

                return <li key= {image.id}> {image.title}</li>

                })} */}

                {/*desestructurando el objeto que llega se referncia directamente el campo*/}

                 {/* {images.map(({id, title})=>{

                    //return <li key= {id}> {title}</li>

                })} */}
                
                {
                    images.map( img=>(

                        <GifGridItem 

                        key = {img.id}
                        
                        // Se puede enviar como img y recibir un objeto ó como ...img y recibir cada campo
                            { ...img } 
                        /> 



                    ))
                }


           


            {/* <h3>{count}</h3>
            <button onClick={ ()=> setCount(count +1 )} ></button> */}
            
         </div> 
        </>
    )
}
