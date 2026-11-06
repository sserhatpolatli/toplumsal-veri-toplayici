# 📊 Toplumsal Eğilimler Veri Seti Toplayıcısı

Bu proje, sosyal bilimler ve veri madenciliği araştırmaları için geliştirilmiş bir ön-veri toplama (Data Collection & Pre-processing) aracıdır. Kullanıcıların yaş, eğitim durumu, dini görüş ve siyasi ideoloji gibi demografik verilerini tarayıcı üzerinde güvenle depolayarak bir veri seti oluşturulmasını sağlar.



##  Proje Özellikleri

- **Tam CRUD Desteği:** Veri ekleme (Create), listeleme (Read), güncelleme (Update) ve silme (Delete) işlemleri.
- **Kalıcı Veri (LocalStorage):** Girilen tüm veriler ve tema tercihleri tarayıcının yerel hafızasında tutulur, sayfa yenilendiğinde kaybolmaz.
- **Dinamik Tema (Light/Dark Mode):** Tailwind CSS entegrasyonu ile kusursuz çalışan açık ve koyu mod desteği.
- **Modern ve Akademik Arayüz:** Veri bilimi panellerinden esinlenilmiş, Arduvaz Grisi (Slate) ve Deniz Mavisi (Teal) tonlarında profesyonel UI tasarımı.
- **Anlık Geri Bildirim:** Hızlı çalışan durum (state) yönetimi ile sayfayı yenilemeden anlık tablo güncellemeleri.

##  Kullanılan Teknolojiler

- **Frontend Çerçevesi:** ReactJS (Vite ile oluşturulmuştur)
- **Stil Kütüphanesi:** Tailwind CSS (v4)
- **Durum Yönetimi (State):** React Hooks (`useState`, `useEffect`)
- **Veri Depolama:** Tarayıcı LocalStorage API

##  Proje Klasör Yapısı

```text
src/
├── components/
│   ├── DataForm.jsx   # Veri ekleme ve güncelleme formu
│   └── DataTable.jsx  # Girilen verilerin listelendiği dinamik tablo
├── App.jsx            # Ana bileşen, durum ve tema yönetimi
├── main.jsx           # React DOM render noktası
└── index.css          # Tailwind CSS içe aktarımı ve özel tema kuralları

```

##  Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Repoyu bilgisayarınıza klonlayın:
```bash
git clone <github-repo-linkiniz>

```


2. Proje dizinine gidin:
```bash
cd toplumsal-veri-toplayici

```


3. Gerekli bağımlılıkları (node_modules) yükleyin:
```bash
npm install

```


4. Geliştirme sunucusunu başlatın:
```bash
npm run dev

```


5. Tarayıcınızda `http://localhost:5173` adresine giderek projeyi görüntüleyin.

## 🌐 Yayına Alma (Deployment)

Bu proje **Netlify** (veya Vercel) üzerinden anında yayına alınabilecek şekilde optimize edilmiştir.

* **Build Command:** `npm run build`
* **Publish Directory:** `dist`