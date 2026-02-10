import { Factory } from 'lucide-react';
import UcgulLogo from "../images/UcgulLogo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
  <img
    src={UcgulLogo}
    alt="Üçgül Makine Logo"
    className="h-8 w-auto object-contain"
  />
</div>

          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2026 3Gül Makine. Tüm hakları saklıdır.

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
