import { useState } from 'react';

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newValue = inputValue.trim();

        //Validar que no mande vacio
        if(newValue.length < 1) return;

        onAddCategory(newValue);
        setInputValue(''); //limpia el buscador
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Search gifs"
                value={inputValue}
                onChange={onInputChange}
            />

            {/* <button type="submit">Enviar</button> */}
        </form>
    )
}