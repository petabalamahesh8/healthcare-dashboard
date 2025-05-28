import { Bell, Plus } from "lucide-react";

function Header() {
  return (
    <nav className="w-310 h-16 bg-white flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center gap-6">

        <h1 >
          <span className="text-3xl font-bold text-blue-400">Health</span>
          <span className="text-3xl font-bold text-indigo-900">Care</span>
          </h1>
        </div>
       <div>
         <input
          type="text"
          placeholder="Search..."
          disabled
          className="bg-gray-100 text-sm px-4 py-2 rounded-full items-center placeholder-gray-400 focus:outline-none w-64"
        />
             <button className="text-gray-600 hover:text-blue-600 transition">
          <Bell className="w-10 h-6" />
        </button>
        
      </div>
      <div className="flex items-center gap-5">
         <div className=" gap-2">
          <img
            src="https://m.media-amazon.com/images/I/31AWFCkio3L.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-800">Dr. Smith</span>
        </div>
        <button className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-700 transition">
          <Plus className="w-4 h-4" />
        </button>

       
      </div>
    </nav>
  );
}

export default Header;
