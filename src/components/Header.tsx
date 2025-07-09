import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Logo } from "../assets/assets";
import BookButton from "./BookButton";
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  const servicesItems = [
    // { name: 'All Services', to: '/services' },
    { name: "Data Analytics", to: "/services/data-analysis" },
    { name: "Market Research Report", to: "/services/reports" },
  ];

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "#", hasDropdown: true },
    // { name: 'Testimonials', to: '/testimonials' },
    { name: "Contact Us", to: "/contact" },
  ];
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <header
          className="fixed left-1/2 -translate-x-1/2 top-4 mt-2 w-[90vw] max-w-7xl
            rounded-[2rem] z-40 md:px-4
            bg-white/80  backdrop-blur border-white/30 shadow-xs hover:shadow-sm
            transition-all"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={Logo} alt="" className="size-16" />
                <Link
                  to="/"
                  className="text-xl md:text-2xl font-semibold text-[#27548A]"
                >
                  DATA<span className="text-[#14B8A6]">bit</span>zy
                </Link>
              </div>

              <div className="hidden lg:flex items-center gap-8 px-4">
                <nav className="flex items-center gap-8">
                  {menuItems.map((item) =>
                    item.hasDropdown ? (
                      <div
                        key={item.name}
                        className="relative"
                        ref={servicesRef}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <Link
                          to="/services"
                          className={`flex items-center h-full py-1 font-bold ${
                            isActive("/services") ||
                            location.pathname.startsWith("/services/")
                              ? "text-[#183B4E] "
                              : "text-black hover:text-[#183B4E]"
                          } transition-colors`}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={`ml-1 h-4 w-4 transform transition-transform ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Link>

                        {/* Dropdown */}
                        {isServicesOpen && (
                          <div className="absolute top-full left-0 mt-1 w-52 backdrop-blur bg-white/30 shadow-lg z-50">
                            {servicesItems.map((service) => (
                              <Link
                                key={service.name}
                                to={service.to}
                                onClick={() => setIsServicesOpen(false)}
                                className={`block px-4 py-2 font-medium ${
                                  isActive(service.to)
                                    ? "bg-gray-50 text-[#183B4E] font-bold"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-[#183B4E]"
                                } transition-colors`}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}

                        {(isActive("/services") ||
                          location.pathname.startsWith("/services/")) && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#183B4E] transform" />
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={`relative py-1 font-bold ${
                          isActive(item.to)
                            ? "text-[#DDA853] font-bold"
                            : "text-black hover:text-[#183B4E]"
                        } transition-colors`}
                      >
                        {item.name}
                        {isActive(item.to) && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#183B4E] transform" />
                        )}
                      </Link>
                    )
                  )}
                </nav>
                <BookButton text={"Book a call"} />
              </div>

              <div className="lg:hidden grid">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 hover:text-[#183B4E]"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden z-40
          ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-[95%] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full justify-between pb-12">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <img src={Logo} alt="" className="size-10" />
              <Link
                to="/"
                className="text-xl font-semibold text-[#14B8A6]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-[#27548A]">DATA</span>BITZY
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-[#183B4E]"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name} className="flex flex-col">
                    <span className="text-lg py-2 text-gray-600 font-semibold">
                      {item.name}
                    </span>
                    <div className="ml-4 flex flex-col space-y-2">
                      {servicesItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-base py-1 pl-2 border-l-2 border-[#27548A] text-[#27548A] hover:underline`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg py-2 relative ${
                      isActive(item.to)
                        ? "text-[#183B4E] font-bold"
                        : "text-gray-600"
                    } hover:text-[#183B4E] transition-colors`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </nav>
          {/* <Link
            to="/contact"
            className="flex mx-12 justify-center items-center py-4 my-2 px-4 bg-[#27548A] text-white hover:bg-[#122B3A] transition-colors"
            >
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 inline-block mr-2" />
            Contact Us
          </Link> */}
          {/* <Link
            to="/contact"
            className="flex mx-12 justify-center items-center py-4 px-4 my-2 bg-[#27548A] text-white hover:bg-[#122B3A] transition-colors"
            >
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 inline-block mr-2" />
            Book a Call
          </Link> */}
          <BookButton text={"Book a call"} />
        </div>
      </div>
    </>
  );
};

export default Header;
