import AdminLayout from '../../components/admin/AdminLayout';
import { FolderOpen, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    {
      icon: FolderOpen,
      label: 'Toplam Faaliyet',
      value: '24',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      label: 'Devam Eden',
      value: '8',
      color: 'bg-orange-500',
    },
    {
      icon: CheckCircle,
      label: 'Tamamlanan',
      value: '16',
      color: 'bg-green-500',
    },
    {
      icon: TrendingUp,
      label: 'Bu Ay Eklenen',
      value: '5',
      color: 'bg-purple-500',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Yönetim paneline hoş geldiniz</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hızlı Erişim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/admin/activities"
              className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all"
            >
              <FolderOpen size={24} className="text-orange-500" />
              <div>
                <div className="font-semibold text-gray-900">Faaliyetleri Yönet</div>
                <div className="text-sm text-gray-600">Tüm faaliyetleri görüntüle ve düzenle</div>
              </div>
            </a>
            <a
              href="/admin/activities/new"
              className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all"
            >
              <FolderOpen size={24} className="text-orange-500" />
              <div>
                <div className="font-semibold text-gray-900">Yeni Faaliyet Ekle</div>
                <div className="text-sm text-gray-600">Yeni bir faaliyet oluştur</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
