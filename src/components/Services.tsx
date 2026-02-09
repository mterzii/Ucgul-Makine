import { Wrench, Cog, LayoutGrid } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'TASARIM',
      description: 'Tasarım fikirlerinizi tasarım ekibimizle ve bizlere ulaşın',
    },
    {
      icon: Cog,
      title: 'TEKNİK DESTEK',
      description:
        'Siz değerli müşterilerimize mekanik, elektrik, elektronik alanlarında destek ve danışmanlık hizmetimiz için bize ulaşın',
    },
    {
      icon: LayoutGrid,
      title: 'İMALAT',
      description: 'Çeşitli metal imalatlarımızda profesyonel çözümler için bize ulaşın',
    },
  ];

  const headerReveal = useScrollReveal({ direction: 'up', distance: 16 });
  const imageReveal = useScrollReveal({ direction: 'up', distance: 20, delay: 200 });

  return (
    <section
      id="services"
      className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerReveal.ref} style={headerReveal.style} className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-2">
            Neler Yapıyoruz
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            HİZMETLERİMİZ
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardReveal = useScrollReveal({
              direction: 'up',
              distance: 20,
              delay: index * 100
            });

            return (
              <div
                key={index}
                ref={cardReveal.ref}
                style={cardReveal.style}
                className="group bg-white rounded-lg p-8 border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6 inline-flex">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div ref={imageReveal.ref} style={imageReveal.style} className="mt-16 text-center">
          <img
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Makine ve Tasarım"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl object-cover h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
