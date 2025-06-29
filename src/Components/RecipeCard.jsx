import React from "react";
import { useState } from "react";
import { Modal, Box } from "@mui/material";

function RecipeCard({ title, image, prepTimeMinutes, rating, instructions, ingredients }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" bg-white shadow-md rounded-lg p-4 m-4">
      <img
        src={image}
        alt={title}
        className="w-300 h-60 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">Time to cook: {prepTimeMinutes} mins</p>
      <p>Rating: 
      <div className="ounded-full border border-gray px-4 py-2">{rating}</div></p>
      <button onClick={handleOpen} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >
        Instructions
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-[100%] max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ol className="list-decimal text-gray-700 m-5">
              {ingredients.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <ol className="list-decimal text-gray-700 m-5">
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          <button onClick={handleClose} className="mt-4 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800" >
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default RecipeCard;
