import { useState, useEffect } from 'react';

function DataForm({ onAdd, onUpdate, editingItem, setEditingItem }) {
  const initialState = {
    age: '',
    education: 'Lise',
    religion: 'Seküler',
    politics: 'Sosyal Demokrat'
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    } else {
      setFormData(initialState);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }
    setFormData(initialState);
  };

  const inputClass = "w-full mt-1 p-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-teal-500 outline-none transition-colors";

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
        {editingItem ? 'Sosyopolitik Veriyi Düzenle' : 'Yeni Veri Girişi'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400">Katılımcı Yaşı</label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
            min="15" 
            max="100"
            className={inputClass}
            placeholder="Örn: 24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400">Eğitim Durumu</label>
          <select name="education" value={formData.education} onChange={handleChange} className={inputClass}>
            <option value="İlköğretim">İlköğretim</option>
            <option value="Lise">Lise</option>
            <option value="Önlisans">Önlisans</option>
            <option value="Lisans">Lisans</option>
            <option value="Yüksek Lisans+">Yüksek Lisans ve Üzeri</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400">Dini Görüş</label>
          <select name="religion" value={formData.religion} onChange={handleChange} className={inputClass}>
            <option value="Seküler">Seküler</option>
            <option value="Muhafazakar">Muhafazakar</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400">Siyasi İdeoloji</label>
          <select name="politics" value={formData.politics} onChange={handleChange} className={inputClass}>
            <option value="Sosyal Demokrat">Sosyal Demokrat</option>
            <option value="Sosyalist">Sosyalist</option>
            <option value="Liberal">Liberal</option>
            <option value="Milliyetçi">Milliyetçi</option>
            <option value="Faşist">Faşist</option>
          </select>
        </div>

        <div className="flex gap-2 pt-2">
          <button 
            type="submit" 
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            {editingItem ? 'Güncelle' : 'Ekle'}
          </button>
          
          {editingItem && (
            <button 
              type="button" 
              onClick={() => setEditingItem(null)}
              className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium py-2 px-4 rounded-md transition-colors"
            >
              İptal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default DataForm;