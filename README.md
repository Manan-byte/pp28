# 📋 Aplikasi Validasi KBLI (PP 28 / OSS-RBA)

> **Web Application & Validator** untuk pengecekan kesesuaian Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) dan perizinan berusaha berbasis risiko (OSS RBA) sesuai regulasi PP No. 28.

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎯 Tujuan & Fitur

- 🔍 **Validasi Cepat KBLI**: Memverifikasi kode KBLI 5-digit beserta uraian sektor usaha terkait.
- ⚖️ **Kesesuaian Regulasi PP 28**: Menyaring parameter perizinan, tingkat risiko usaha (Rendah, Menengah Rendah, Menengah Tinggi, Tinggi).
- 🎨 **Antarmuka Bersih & Responsif**: Tampilan modern yang nyaman digunakan di perangkat desktop maupun smartphone.
- ⚡ **Tanpa Dependensi Berat**: Dibangun menggunakan HTML semantic dan Tailwind CSS yang ringan dan cepat.

---

## 🛠️ Struktur Project

```
pp28/
├── data/               # Basis data referensi KBLI & aturan validasi
├── src/                # File CSS & script logika aplikasi
├── index.html          # Halaman utama aplikasi validasi
├── tailwind.config.js  # Konfigurasi kustom styling Tailwind
└── netlify.toml        # Konfigurasi deployment hosting Netlify
```

---

## 💻 Menjalankan Secara Lokal

```bash
# Clone repository
git clone https://github.com/Manan-byte/pp28.git
cd pp28

# Install build dependencies
npm install

# Build / Watch styling Tailwind
npm run watch
```
Buka file `index.html` langsung di browser Anda.
