import { Factory, Cog, Box, Boxes, Container, Wrench, Settings, PackageOpen, Truck, Building2, Hammer, Cpu } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TrustedBy = () => {
  const logos = [
    { icon: Factory, name: 'Sanayi A.Ş.' },
    { icon: Cog, name: 'Makina Ltd.' },
    { icon: Box, name: 'Üretim A.Ş.' },
    { icon: Boxes, name: 'Endüstri Ltd.' },
    { icon: Container, name: 'İmalat A.Ş.' },
    { icon: Wrench, name: 'Teknik Ltd.' },
    { icon: Settings, name: 'Otomasyon A.Ş.' },
    { icon: PackageOpen, name: 'Paketleme Ltd.' },
    { icon: Truck, name: 'Lojistik A.Ş.' },
    { icon: Building2, name: 'İnşaat Ltd.' },
    { icon: Hammer, name: 'Montaj A.Ş.' },
    { icon: Cpu, name: 'Teknoloji Ltd.' },
  ];

  const triplicatedLogos = [...logos, ...logos, ...logos];

  const headerReveal = useScrollReveal({ direction: 'up', distance: 16 });
  const marqueeReveal = useScrollReveal({ direction: 'up', distance: 20, delay: 100 });

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerReveal.ref} style={headerReveal.style} className="text-center mb-12">
          <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-2">
            Güvenilir İş Ortağı
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Referanslarımız
          </h2>
        </div>

        <div ref={marqueeReveal.ref} style={marqueeReveal.style} className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-scroll hover:pause-animation gap-12">
            {triplicatedLogos.map((logo, index) => {
              const Icon = logo.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  <div className="flex flex-col items-center justify-center w-28 h-20 transition-all duration-300 opacity-40 hover:opacity-70">
                    <Icon size={36} className="text-gray-700 mb-1.5" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-gray-600 tracking-wide whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
