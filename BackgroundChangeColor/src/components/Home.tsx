import { useState, useEffect } from "react";

function Home() {
  const [selectedColor, setSelectedColor] = useState(null); // Stores selected color

  const colorChange = (color: any) => {
    setSelectedColor(color === selectedColor ? null : color); // Toggle selection
  };

  useEffect(() => {
    // Change the background color of the body based on the selected color
    if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
    } else {
      document.body.style.backgroundColor = ""; // Reset to default
    }
  }, [selectedColor]);

  return (
    <div className="flex gap-10 items-center justify-center h-screen w-full">
      <span
        onClick={() => colorChange("green")}
        className={`w-40 h-40 ring-2 ring-black inline-flex text-center items-center
        font-bold bg-green-500 justify-center cursor-pointer font-bold${
          selectedColor === "green" ? "bg-green-700" : ""
        }`}
      >
        Green
      </span>
      <span
        onClick={() => colorChange("blue")}
        className={`w-40 h-40 ring-2  ring-black inline-flex text-center items-center
        font-bold bg-blue-500 justify-center cursor-pointer font-bold${
          selectedColor === "blue" ? "bg-blue-700" : ""
        }`}
      >
        Blue
      </span>
      <span
        onClick={() => colorChange("yellow")}
        className={`w-40 h-40 ring-2 ring-black inline-flex text-center items-center
        font-bold bg-yellow-500 justify-center cursor-pointer font-bold${
          selectedColor === "yellow" ? "bg-yellow-700" : ""
        }`}
      >
        Yellow
      </span>
      <span
        onClick={() => colorChange("orange")}
        className={`w-40 h-40 ring-2  ring-black  inline-flex text-center items-center
        font-bold bg-orange-500 justify-center cursor-pointer font-bold${
          selectedColor === "orange" ? "bg-orange-700" : ""
        }`}
      >
        Orange
      </span>
    </div>
  );
}

export default Home;
