import Lists from "./Lists/Lists.jsx";

function Home({ items, handleChange, handleDelete }) {
  return (
    <main className="flex flex-col w-full items-center ">
      {items.length ? (
        <Lists
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <h2 className="text-3xl text-red-500 font-bold ">
          List is Empty <br />
        </h2>
      )}
    </main>
  );
}

export default Home;
