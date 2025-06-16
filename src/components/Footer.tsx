import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className='text-black'>
            <h3 className="text-xl font-bold mb-4">GeoForesight</h3>
            <p className="text-gray-400">
              Transforming data into actionable insights for your business success.
            </p>
          </div>
          <div className='text-black'>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services/machine-learning" className="text-gray-400 hover:text-white transition-colors">
                  Machine Learning Solutions
                </a>
              </li>
              <li>
                <a href="/services/data-analysis" className="text-gray-400 hover:text-white transition-colors">
                  Data Analysis Solutions
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='text-black'>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@datasciencepro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Data Street, Analytics City</li>
            </ul>
          </div>
          <div className='text-black'>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DataSciencePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
