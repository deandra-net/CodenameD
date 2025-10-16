# Portfolio Website - Deandra Arta

Website portofolio pribadi yang menampilkan keterampilan, pengalaman, dan proyek-proyek saya sebagai mahasiswa Computer Science dengan minat di bidang Cybersecurity dan Network Engineering.

## 🚀 Fitur Utama

- **Responsive Design**: Tampilan yang optimal di semua perangkat
- **Interactive Skills Orbit**: Animasi orbit yang menampilkan berbagai tools dan teknologi
- **Modal Popups**: Detail pengalaman kerja dan proyek
- **Smooth Scrolling**: Navigasi halus antar section
- **Typing Animation**: Efek mengetik untuk deskripsi diri
- **Fade-in Animations**: Animasi muncul saat scroll

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur website
- **CSS3**: Styling dan animasi
- **JavaScript**: Interaktivitas dan animasi
- **Typed.js**: Library untuk efek mengetik
- **Font Awesome**: Icon library

## 📁 Struktur Proyek

```
portofolio/
├── index.html          # Halaman utama
├── style.css           # Styling dan animasi
├── main.js             # JavaScript untuk interaktivitas
├── aset/               # Folder gambar dan asset
│   ├── *.png           # Gambar PNG
│   ├── *.jpg           # Gambar JPG
│   └── *.gif           # GIF animasi
├── package.json        # Dependencies Node.js
├── optimize-images.js  # Script optimasi gambar
├── .gitignore          # File yang diabaikan Git
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Menjalankan

### Opsi 1: Jalankan Lokal (Tanpa Server)
```bash
# Buka file index.html langsung di browser
start index.html
```

### Opsi 2: Dengan Server Lokal
```bash
# Install dependencies (opsional, untuk optimasi gambar)
npm install

# Jalankan server lokal
npx http-server -p 8000

# Atau dengan Python
python -m http.server 8000
```

Kemudian buka `http://localhost:8000` di browser.

## 🖼️ Optimasi Gambar

Website ini sudah dioptimasi untuk performa yang lebih baik:

- **Lazy Loading**: Gambar dimuat saat dibutuhkan
- **Kompresi**: Gambar dikompresi untuk ukuran file yang lebih kecil
- **Format Optimal**: Menggunakan format yang tepat untuk setiap gambar

Untuk mengoptimalkan gambar baru:
```bash
npm run optimize-images
```

## 📱 Section Website

1. **Hero**: Perkenalan diri dengan animasi mengetik
2. **Skills**: Orbit animasi menampilkan tools dan teknologi
3. **Experience**: Pengalaman kerja dengan modal detail
4. **Projects**: Proyek-proyek yang telah dikerjakan
5. **Contact**: Form kontak dan link sosial media

## 🔧 Kustomisasi

### Mengubah Konten
- Edit `index.html` untuk mengubah teks dan struktur
- Ganti gambar di folder `aset/`
- Update `style.css` untuk mengubah tampilan

### Menambah Skills Baru
- Tambahkan gambar skill di `aset/`
- Update HTML di section skills
- Sesuaikan animasi orbit di `style.css`

## 📈 Optimasi untuk GitHub

- `.gitignore` sudah dikonfigurasi untuk mengabaikan `node_modules/`
- File besar seperti gambar sudah dioptimasi
- Struktur folder yang bersih dan terorganisir

## 📞 Kontak

- **Instagram**: [@deandrarta](https://www.instagram.com/deandrarta/)
- **TikTok**: [@technopic.id](https://www.tiktok.com/@technopic.id?is_from_webapp=1&sender_device=pc)
- **YouTube**: [Deandra Arta](https://www.youtube.com/channel/UCezXcdVCONsg3z8qHc5vUzQ)

---

**Dibuat dengan ❤️ oleh Deandra Arta**
