import { useState, useEffect } from 'react';
import DataForm from './components/DataForm';
import DataTable from './components/DataTable';

function App() {
  // 1. Tema State ve LocalStorage Yönetimi
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  
  // 2. Veri Seti State ve LocalStorage Yönetimi
  const [dataset, setDataset] = useState(() => {
    const savedData = localStorage.getItem('socialDataset');
    return savedData ? JSON.parse(savedData) : [];
  });

  // Güncellenecek öğeyi tutan state
  const [editingItem, setEditingItem] = useState(null);

  // Tema değiştiğinde HTML'e class ekle/çıkar ve kaydet
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Dataset değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('socialDataset', JSON.stringify(dataset));
  }, [dataset]);

  // CREATE (Ekle)
  const handleAdd = (newData) => {
    const newRecord = { ...newData, id: Date.now().toString() };
    setDataset([newRecord, ...dataset]);
  };

  // UPDATE (Güncelle)
  const handleUpdate = (updatedData) => {
    setDataset(dataset.map(item => item.id === updatedData.id ? updatedData : item));
    setEditingItem(null); // Güncelleme bitince formu sıfırla
  };

  // DELETE (Sil)
  const handleDelete = (id) => {
    if (window.confirm("Bu kaydı silmek istediğinize emin misiniz?")) {
      setDataset(dataset.filter(item => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      <header className="p-4 flex justify-between items-center bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400">
          Toplumsal Eğilimler Veri Seti Toplayıcısı
        </h1>
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        >
          {theme === 'light' ? '🌙 Koyu Mod' : '☀️ Açık Mod'}
        </button>
      </header>

      <main className="p-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <DataForm 
            onAdd={handleAdd} 
            onUpdate={handleUpdate} 
            editingItem={editingItem} 
            setEditingItem={setEditingItem}
          />
        </div>
        <div className="lg:col-span-2">
          <DataTable 
            dataset={dataset} 
            onDelete={handleDelete} 
            onEdit={setEditingItem} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;

