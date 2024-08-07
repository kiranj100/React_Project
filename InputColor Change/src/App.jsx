import InputSections from "./components/InputSections";
import SquareBox from "./components/SquareBox";
import { useState } from "react";
function App() {
  const [colorValue, setColorValue] = useState("");
  return (
    <>
      <main
        className="flex flex-col h-screen w-full items-center 
      justify-center gap-7 "
      >
        <SquareBox colorValue={colorValue} />
        <InputSections colorValue={colorValue} setColorValue={setColorValue} />
      </main>
    </>
  );
}

export default App;
