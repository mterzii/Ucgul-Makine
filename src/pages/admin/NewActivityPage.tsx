import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import ActivityForm from '../../components/admin/ActivityForm';
import { createActivity, ActivityFormData } from '../../lib/activities';
import { ArrowLeft } from 'lucide-react';

const NewActivityPage = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (activityData: ActivityFormData) => {
    try {
      setSubmitting(true);
      await createActivity(activityData);
      alert('Faaliyet başarıyla eklendi!');
      navigate('/admin/activities');
    } catch (error) {
      console.error('Error creating activity:', error);
      alert('Faaliyet eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setSubmitting(false);
    }
  };

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Yeni Faaliyet</h1>
            <p className="text-gray-600">Yeni bir faaliyet oluşturun</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <ActivityForm onSubmit={handleSubmit} submitting={submitting} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewActivityPage;
