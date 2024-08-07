import { FaTrashAlt } from "react-icons/fa";

function Lists({ items, handleChange, handleDelete }) {
  return (
    <ul className="flex flex-col sm:w-[36rem] w-[15rem] py-4 gap-2">
      {items.map((item) => (
        <li
          key={item.id} // Key for the list item
          className="flex items-center bg-gray-400  
              py-1 border px-2 border-gray-300
              peer-checked:bg-blue-500 gap-5 item
              peer-checked:border-transparent"
        >
          <input
            type="checkbox"
            onChange={() => {
              handleChange(item.id);
            }}
            checked={item.checked}
            className="w-8 h-8 bg-gray-200 
              border border-gray-300 cursor-pointer
            peer-checked:bg-blue-500 focus:border-blue-500
              peer-checked:border-transparent"
          />
          <label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleChange(item.id)}
            className="text-2xl focus-within:underline
              font-medium cursor-pointer"
          >
            {item.name}
          </label>
          <FaTrashAlt
            role="button"
            aria-label={`Delete ${item.name}`}
            onClick={() => {
              handleDelete(item.id);
              console.log(item.name);
            }}
            className="ml-auto text-2xl
              hover:text-red-500"
          />
        </li>
      ))}
    </ul>
  );
}

export default Lists;
