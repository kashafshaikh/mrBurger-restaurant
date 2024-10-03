"use client";

import { useState } from "react";

export default function Menu() {
  // Array to track the quantity of each item
  const [quantities, setQuantities] = useState(Array(12).fill(0));

  // Handler for adding items to the cart
  const addHandler = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  // Handler for removing items from the cart
  const removeHandler = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  // Menu items data
  const menuItems = [
    {
      name: "Beef Burger",
      description: "Juicy beef patty, fresh lettuce, and tomatoes in a toasted bun.",
      price: 20.99,
      oldPrice: 29.99,
      image: "/burger-menu.jpg",
    },
    {
      name: "Chicken Biryani",
      description: "Fragrant basmati rice layered with marinated meat and aromatic spices.",
      price: 30.99,
      oldPrice: 35.99,
      image: "/biryani.jpg",
    },
    {
      name: "Italian Pizza",
      description: "Classic Italian pizza topped with cheese and your choice of fresh toppings.",
      price: 25.99,
      oldPrice: 29.99,
      image: "/pizza.jpg",
    },
    {
      name: "Crispy Broast",
      description: "Crispy fried chicken, marinated in special spices and cooked to golden perfection.",
      price: 20.99,
      oldPrice: 25.99,
      image: "/broast.jpg",
    },
    {
      name: "Chicken Sandwich",
      description: "Crispy fried chicken breast with creamy mayo and crisp lettuce in a soft bun.",
      price: "15.99",
      oldPrice: "20.99",
      image: "/sandwich.jpg",
    },
    {
      name: "Seekh Kabab",
      description: "Spiced minced meat skewers grilled to perfection.",
      price: "18.99",
      oldPrice: "23.99",
      image: "/seekh-kabab.jpg",
    },
    {
      name: "Creamy Pasta",
      description: "Creamy pasta in a rich white sauce with garlic and cheese.",
      price: "15.99",
      oldPrice: "20.99",
      image: "/pasta.jpg",
    },
    {
      name: "Chicken Tikka",
      description: "Tender grilled meat glazed with smoky barbecue sauce.",
      price: "25.99",
      oldPrice: "28.99",
      image: "/tikka.jpg",
    },
    {
      name: "Fried Fish",
      description: "Tender grilled meat glazed with smoky barbecue sauce.",
      price: "30.99",
      oldPrice: "35.99",
      image: "/fish.jpg",
    },
    {
      name: "Gulab Jamun",
      description: "Soft dough balls soaked in rose-flavored syrup.",
      price: "12.99",
      oldPrice: "20.99",
      image: "/gulab-jamun.jpg",
    },
    {
      name: "Pancake",
      description: "Fluffy pancakes with maple syrup and whipped cream.",
      price: "14.99",
      oldPrice: "18.99",
      image: "/pancake.jpg",
    },
    {
      name: "Ice Cream",
      description: "Creamy ice cream available in various flavors to satisfy your sweet tooth.",
      price: "16.99",
      oldPrice: "20.99",
      image: "/icecream.jpg",
    },
];
        
  return (
    <div className="text-white relative top-[100px]">
      <h1 className="text-5xl text-center font-bold mb-20">
        OUR <span className="text-yellow-400">MENU</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto justify-center w-full items-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border-yellow-400 border-4 flex flex-col items-center justify-center p-10"
          >
            <img
              src={item.image}
              className="h-[250px] w-[250px] shadow-lg"
              alt={item.name}
            />
            <h3 className="my-4 font-semibold text-[25px] text-yellow-400">
              {item.name}
            </h3>
            <p className="text-[18px] font-semibold">{item.description}</p>
            <p className="mt-4 text-3xl">
              ${item.price}{" "}
              <span className="ml-3 text-2xl font-extralight line-through">
                ${item.oldPrice}
              </span>
            </p>
            <button className="bg-yellow-500 mt-6 px-4 py-2 rounded-lg text-[18px] font-semibold shadow-lg hover:bg-yellow-800 animate-bounce-on-hover">
              Add to Cart
            </button>
            <div className="flex items-center mt-6">
              <button
                className="bg-yellow-500 px-4 py-2 mx-3 rounded-lg font-bold text-[20px] shadow-lg hover:bg-yellow-800"
                onClick={() => addHandler(index)}
              >
                +
              </button>
              <h1>{quantities[index]}</h1>
              <button
                className="bg-yellow-500 px-4 py-2 mx-3 rounded-lg text-[20px] font-bold shadow-lg hover:bg-yellow-800"
                onClick={() => removeHandler(index)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <div className="pb-[110px]"></div>
      </div>
    </div>
  );
}



