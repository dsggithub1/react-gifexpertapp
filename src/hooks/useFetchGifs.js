//ESTO ES UN CUSTOM HOOK


import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category)=>{

    //por primera vez estará cargando
    const [state, setstate] = useState({
        data:[],
        loading: true

    });

    useEffect(()=>{

        //getGifs regresa una promesa, entonces se usa el then porque effect no puede usar async
        getGifs(category).then( imgs=>{

            //setTimeout(() => {

                console.log(imgs)
            
                setstate({
                    data: imgs,
                    loading: false
                });

            //}, 3000);


        })

    },[category])

    /* setTimeout(() => {

        setstate({
            data:[1,2,3,4],
            loading: false

        });
        
    }, 3000); */

    //state es solo un nombre que puede ser cualquiera

    return state; //{data:[], loading:true}
}