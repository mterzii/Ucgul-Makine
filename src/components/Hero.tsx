import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen pt-16 flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          HOŞGELDİNİZ
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Üçgül Makina ailesi olarak deneyimli kadromuz ile sorunsuz ve zamanında teslimat şirketimizin ana prensibididir.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-3.5 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-center"
          >
            HİZMETLERİMİZ
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-center"
          >
            BİZE ULAŞIN
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
