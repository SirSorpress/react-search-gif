import { useState } from 'react'
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One piece']);

    const onAddCategory = (value) => {

        //Validar que no exista ya el valor
        if( categories.includes(value)) return; 

        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory}/>

            {categories.map((element) => (
                <GifGrid 
                    key={element}
                    category={element}
                />
            ))}
        </>
    )
}