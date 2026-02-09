import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const VisionMissionPage = () => {
  const visionPoints = [
    'Teknoloji ve inovasyonda lider konumda olmak',
    'Müşteri memnuniyetini en üst seviyeye taşımak',
    'Endüstri 4.0 standartlarında üretim yapmak',
    'Sürdürülebilir ve çevre dostu üretim sistemleri kurmak',
  ];

  const missionPoints = [
    'Yüksek kaliteli ve güvenilir ürün ve hizmet sunmak',
    'Müşterilerimizin beklentilerini aşan çözümler geliştirmek',
    'Nitelikli insan kaynağına yatırım yapmak',
    'Teknolojik gelişmelere hızlı uyum sağlamak',
    'Sosyal sorumluluğu göz önünde tutarak faaliyet göstermek',
  ];

  const values = [
    { title: 'Kalite', description: 'En yüksek standartta ürün ve hizmet' },
    { title: 'Güvenilirlik', description: 'Sözümüzde duran, zamanında teslimat' },
    { title: 'İnovasyon', description: 'Sürekli gelişim ve teknoloji takibi' },
    { title: 'İşbirliği', description: 'Müşteri ve çalışanlarla güçlü ilişkiler' },
    { title: 'Sorumluluk', description: 'Çevre ve topluma karşı duyarlılık' },
    { title: 'Başarı', description: 'Birlikte hedeflerimize ulaşma' },
  ];

  const visionReveal = useScrollReveal({ direction: 'left', distance: 20, delay: 0 });
  const missionReveal = useScrollReveal({ direction: 'right', distance: 20, delay: 100 });
  const valuesHeaderReveal = useScrollReveal({ direction: 'up', distance: 16 });

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="inline-block text-xs font-semibold text-orange-500 tracking-widest mb-4">
            KURUMSAL DEĞERLER
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Vizyon & Misyon
          </h1>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div ref={visionReveal.ref} style={visionReveal.style}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Vizyonumuz</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Türkiye'nin ve dünya piyasasının öncü makine ve imalat firması olmak; müşterilerimize en iyi hizmeti sunarak, teknolojik ve kalite standartlarında sektöre yön vermek.
              </p>
              <ul className="space-y-4">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div ref={missionReveal.ref} style={missionReveal.style}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Misyonumuz</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Müşterilerimizin ürün ve hizmet taleplerini en kısa sürede ve en uygun fiyatla karşılamak; çalışanlarımıza güvenli ve motivasyon sağlayan bir ortam sunmak.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 ref={valuesHeaderReveal.ref} style={valuesHeaderReveal.style} className="text-3xl font-bold text-gray-900 mb-12">
              Kurum Değerlerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const valueReveal = useScrollReveal({
                  direction: 'up',
                  distance: 20,
                  delay: index * 80
                });

                return (
                  <div
                    key={index}
                    ref={valueReveal.ref}
                    style={valueReveal.style}
                    className="group relative p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                    <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-10 translate-x-10" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300 group-hover:scale-110 transform">
                        <span className="text-2xl font-bold text-orange-500 group-hover:text-white transition-colors duration-300">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">{value.title}</h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionPage;
