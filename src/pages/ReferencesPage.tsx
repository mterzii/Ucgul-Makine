import { useScrollReveal } from '../hooks/useScrollReveal';

const ReferencesPage = () => {
  const references = [
    { name: 'OYAK', industry: 'Çelik & Metal' },
    { name: 'BASKENT', industry: 'Harita & İnşaat' },
    { name: 'TIRSAN', industry: 'Otomotiv & Logistik' },
    { name: 'TARZAN', industry: 'Tarım Makineleri' },
    { name: 'TRAKYA', industry: 'Elektrik & Elektronik' },
    { name: 'CALIK', industry: 'Tekstil & Kimya' },
    { name: 'BERDAN', industry: 'Makine İmalatı' },
    { name: 'COMAR', industry: 'Otomotiv Aksesuar' },
    { name: 'HEKTAŞ', industry: 'Gıda Endüstrisi' },
    { name: 'POLISAN', industry: 'Kimya & Plastik' },
    { name: 'TATLISES', industry: 'Hayvancılık' },
    { name: 'KARDEŞLER', industry: 'Peyzaj & Tarım' },
  ];

  const marqueeReveal = useScrollReveal({ direction: 'up', distance: 20 });
  const statsReveal = useScrollReveal({ direction: 'up', distance: 20, delay: 100 });

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block text-xs font-semibold text-orange-500 tracking-widest mb-4">
            REFERANSLARIMIZ
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Güvenilen Partner
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            50 yıldan uzun süredir Türkiye'nin önde gelen işletmeleri 3Gül Makine'ye güven duyarak, üretimlerinde yer vermiştir. İşte bazı referanslarımız:
          </p>
        </div>

        <div ref={marqueeReveal.ref} style={marqueeReveal.style} className="mb-20 overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 10s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex animate-scroll">
            {[...references, ...references].map((ref, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-72 mx-3 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-100 group-hover:to-orange-50 transition-all duration-300 group-hover:scale-105 transform">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded group-hover:rotate-12 transition-transform duration-300"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">{ref.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{ref.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={statsReveal.ref} style={statsReveal.style} className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Daha Birçok İşletme Bize Güveniyor
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Türkiye'nin çelik, tekstil, harita, otomotiv, gıda ve tarım sektörlerindeki önemli firmalarıyla güçlü işbirliği yapıyoruz.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transform transition-transform duration-300">200+</div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Aktif Müşteri</p>
              </div>
            </div>
            <div className="group relative p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transform transition-transform duration-300">1000+</div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Tamamlanan Proje</p>
              </div>
            </div>
            <div className="group relative p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transform transition-transform duration-300">50+</div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Yıl Tecrübe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
