import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'PROJELERİMİZ',
      description:
        'Üçgül makina olarak pek çok farklı projenin imalatını yaptık. Tamamlanan ve üretim devam eden projelerine gözatmak için...',
      image:
        'https://images.pexels.com/photos/3932645/pexels-photo-3932645.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Sanayi Projesi',
    },
    {
      title: 'FALİYET ALANLARI',
      description:
        '1972 den bu yana ceşitli imalat sektöründe işyapan firmalara. Teknik servis, danışmanlık, makine revizyonlarına üretimlerinin kalitesini üretim hızımı artırma vb. konularda destek vermekteyiz.',
      image:
        'https://images.pexels.com/photos/3860004/pexels-photo-3860004.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Teknik Çizim',
      reverse: true,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {projects.map((project, index) => {
            const textReveal = useScrollReveal({
              direction: project.reverse ? 'right' : 'left',
              distance: 20,
              delay: 0
            });
            const imageReveal = useScrollReveal({
              direction: project.reverse ? 'left' : 'right',
              distance: 20,
              delay: 100
            });

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  project.reverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div
                  ref={textReveal.ref}
                  style={textReveal.style}
                  className={project.reverse ? 'lg:col-start-2' : ''}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h2>
                  <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold transition-all duration-300 hover:gap-4">
                    DEVAMINI GÖR
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div
                  ref={imageReveal.ref}
                  style={imageReveal.style}
                  className={project.reverse ? 'lg:col-start-1' : ''}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full rounded-2xl shadow-xl object-cover h-72 sm:h-96"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
