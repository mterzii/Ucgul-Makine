import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const textReveal = useScrollReveal({ direction: 'left', distance: 20 });
  const imageReveal = useScrollReveal({ direction: 'right', distance: 20, delay: 100 });

  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textReveal.ref} style={textReveal.style}>
            <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-3">
              Hakkımızda
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              KURUMSAL
            </h2>
            <div className="w-20 h-1 bg-orange-500 rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Şirketimizin gururlu geçmişini, vizyonumuzu ve şirket politikamız siz değerli müşterilerimizle paylaşmaktan gurur duyarız.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              1972'den bu yana cesitli imalat sektöründe işyapan firmalar olmak, çeşitli imalat kollarında faaliyetin göstermişti. "İnsana yarışır iş, güvenli istir" anlayışından hareketle, kaliteden ödün vermeden ilerlemesini sürdürmüştür.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold transition-all duration-300 hover:gap-4">
              DAHA FAZLA BİLGİ
              <ArrowRight size={20} />
            </button>
          </div>

          <div ref={imageReveal.ref} style={imageReveal.style} className="relative">
            <img
              src="https://images.pexels.com/photos/3962629/pexels-photo-3962629.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Makine Prodüksiyonu"
              className="w-full rounded-2xl shadow-2xl object-cover h-96"
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500 rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '50+', label: 'Yıl Deneyim', subtitle: "1972'den beri" },
            { number: '1000+', label: 'Başarılı Proje', subtitle: 'Tamamlanan İş' },
            { number: '200+', label: 'Müşteri', subtitle: 'Aktif İşbirliği' },
          ].map((stat, index) => {
            const statReveal = useScrollReveal({
              direction: 'up',
              distance: 20,
              delay: index * 100
            });

            return (
              <div
                key={index}
                ref={statReveal.ref}
                style={statReveal.style}
                className="text-center p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors duration-300"
              >
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.subtitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
