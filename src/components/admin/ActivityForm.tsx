import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, X, Image as ImageIcon } from 'lucide-react';
import { Activity, ActivityFormData } from '../../lib/activities';

interface ActivityFormProps {
  activity?: Activity;
  onSubmit: (activity: ActivityFormData) => void;
  submitting?: boolean;
}

const ActivityForm = ({ activity, onSubmit, submitting }: ActivityFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ActivityFormData>({
    title: activity?.title || '',
    category: activity?.category || '',
    status: activity?.status || 'ongoing',
    description: activity?.description || '',
    start_date: activity?.start_date || '',
    end_date: activity?.end_date || null,
    image_url: activity?.image_url || '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = () => {
    navigate('/admin/activities');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Başlık *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kategori *
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          >
            <option value="">Seçiniz</option>
            <option value="Makine İmalatı">Makine İmalatı</option>
            <option value="Otomasyon">Otomasyon</option>
            <option value="Parça İmalatı">Parça İmalatı</option>
            <option value="Bakım-Onarım">Bakım-Onarım</option>
            <option value="Kalıp İmalatı">Kalıp İmalatı</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Durum *
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'ongoing' | 'completed' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          >
            <option value="ongoing">Devam Eden</option>
            <option value="completed">Tamamlandı</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Başlangıç Tarihi *
          </label>
          <input
            type="date"
            value={formData.start_date}
            onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bitiş Tarihi
          </label>
          <input
            type="date"
            value={formData.end_date || ''}
            onChange={(e) => setFormData({ ...formData, end_date: e.target.value || null })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Görsel URL *
          </label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Açıklama *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>

      {formData.image_url && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Görsel Önizleme
          </label>
          <div className="relative w-full max-w-md h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={formData.image_url}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 flex items-center justify-center">
              <ImageIcon size={48} className="text-gray-400" />
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={submitting}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={20} />
          <span className="font-semibold">{submitting ? 'Kaydediliyor...' : 'Kaydet'}</span>
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition-colors"
        >
          <X size={20} />
          <span className="font-semibold">İptal</span>
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;
