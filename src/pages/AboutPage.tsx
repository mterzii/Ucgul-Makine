import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutPage = () => {
  const infoCardReveal = useScrollReveal({ direction: 'up', distance: 20 });

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block text-xs font-semibold text-orange-500 tracking-widest mb-4">
            HAKKIMIZDA
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            3Gül Makine
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
            3Gül Makine 1972 yılında Fehmi Uçgül tarafından kurulmuş olup, çeşitli imalat kollarında faaliyet göstermiştir. "İnsana yarışır iş, güvenli istir" anlayışından hareketle, kaliteden ödün vermeden ilerlemesini sürdürmüştür.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Firmamız 1972 de Fehmi Uçgül tarafından kurulmuş, çeşitli imalat kollarında faaliyet göstermiştir. Mühendislik alanında sağlam temel ve geniş teknik bilgi donanımı ile tecrübeli personel kadrosu, üretim kapasitesi ve kullanılan modern makine parkı ile ülkenin önde gelen firmalarından sayılmaktadır.
          </p>
        </div>

        <div ref={infoCardReveal.ref} style={infoCardReveal.style} className="bg-white shadow-lg rounded-lg overflow-hidden mb-20">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                BIZ KİMİZ?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  3Gül Makine 1972 de Fehmi Üçgül tarafından kurulmuş olup, çeşitli imalat kollarında faaliyet göstermiştir. <span className="font-semibold text-orange-600">"İnsana yarışır iş, güvenli istir"</span> anlayışından hareketle iş güvenliğini ön planda tutarak, kaliteden ödün vermeden ilerlemesini sürdürmüştür.
                </p>
                <p>
                  Firmamız teknolojiyi yakından takip etmekle birlikte her geçen gün büyümeyi hedeflemiştir. 2008 yılı itibari ile kurumsallaşmayı hedeflemiş ve gerçekleştirmiştir. 2000 yılı itibari ile Mustafa Üçgül'ün de katılımı ile işlerimize teknik bir bakış açısı kazandırılmıştır.
                </p>
                <p>
                  Deneyimli kadromuz ile sorunsuz ve zamanında teslimat şirketimizin ana prensibidir.
                </p>
              </div>
            </div>
            <div className="relative h-96 md:h-auto">
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="3Gül Makine Kurucuları"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              to: '/vision-mission',
              title: 'Vizyon & Misyon',
              description: 'Şirketimizin hedefleri ve uzun vadeli vizyonunu keşfedin.',
            },
            {
              to: '/projects',
              title: 'Neden 3Gül Makine?',
              description: 'Biz neden endüstrinin tercih ettiği partner seçimidir?',
            },
            {
              to: '/references',
              title: 'Referanslarımız',
              description: 'Çalıştığımız önemli müşteriler ve başarı öykülerimizi inceleyin.',
            },
          ].map((link, index) => {
            const linkReveal = useScrollReveal({
              direction: 'up',
              distance: 20,
              delay: index * 100
            });

            return (
              <Link
                key={index}
                to={link.to}
                ref={linkReveal.ref}
                style={linkReveal.style}
                className="group relative p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">{link.title}</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{link.description}</p>
                  <div className="flex items-center text-orange-500 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight size={18} className="group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>


      </div>
    </div>
  );
};

export default AboutPage;
