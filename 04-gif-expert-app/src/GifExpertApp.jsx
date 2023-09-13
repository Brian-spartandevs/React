import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball'])

console.log(categories)

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* inputs */}

    {/* listado de Gif */}
    {/* Gif Item */}
    <ol>
        {categories.map((category)=> <li key={category}>{category}</li> )}
        {/* <li>ABC</li> */}
    </ol>


    </>
  )
}
