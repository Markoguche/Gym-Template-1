import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 font-semibold text-white bg-transparent">
        <div className="ml-12 lg:mx-0 sm:mx-auto">
          <img src={logo} alt="logo" className="lg:w-16 sm:w-28 ml-24" />
        </div>
        <div className="hidden lg:flex space-x-6 uppercase text-sm">
          {["Help", "Courses", "Events", "Pricing", "About Us", "Course Plan", "Shop", "Member Area"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">DE EN</div>
        <button className="lg:hidden p-2 rounded" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-[rgb(19,19,19)] text-white font-semibold text-base uppercase p-4 flex flex-col items-center space-y-4 transition-all duration-300 ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        {isOpen &&
          ["Help", "Courses", "Events", "Pricing", "About Us", "Course Plan", "Shop", "Member Area"].map((item) => (
            <a key={item} href="#" className="text-white">
              {item}
            </a>
          ))}
        {isOpen && <span className="text-white">Deutch English</span>}
      </div>
    </nav>
  );
}
