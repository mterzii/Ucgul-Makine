import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Mühendislik & Tasarım',
      description: 'Özel tasarım mühendisliği hizmetleri sunulmaktadır. Müşteri ihtiyaçlarına göre özel tasarımlar yapılır ve üretime hazır hale getirilir.',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg',
    },
    {
      id: 2,
      title: 'İmalat & Montaj',
      category: 'MAKİNE İMALATI',
      description: 'Çelik profiller, makine parçaları ve komple ürün imalatı yapılmaktadır. Kaliteli ve dayanıklı ürünler üretilmektedir.',
      image: 'https://images.pexels.com/photos/9242202/pexels-photo-9242202.jpeg',
    },
    {
      id: 3,
      title: 'Otomasyon Sistemleri',
      description: 'Makine otomasyon sistemleri tasarlanır ve kurulur. Endüstri 4.0 standartlarında modern çözümler sunulmaktadır.',
      image: 'https://images.pexels.com/photos/16647824/pexels-photo-16647824.jpeg',
    },
    {
      id: 4,
      title: 'İmalat & Montaj Hizmetleri',
      category: 'İMALAT & MONTAJ',
      description: 'Alüminyum ürünlerinin İmalatı da yer almaktadır. İmalat sürecinin her aşamasında kalite kontrol sağlanmaktadır.',
      image: 'https://images.pexels.com/photos/1409226/pexels-photo-1409226.jpeg',
    },
    {
      id: 5,
      title: 'Yedek Parça & Servisi',
      description: 'Makinerimizin çeşitli yedek parçaları ve teknik destek hizmetleri sağlanmaktadır. Profesyonel servis ekibimiz 24/7 hazırdır.',
      image: 'https://images.pexels.com/photos/35574814/pexels-photo-35574814.jpeg',
    },
    {
      id: 6,
      title: 'Fason Metal İşleme',
      description: 'Metal işleme hizmetleri kapsamında CNC tornalar, frezeler ve diğer modern makine parkımız kullanılmaktadır.',
      image: 'https://images.pexels.com/photos/28929513/pexels-photo-28929513.jpeg',
    },
    {
      id: 7,
      title: 'Bakım & Onarım',
      description: 'Çeşitli imalat makinelerinin bakımı, onarımı ve teknik destek hizmetleri yapılmaktadır.',
      image: 'https://images.pexels.com/photos/35574814/pexels-photo-35574814.jpeg',
    },
    {
      id: 8,
      title: 'Kalite Kontrol',
      description: 'Her aşamada kalite kontrol prosedürleri uygulanarak en yüksek standartta ürün teslimatı sağlanmaktadır.',
      image: 'https://images.pexels.com/photos/27102106/pexels-photo-27102106.jpeg',
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block text-xs font-semibold text-orange-500 tracking-widest mb-4">
            HİZMETLERİMİZ
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Geniş yelpazedeki makine imalatı ve teknik hizmetler sunarak müşterilerimizin üretim ihtiyaçlarını karşılamaktayız. Mühendislik tasarımından üretime kadar tüm aşamalarda profesyonel hizmet veriyor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const cardReveal = useScrollReveal({
              direction: 'up',
              distance: 20,
              delay: (index % 3) * 100
            });

            return (
              <div
                key={service.id}
                ref={cardReveal.ref}
                style={cardReveal.style}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-3 bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    {service.category && (
                      <div className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2">
                        {service.category}
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                    <div className="flex items-center gap-2 text-orange-500 group-hover:translate-x-2 transition-transform duration-300">
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};

export default ServicesPage;
