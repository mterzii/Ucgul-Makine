import { useScrollReveal } from '../hooks/useScrollReveal';

import BOTAS from '../images/references/BOTAS.png';
import DEMIRAGLAR from '../images/references/DEMIRAGLAR.jpg';
import GUNEY_CELIK from '../images/references/guneycelik.png';
import KOLIN from '../images/references/kolin.jpg';
import OTIS from '../images/references/OTIS.jpg';
import OYAK from '../images/references/OYAK.jpg';
import PAMUK_ELEKTRIK from '../images/references/pamukelektrik.png';
import PIONEER from '../images/references/PIONEER.jpg';
import WAVIN_PILSA from '../images/references/wavinpilsa.jpg';
import YUREGIR_BELEDIYESI from '../images/references/yuregirbelediyesi.png';

const references = [
  { name: 'OTIS', industry: 'Çelik & Metal', image: OTIS },
  { name: 'KOLIN', industry: 'Harita & İnşaat', image: KOLIN },
  { name: 'GÜNEY ÇELİK', industry: 'Otomotiv & Lojistik', image: GUNEY_CELIK },
  { name: 'YÜREĞİR BELEDİYESİ', industry: 'Kamu', image: YUREGIR_BELEDIYESI },
  { name: 'PIONEER', industry: 'Elektrik & Elektronik', image: PIONEER },
  { name: 'WAVIN PILSA', industry: 'Plastik & Altyapı', image: WAVIN_PILSA },
  { name: 'OYAK', industry: 'Makine İmalatı', image: OYAK },
  { name: 'PAMUK ELEKTRIK', industry: 'Elektrik Taahhüt', image: PAMUK_ELEKTRIK },
  { name: 'DEMIRAGLAR', industry: 'Gıda Endüstrisi', image: DEMIRAGLAR },
  { name: 'BOTAS', industry: 'Enerji', image: BOTAS },
];

const ReferencesPage = () => {
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
            50 yıldan uzun süredir Türkiye'nin önde gelen işletmeleri 3Gül Makine'ye güven duyarak,
            üretimlerinde yer vermiştir. İşte bazı referanslarımız: 
          </p>
        </div>

        <div ref={marqueeReveal.ref} style={marqueeReveal.style} className="mb-20 overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll { animation: scroll 13s linear infinite; }
            .animate-scroll:hover { animation-play-state: paused; }
          `}</style>

          <div className="flex animate-scroll">
            {[...references, ...references].map((ref, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-80 md:w-96 mx-4 p-7 bg-white border-2 border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* LOGO ALANI */}
                  <div className="h-24 md:h-28 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-orange-100 group-hover:to-orange-50 transition-all duration-300 group-hover:scale-[1.02] transform overflow-hidden px-4">
                    {ref.image ? (
                      <img
                        src={ref.image}
                        alt={`${ref.name} logo`}
                        className="max-h-20 max-w-[240px] object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {ref.name?.[0] ?? 'R'}
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    {ref.name}
                  </h3>
                  <p className="text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {ref.industry}
                  </p>
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
