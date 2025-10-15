
import { FiSearch } from 'react-icons/fi'; // Make sure to install react-icons

const SearchBox = () => {
  return (
    <div className="relative w-full mx-auto">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9E9E9E]" />
      <input
        type="text"
        placeholder="Search all gift items by name or ID.."
        className="w-full text-xs pl-12 pr-4 py-3 rounded-lg border border-[#CCCCCCCC]"
      />
    </div>
  );
};

export default SearchBox;
