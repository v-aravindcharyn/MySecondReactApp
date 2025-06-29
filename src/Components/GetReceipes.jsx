import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

function GetReceipes() {
  const [recipes, setRecipes] = useState([]);

  function fetchReceipesData() {
    fetch(`https://dummyjson.com/recipes`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        //alert(data.recipes);
        console.log(data.recipes);
      })      
      .catch((error) => {
        console.error("Error fetching city data:", error);
        alert("Error fetching data. Please try again." + { city });
      });
  }

  useEffect(() => {
    fetchReceipesData();
  }, [recipes]);

  return (
    <div className=' m-auto max-w-5xl'>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {
                  recipes.map((v,i) => (
                      <RecipeCard key={v.id} title={v.name} image={v.image} prepTimeMinutes={v.prepTimeMinutes} rating={v.rating} instructions={v.instructions} ingredients={v.ingredients} />
                  ))
              }
        </div>
    </div>
  )
}

export default GetReceipes;
