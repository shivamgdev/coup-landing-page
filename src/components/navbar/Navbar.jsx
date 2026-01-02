import logo from "../../assets/icons/coup-logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-center pt-6 px-4">
      <div className="w-[800px] xl:w-[1000px] 2xl:w-[1200px] h-[60px] 2xl:h-[81px] bg-white rounded-full shadow-sm px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <img
          src={logo}
          alt="Coup Logo"
          className="h-7 w-auto cursor-pointer"
        />

        {/* Links */}
        <ul className="hidden md:flex gap-10 text-sm text-[#8C97A8]">
          <li className="cursor-pointer">How it Works</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Use Case</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>

        {/* CTA */}
        <button className="bg-[#007AFF] text-white text-sm px-5 py-2 rounded-full cursor-pointer">
          Contact Sales
        </button>
      </div>
    </nav>
  );
}
