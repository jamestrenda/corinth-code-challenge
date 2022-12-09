import tw from 'twin.macro';

// TODO: implement search functionality
// TODO: add hover/focus states to input
export const Search = () => {
  return (
    <div tw="max-w-lg m-auto">
      <input
        tw="w-full text-center text-gray-400 p-4 my-4 bg-transparent border border-gray-900 rounded-full uppercase text-xs tracking-widest"
        type="search"
        name="search"
        placeholder="Search by character name..."
      />
    </div>
  );
};
