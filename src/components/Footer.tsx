import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#313335] min-h-[300px] text-white py-12">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="text-black">
            <div className="flex items-center">
              <img
                src={Logo}
                alt=""
                className="size-20"
                width={90}
                height={90}
              />
              <h1 className="text-h3 font-semibold text-[#14B8A6]">
                <span className="text-[#27548A]">DATA</span>BITZY
              </h1>
            </div>
            <p className="text-gray-100">
              Transforming data into actionable insights.
            </p>
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/reports"
                  className="text-gray-50 hover:text-[#27548A] hover:underline transition-colors"
                >
                  Market Research Reports
                </a>
              </li>
              <li>
                <a
                  href="/services/data-analysis"
                  className="text-gray-50 hover:text-[#27548A] hover:underline transition-colors"
                >
                  Data Analytics Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-50 hover:text-[#27548A] hover:underline transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-50 hover:text-[#27548A] hover:underline transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-50">
              <li>contact@databitzy.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Data Street, Analytics City</li>
            </ul>
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#CACCCE] hover:text-[#DDA853] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#CACCCE] hover:text-[#DDA853] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#CACCCE] hover:text-[#DDA853] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-50">
          <p>
            &copy; {new Date().getFullYear()} DATABITZY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
