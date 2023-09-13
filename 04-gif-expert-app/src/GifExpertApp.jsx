import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball'])

    const onAddCategory = () => {
        // categories.push('valorant')
        setCategories(['Death Note', ...categories])
        // setCategories((cat)=> ["Death Note", ...cat])
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* inputs */}

    {/* listado de Gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
        {categories.map((category)=> <li key={category}>{category}</li> )}
        {/* <li>ABC</li> */}
    </ol>


    </>
  )
}
