import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { getActivities, subscribeToActivities, Activity } from '../lib/activities';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');
  const [selectedProject, setSelectedProject] = useState<Activity | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [projects, setProjects] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();

    const unsubscribe = subscribeToActivities((updatedActivities) => {
      setProjects(updatedActivities);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await getActivities();
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(p => p.status === activeTab);

  const openModal = (project: Activity) => {
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

        {loading ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Yükleniyor...</p>
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-3 cursor-pointer opacity-0 animate-fadeIn bg-white"
                onClick={() => openModal(project)}
                style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-orange-500 text-lg transition-colors duration-300 flex-1">{project.title}</h3>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.category}</span>
                    </div>
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

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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

            <div className="p-6">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <img
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    selectedProject.status === 'ongoing'
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-green-600 bg-green-50'
                  }`}>
                    {selectedProject.status === 'ongoing' ? 'DEVAM EDEN PROJE' : 'TAMAMLANAN PROJE'}
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Başlangıç Tarihi</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(selectedProject.start_date).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                  {selectedProject.end_date && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Bitiş Tarihi</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(selectedProject.end_date).toLocaleDateString('tr-TR')}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-200">
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
