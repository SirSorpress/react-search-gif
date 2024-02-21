import { GifItem } from "./GifItem";
import { useFechGifs } from "../hooks/useFechGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFechGifs(category);

    return (
        <div>
            <h3>{category}</h3>

            { isLoading && (<h2>Cargando...</h2>) }

            <div className="card-grid">
                {images.map( image => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </div>
    )
}