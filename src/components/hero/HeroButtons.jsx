import appleIcon from "../../assets/icons/apple.png";

export default function HeroButtons() {
  return (
    <div className="mt-16 flex justify-center gap-4 flex-wrap">

      <button className="bg-[#007AFF] text-white px-5 py-2 rounded-full text-sm cursor-pointer">
        Get Started
      </button>

      <button className="flex items-center gap-4 px-5 py-2 rounded-full border border-[#6C788F] bg-[#EEF6FF] text-[#1D2026] font-semibold cursor-pointer">
        <img src={appleIcon} alt="Apple" className="h-5 w-5" />
        <span className="h-4 w-[1px] bg-[#6C788F] opacity-40"></span>
        <span className="text-base">Download the Mac app</span>
      </button>

    </div>
  );
}
