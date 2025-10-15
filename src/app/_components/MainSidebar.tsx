import { FiLogOut } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { LuFileSearch } from "react-icons/lu";
const MainSidebar = () => {
  return (
    <div className="min-w-[240px] p-8 h-screen bg-white flex flex-col justify-between sidebar-shadow">
      {/* Logo */}
      <div>
        <img src="/Login/PsiLogoblue.svg" alt="PSI Logo" className="h-10 mb-12" />

        {/* Overview */}
        <div className="mb-4 text-sm text-gray-500 font-semibold">OVERVIEW</div>

        {/* Nav Items */}
        <nav className="flex flex-col space-y-6">
          <button className="flex items-center space-x-3 px-4 py-2 rounded-full bg-[#FCEEEA] text-orange border border-[#F9DED4] font-semibold">
            <BsGrid  className="text-orange text-lg" />
            <span>Gift Items</span>
          </button>
          <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <LuFileSearch  className="text-lg" />
            <span>My Requests</span>
          </button>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-start border-t border-[#EAECF0] pt-6  space-y-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Olivia Rhye</p>
            <p className="text-xs text-gray-500">olivia@psinv.com</p>
          </div>
        </div>

        <button className="flex items-center space-x-2 text-red-500 text-sm font-semibold hover:underline">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default MainSidebar;
