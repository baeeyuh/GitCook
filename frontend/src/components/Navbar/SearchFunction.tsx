import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchProps {
  searchQuery: string | null | undefined;
}

const SearchFunction = ({ searchQuery }: SearchProps) => {
  const [query, setQuery] = useState<string>(searchQuery ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation(); 


  useEffect(() => {
    setQuery("");
  }, [location.pathname]); 

  
  useEffect(() => {
    if (typeof searchQuery === "string") {
      setQuery(searchQuery);
    }
  }, [searchQuery]);

  
  useEffect(() => {
    if (query.trim() === "") return;

    const delaySearch = setTimeout(() => {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }, 500);
     

    return () => clearTimeout(delaySearch); 
  }, [query, navigate]); 

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    
  };

  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center">
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-1 rounded-full hover:bg-gray-200 transition"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>

      {/* Expanding Search Input */}
      <div
        className={`absolute right-0 flex items-center border rounded-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "w-40 md:w-56 opacity-100 px-2 py-1" : "w-0 opacity-0"
        }`}
      >
        <Search className="w-5 h-5 p-1 text-gray-500" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch} // ✅ Auto-search while typing
          onKeyDown={handleKeyDown} // ✅ Search on Enter
          className="focus:outline-none w-full"
          autoFocus
        />
        <X
          className="w-5 h-5 text-gray-500 cursor-pointer"
          onClick={() => {
            setQuery(""); // ✅ Clear input on close
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default SearchFunction;
