import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  status: 'ongoing' | 'completed';
  images?: ProjectImage[];
}

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'CNC Torna Modernizasyonu',
      description: 'Endüstriyel CNC torna makinesi yenileme ve modernizasyon projesi',
      status: 'ongoing',
      images: [
        { url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'CNC Torna 1' },
        { url: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'CNC Torna 2' },
        { url: 'https://images.pexels.com/photos/3860004/pexels-photo-3860004.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'CNC Torna 3' },
        { url: 'https://images.pexels.com/photos/3932645/pexels-photo-3932645.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'CNC Torna 4' },
      ],
    },
    {
      id: 2,
      title: 'Hidrolik Press İmalatı',
      description: 'Özel tasarım 200 ton kapasiteli hidrolik press üretimi',
      status: 'ongoing',
      images: [
        { url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hidrolik Press 1' },
        { url: 'https://images.pexels.com/photos/6474280/pexels-photo-6474280.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hidrolik Press 2' },
        { url: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hidrolik Press 3' },
      ],
    },
    {
      id: 3,
      title: 'Konveyör Sistem Kurulumu',
      description: 'Otomasyon konveyör hattı tasarım ve montaj çalışması',
      status: 'ongoing',
      images: [
        { url: 'https://images.pexels.com/photos/3860003/pexels-photo-3860003.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Konveyör 1' },
        { url: 'https://images.pexels.com/photos/13869099/pexels-photo-13869099.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Konveyör 2' },
        { url: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Konveyör 3' },
        { url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Konveyör 4' },
      ],
    },
    {
      id: 4,
      title: 'Metal İşleme Tezgahı',
      description: 'Hassas metal işleme tezgahı imalatı ve entegrasyonu',
      status: 'ongoing',
      images: [
        { url: 'https://images.pexels.com/photos/3932645/pexels-photo-3932645.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tezgah 1' },
        { url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tezgah 2' },
        { url: 'https://images.pexels.com/photos/6474280/pexels-photo-6474280.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tezgah 3' },
      ],
    },
    {
      id: 5,
      title: 'Otomotiv Yedek Parça Üretimi',
      description: 'Otomotiv sektörü için yedek parça imalatı tamamlandı. Yüksek kaliteli parça üretimi ile müşteri memnuniyeti sağlandı.',
      status: 'completed',
      images: [
        { url: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Otomotiv 1' },
        { url: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Otomotiv 2' },
        { url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Otomotiv 3' },
      ],
    },
    {
      id: 6,
      title: 'Fabrika Bakım ve Onarım',
      description: 'Tekstil fabrikası makine parkı genel bakım hizmeti. Tüm makineler revize edildi ve üretim verimliliği artırıldı.',
      status: 'completed',
      images: [
        { url: 'https://images.pexels.com/photos/3860003/pexels-photo-3860003.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bakım 1' },
        { url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bakım 2' },
        { url: 'https://images.pexels.com/photos/6474280/pexels-photo-6474280.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bakım 3' },
        { url: 'https://images.pexels.com/photos/3932645/pexels-photo-3932645.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bakım 4' },
      ],
    },
    {
      id: 7,
      title: 'Özel Kalıp İmalatı',
      description: 'Plastik enjeksiyon kalıpları tasarım ve üretim projesi başarıyla tamamlandı. Hassas toleranslarla üretilen kalıplar müşteriye teslim edildi.',
      status: 'completed',
      images: [
        { url: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kalıp 1' },
        { url: 'https://images.pexels.com/photos/3860004/pexels-photo-3860004.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kalıp 2' },
        { url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kalıp 3' },
      ],
    },
    {
      id: 8,
      title: 'Endüstriyel Kazan Revizyonu',
      description: 'Buhar kazanı revizyonu ve güvenlik testleri tamamlandı. Tüm güvenlik standartları karşılandı.',
      status: 'completed',
      images: [
        { url: 'https://images.pexels.com/photos/13869099/pexels-photo-13869099.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kazan 1' },
        { url: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kazan 2' },
        { url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kazan 3' },
        { url: 'https://images.pexels.com/photos/6474280/pexels-photo-6474280.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kazan 4' },
      ],
    },
    {
      id: 9,
      title: 'Metal Konstrüksiyon',
      description: 'Depo ve platform metal konstrüksiyon imalatı tamamlandı. Yüksek kaliteli çelik malzeme kullanılarak güvenli yapılar inşa edildi.',
      status: 'completed',
      images: [
        { url: 'https://images.pexels.com/photos/3932645/pexels-photo-3932645.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Konstrüksiyon 1' },
        { url: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Konstrüksiyon 2' },
        { url: 'https://images.pexels.com/photos/3860003/pexels-photo-3860003.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Konstrüksiyon 3' },
      ],
    },
    {
      id: 10,
      title: 'Elektrik Pano İmalatı',
      description: 'Endüstriyel elektrik panoları imalat ve montajı tamamlandı. Modern otomasyon sistemleri ile entegre çalışan panolar üretildi.',
      status: 'completed',
      images: [
        { url: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Elektrik 1' },
        { url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Elektrik 2' },
        { url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Elektrik 3' },
        { url: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Elektrik 4' },
      ],
    },
  ];

  const filteredProjects = projects.filter(p => p.status === activeTab);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block text-xs font-semibold text-orange-500 tracking-widest mb-4">
            PROJELERİMİZ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projelerimiz
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            1972'den bu yana gerçekleştirdiğimiz projelerle sektörde fark yaratıyoruz.
          </p>
        </div>

        <div className="flex gap-4 mb-10 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`pb-4 px-6 font-semibold transition-colors relative ${
              activeTab === 'ongoing'
                ? 'text-orange-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Devam Eden
            {activeTab === 'ongoing' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-4 px-6 font-semibold transition-colors relative ${
              activeTab === 'completed'
                ? 'text-orange-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Tamamlanan
            {activeTab === 'completed' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
            )}
          </button>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-3 cursor-pointer opacity-0 animate-fadeIn bg-white"
                onClick={() => project.images ? openModal(project) : null}
                style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {project.images && (
                    <div className="grid grid-cols-2 gap-1 p-1 bg-gray-50">
                      {project.images.slice(0, 4).map((image, idx) => (
                        <div key={idx} className="aspect-video bg-gray-200 overflow-hidden rounded">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 group-hover:text-orange-500 mb-2 text-lg transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 text-sm mb-4 line-clamp-2 transition-colors duration-300">{project.description}</p>
                    <div className="flex items-center gap-2 text-orange-500 group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                        <ArrowRight size={16} className="group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-semibold">İncele</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {activeTab === 'completed'
                ? 'Henüz tamamlanan proje eklenmedi'
                : 'Henüz devam eden proje bulunmuyor'}
            </p>
          </div>
        )}
      </div>

      {selectedProject && selectedProject.images && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="space-y-3">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.images[selectedImageIndex].url}
                    alt={selectedProject.images[selectedImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {selectedProject.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`aspect-video bg-gray-200 rounded overflow-hidden border-2 transition-all ${
                        idx === selectedImageIndex
                          ? 'border-orange-500'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-4">
                  <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                    selectedProject.status === 'ongoing'
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-green-600 bg-green-50'
                  }`}>
                    {selectedProject.status === 'ongoing' ? 'DEVAM EDEN PROJE' : 'TAMAMLANAN PROJE'}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    {selectedProject.status === 'ongoing'
                      ? 'Projeyle ilgili daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.'
                      : 'Başarıyla tamamlanan projemiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
