import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              3GÜL MAKİNA OLARAK;
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              3Gül Makine 1972 de Fehmi Uçgül tarafından kurulmuş olup, çeşitli imalat kollarında faaliyet göstermiştir. "İnsana yarışır iş, güvenli istir" anlayışından hareketle, kaliteden ödün vermeden ilerlemesini sürdürmüştür.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">ADRES</h3>
                  <p className="text-gray-300">
                    Organize Sanayi Bölgesi, Doğu Sanayi Sitesi E2<br />
                    Blok No:6 ADANA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">TELEFON</h3>
                  <p className="text-gray-300">
                    (0322) 321 32 70 - 324 10 24<br />
                    Fax: (0322) 321 70 91
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-POSTA</h3>
                  <p className="text-gray-300">m3gul@3gulmakina.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">BİZE ULAŞIN</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mesajınız"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-300"
              >
                GÖNDER
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <div className="font-bold text-lg">GÜL MAKİNA</div>
                <div className="text-gray-400 text-sm">1972 - Bugün</div>
              </div>
            </div>

            <div className="flex gap-6">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>

            <div className="text-gray-400 text-sm text-center sm:text-right">
              <p>© 2026 3Gül Makina. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
