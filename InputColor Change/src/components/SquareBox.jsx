import React from "react";

function SquareBox({ colorValue }) {
  return (
    <section
      className="flex items-center justify-center
     w-96 h-96 ring-2 ring-black shadow-md   shadow-black"
      style={{ background: colorValue }}
    >
      <p className={` text-3xl `}>
        {colorValue ? colorValue : "Empty Color Value"}
      </p>
    </section>
  );
}

// SquareBox.defaultProps = {
//   colorValue: "Empty Color Value",
// };

export default SquareBox;
