import UcgulLogo from '../Images/UcgulLogo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img
              src={UcgulLogo}
              alt="Üçgül Makina Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          <div className="text-gray-400 text-sm text-center md:text-left">
            Copyright © 2026 Üçgül Makina. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
