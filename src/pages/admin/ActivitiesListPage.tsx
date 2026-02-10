import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import { Plus, Search, Pencil, Trash2, Image as ImageIcon } from 'lucide-react';
import { getActivities, deleteActivity, subscribeToActivities, Activity } from '../../lib/activities';

const ActivitiesListPage = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadActivities();

    const unsubscribe = subscribeToActivities((updatedActivities) => {
      setActivities(updatedActivities);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const loadActivities = async () => {
    try {
      setLoading(true);
      const data = await getActivities();
      setActivities(data);
    } catch (error) {
      console.error('Error loading activities:', error);
      alert('Faaliyetler yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || activity.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = async (id: number) => {
    if (window.confirm('Bu faaliyeti silmek istediğinizden emin misiniz?')) {
      try {
        await deleteActivity(id);
      } catch (error) {
        console.error('Error deleting activity:', error);
        alert('Faaliyet silinirken bir hata oluştu.');
      }
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Faaliyetler</h1>
            <p className="text-gray-600">Tüm faaliyetlerinizi yönetin</p>
          </div>
          <Link
            to="/admin/activities/new"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            <span className="font-semibold">Yeni Faaliyet</span>
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Faaliyet ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | 'ongoing' | 'completed')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="ongoing">Devam Eden</option>
              <option value="completed">Tamamlanan</option>
            </select>
          </div>

          {loading ? (
            <div className="py-12 text-center text-gray-500">
              Yükleniyor...
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-700">Görsel</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700">Başlık</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700">Kategori</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700">Durum</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700">Başlangıç</th>
                      <th className="text-right py-4 px-4 font-semibold text-gray-700">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredActivities.length > 0 ? (
                      filteredActivities.map((activity) => (
                        <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4">
                            {activity.image_url ? (
                              <img
                                src={activity.image_url}
                                alt={activity.title}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <ImageIcon size={24} className="text-gray-400" />
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-medium text-gray-900">{activity.title}</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm text-gray-600">{activity.category}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                activity.status === 'ongoing'
                                  ? 'bg-orange-100 text-orange-700'
                                  : 'bg-green-100 text-green-700'
                              }`}
                            >
                              {activity.status === 'ongoing' ? 'Devam Eden' : 'Tamamlandı'}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm text-gray-600">
                              {new Date(activity.start_date).toLocaleDateString('tr-TR')}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                to={`/admin/activities/${activity.id}/edit`}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Düzenle"
                              >
                                <Pencil size={18} />
                              </Link>
                              <button
                                onClick={() => handleDelete(activity.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Sil"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-gray-500">
                          Faaliyet bulunamadı
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Toplam {filteredActivities.length} faaliyet görüntüleniyor
              </div>
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ActivitiesListPage;
