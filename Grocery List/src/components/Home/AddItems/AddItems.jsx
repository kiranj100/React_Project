import { FaPlus } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import { useRef } from "react";

function AddItems({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form
      className="flex  items-center justify-center 
    gap-2 py-12"
      onSubmit={handleSubmit}
    >
      <TextField
        className="sm:w-[33rem] w-[13rem]"
        ref={inputRef}
        required
        label="Add Items"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="newItem"
        className="text-2xl ring-1 p-2
        bg-gray-400 hover:bg-lime-400"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItems;
