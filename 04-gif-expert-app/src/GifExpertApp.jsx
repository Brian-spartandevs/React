import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kidd keo'])

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory)
      if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // setCategories((cat)=> [newCategory, ...cat])
    }

  return (
    <>
    
    <h1 className="animate__animated animate__fadeIn">Custoom Hooks App</h1>

    <AddCategory 
     
    onNewCategory = {event => onAddCategory(event) }
    />
    
        {categories.map((category)=>(
                <GifGrid 
                key={category} 
                category={category} />
          ))
        }

    </>
  )
}
