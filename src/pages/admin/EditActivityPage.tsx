import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import ActivityForm from '../../components/admin/ActivityForm';
import { getActivity, updateActivity, Activity, ActivityFormData } from '../../lib/activities';
import { ArrowLeft } from 'lucide-react';

const EditActivityPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadActivity();
  }, [id]);

  const loadActivity = async () => {
    if (!id) return;

    try {
      setLoading(true);
      const data = await getActivity(Number(id));
      setActivity(data);
    } catch (error) {
      console.error('Error loading activity:', error);
      alert('Faaliyet yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (activityData: ActivityFormData) => {
    if (!id) return;

    try {
      setSubmitting(true);
      await updateActivity(Number(id), activityData);
      alert('Faaliyet başarıyla güncellendi!');
      navigate('/admin/activities');
    } catch (error) {
      console.error('Error updating activity:', error);
      alert('Faaliyet güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-500">Yükleniyor...</p>
        </div>
      </AdminLayout>
    );
  }

  if (!activity) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-500">Faaliyet bulunamadı</p>
          <button
            onClick={() => navigate('/admin/activities')}
            className="mt-4 text-orange-500 hover:text-orange-600"
          >
            Faaliyetler listesine dön
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/admin/activities')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Faaliyet Düzenle</h1>
            <p className="text-gray-600">{activity.title}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <ActivityForm activity={activity} onSubmit={handleSubmit} submitting={submitting} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditActivityPage;
