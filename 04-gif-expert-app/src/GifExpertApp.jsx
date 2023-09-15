import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball'])

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory)
      if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // setCategories((cat)=> [newCategory, ...cat])
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* inputs */}
    <AddCategory 
    // setCategories={setCategories} 
    onNewCategory = {event => onAddCategory(event) }
    />

    {/* listado de Gif */}
    
    <ol>
        {categories.map((category)=> <li key={category}>{category}</li> )}
        {/* <li>ABC</li> */}
    </ol>


    </>
  )
}
