import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAsyncGifs = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // Si en el segundo parametro se le pasa un [] vacio este solo se ejecuta cuando se renderiza por primera vez el componente
    useEffect(()=>{
        getAsyncGifs();
    }, []);

    return {
        images,
        isLoading,
    }
}