import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UcgulLogo from '../Images/UcgulLogo.png'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
  <img
    src={UcgulLogo}
    alt="Üçgül Makina Logo"
    className="h-10 w-auto object-contain"
  />
</Link>


          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              ANA SAYFA
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('corporate')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium flex items-center gap-1">
                KURUMSAL
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'corporate' && (
                <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors text-sm"
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    to="/vision-mission"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors text-sm"
                  >
                    Vizyon ve Misyon
                  </Link>
                  <Link
                    to="/references"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors text-sm"
                  >
                    Referanslarımız
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('activities')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium flex items-center gap-1">
                FAALİYETLERİMİZ
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'activities' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'activities' && (
                <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2">
                  <Link
                    to="/projects"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors text-sm"
                  >
                    Projelerimiz
                  </Link>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors text-sm"
                  >
                    Hizmetlerimiz
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              İLETİŞİM
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              ANA SAYFA
            </Link>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'corporate' ? null : 'corporate')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm font-medium flex items-center justify-between"
              >
                KURUMSAL
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'corporate' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    to="/vision-mission"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Vizyon ve Misyon
                  </Link>
                  <Link
                    to="/references"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Referanslarımız
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'activities' ? null : 'activities')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm font-medium flex items-center justify-between"
              >
                FAALİYETLERİMİZ
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'activities' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'activities' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    to="/projects"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Projelerimiz
                  </Link>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Hizmetlerimiz
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              İLETİŞİM
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
