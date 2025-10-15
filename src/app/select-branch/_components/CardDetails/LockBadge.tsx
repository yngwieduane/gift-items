import { FiLock } from "react-icons/fi"; // Lock icon
const LockBadge = () => (
  <div className="bg-[#F2F4F7] p-1 rounded-xl absolute top-2 left-2 flex items-center text-xs text-[#344054]">
    <FiLock className="w-4 h-4 mr-1 text-[#F13E3E]" />
    Locked
  </div>
);
export default LockBadge;