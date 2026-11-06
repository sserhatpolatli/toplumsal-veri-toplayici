function DataTable({ dataset, onDelete, onEdit }) {
  if (dataset.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center">
        <p className="text-slate-500 dark:text-slate-400">Henüz veri girilmemiş. Sol taraftaki formu kullanarak demografik veri ekleyin.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium border-b border-slate-200 dark:border-slate-600">ID / Saat</th>
              <th className="p-4 font-medium border-b border-slate-200 dark:border-slate-600">Yaş / Eğt.</th>
              <th className="p-4 font-medium border-b border-slate-200 dark:border-slate-600">Dini Görüş</th>
              <th className="p-4 font-medium border-b border-slate-200 dark:border-slate-600">Siyasi Görüş</th>
              <th className="p-4 font-medium border-b border-slate-200 dark:border-slate-600 text-center">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {dataset.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                  {new Date(parseInt(row.id)).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                </td>
                <td className="p-4">
                  <div className="font-medium text-slate-800 dark:text-slate-200">{row.age} yaş</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{row.education}</div>
                </td>
                <td className="p-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full border ${row.religion === 'Seküler' ? 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800' : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800'}`}>
                    {row.religion}
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-full border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                    {row.politics}
                  </span>
                </td>
                <td className="p-4 flex justify-center gap-2">
                  <button 
                    onClick={() => onEdit(row)}
                    className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded transition-colors"
                  >
                    Düzenle
                  </button>
                  <button 
                    onClick={() => onDelete(row.id)}
                    className="text-xs font-medium px-2 py-1 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded transition-colors"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;