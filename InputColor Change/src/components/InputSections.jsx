import React from "react";

function InputSections({ colorValue, setColorValue }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-center"
    >
      <input
        autoFocus
        type="text"
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
        className="py-3 px-3 border-2 border-black shadow-xl rounded-lg w-96 text-2xl"
        placeholder="Enter Color Name"
      />
    </form>
  );
}

export default InputSections;
