import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ["Food"]);

   /*  const handleAdd= () =>{
        setCategories([...categories,"HunterXHunter"]);
    } */


  return (
    <>
      <h2>GifsApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(category => 
          <GifGrid key={category} category={category}/>
          )
        }
      </ol>
    </>
  );
};
export default GifExpertApp;
