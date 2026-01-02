import messageIcon from "../../assets/icons/msg-icon.png";

export default function HeroBadge() {
  return (
    <div className="
      inline-flex items-center gap-2 px-3 py-1 rounded-full
      bg-white text-[#006FE8] font-medium
      text-[16px] sm:text-[16px]
    ">
      <img src={messageIcon} alt="Message Icon" className="h-4 w-4" />
      <span>#1 iMessage Automation Tool</span>
    </div>
  );
}
