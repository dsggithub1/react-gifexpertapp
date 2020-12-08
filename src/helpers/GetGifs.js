

export const getGifs=async ( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=XR4CoA7iJJ2Hpt8rOoy7tkEZZ8iM9IkQ`;
    const resp = await fetch(url);

    //const data = await resp.json();

    const {data} = await resp.json();

    const gifs = data.map((image)=>{

        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        }
    })

    //console.log(gifs);

    //setImages(gifs);

    return gifs;
    

}