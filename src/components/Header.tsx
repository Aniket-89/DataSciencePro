import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PopupButton } from 'react-calendly';
// import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const servicesItems = [
    // { name: 'All Services', to: '/services' },
    { name: 'Data Analytics', to: '/services/data-analysis' },
    { name: 'Market Research Report', to: '/services/machine-learning' }
  ];

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '#', hasDropdown: true },
    { name: 'Reports', to: '/reports' },
    { name: 'Contact Us', to: '/contact' },
  ];
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const root = document.getElementById("root");

  if (!root) return null;

  return (
    <>
      <header className="fixed w-full bg-white shadow-md z-40">
        <div className="lg:max-w-[75vw] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-semibold text-[#183B4E]">
              <span className='text-[#DDA853]'>GEO</span>FORESIGHT
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="relative" ref={servicesRef}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center py-1 font-normal ${
                          isActive('/services') || location.pathname.startsWith('/services/')
                            ? 'text-[#183B4E] font-bold'
                            : 'text-gray-600 hover:text-[#183B4E]'
                        } transition-colors`}
                      >
                        {item.name}
                        <ChevronDownIcon className={`ml-1 h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg">
                          {servicesItems.map((service) => (
                            <Link
                              key={service.name}
                              to={service.to}
                              onClick={() => setIsServicesOpen(false)}
                              className={`block px-4 py-2 font-normal ${
                                isActive(service.to)
                                  ? 'bg-gray-50 text-[#183B4E] font-bold'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#183B4E]'
                              } transition-colors`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {(isActive('/services') || location.pathname.startsWith('/services/')) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#183B4E] transform" />
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`relative py-1 font-normal ${
                        isActive(item.to)
                          ? 'text-[#183B4E] font-bold'
                          : 'text-gray-600 hover:text-[#183B4E]'
                      } transition-colors`}
                    >
                      {item.name}
                      {isActive(item.to) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#183B4E] transform" />
                      )}
                    </Link>
                  )
                ))}
              </nav>
              {/* <Link
                to="/contact"
                className="px-6 py-2 bg-[#27548A] text-white hover:bg-blue-500 transition-colors"
              ><ChatBubbleBottomCenterTextIcon className="h-5 w-5 inline-block mr-2" />
                Book a Call
              </Link> */}
              <PopupButton
                url="https://calendly.com/aniketkumarg99/website-one-on-one"
                rootElement={root}
                text="Book a Call"
                className="px-6 py-2 bg-[#27548A] text-white hover:bg-blue-500 transition-colors rounded inline-flex items-center"
                />

            </div>

            <div className="md:hidden">
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden z-40
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-[95%] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full justify-between pb-12">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link
              to="/"
              className="text-xl font-semibold text-[#183B4E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className='text-[#DDA853]'>GEO</span>FORESIGHT
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-[#183B4E]"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg py-2 relative ${
                    isActive(item.to)
                      ? 'text-[#183B4E] font-bold'
                      : 'text-gray-600'
                  } hover:text-[#183B4E] transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
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
          <PopupButton
                url="https://calendly.com/aniketkumarg99/website-one-on-one"
                rootElement={root}
                text="Book a Call"
                className="flex mx-12 justify-center items-center py-4 px-4 my-2 bg-[#27548A] text-white hover:bg-[#122B3A] transition-colors"
                />
        </div>
      </div>
    </>
  );
};

export default Header;
