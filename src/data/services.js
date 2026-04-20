export const services = [
  {
    slug: 'pelayanan-kefarmasian',
    title: 'Pelayanan Kefarmasian',
    icon: 'solar:clipboard-check-bold-duotone',
    image: '/services/pelayanan-kefarmasian.svg',
    desc: 'Pengelolaan resep, dispensing, dan konseling pasien dengan alur kerja yang terdokumentasi.',
    intro:
      'Layanan ini mengelola proses pelayanan resep dari penerimaan hingga edukasi pasien agar penggunaan obat tepat indikasi, tepat dosis, dan tepat durasi.',
    benefits: [
      'Validasi resep dan skrining interaksi obat secara sistematis.',
      'Dokumentasi dispensing dan riwayat layanan pasien.',
      'Standarisasi konseling pasien untuk meningkatkan kepatuhan terapi.'
    ],
    flow: ['Penerimaan Resep', 'Validasi Klinis', 'Dispensing', 'Konseling', 'Dokumentasi']
  },
  {
    slug: 'manajemen-persediaan-obat',
    title: 'Manajemen Persediaan Obat',
    icon: 'solar:box-bold-duotone',
    image: '/services/manajemen-persediaan-obat.svg',
    desc: 'Pemantauan stok real-time, kontrol batch dan kedaluwarsa, serta notifikasi stok minimum.',
    intro:
      'Fitur ini membantu fasilitas kesehatan menjaga ketersediaan obat melalui pengawasan stok menyeluruh dari level gudang hingga unit pelayanan.',
    benefits: [
      'Monitoring stok berdasarkan batch dan tanggal kedaluwarsa.',
      'Peringatan dini untuk stok minimum dan stok mati.',
      'Mengurangi risiko kekosongan obat esensial.'
    ],
    flow: ['Penerimaan Barang', 'Pencatatan Batch', 'Pemantauan Stok', 'Notifikasi', 'Penyesuaian']
  },
  {
    slug: 'forecasting-kebutuhan',
    title: 'Forecasting Kebutuhan',
    icon: 'solar:chart-2-bold-duotone',
    image: '/services/forecasting-kebutuhan.svg',
    desc: 'Perencanaan kebutuhan berbasis histori pemakaian untuk mencegah kekosongan atau overstock.',
    intro:
      'Modul forecasting memproyeksikan kebutuhan obat menggunakan histori konsumsi dan pola penyakit agar perencanaan pengadaan lebih akurat.',
    benefits: [
      'Proyeksi kebutuhan periode bulanan dan triwulan.',
      'Dukungan perencanaan pembelian berbasis data.',
      'Pengendalian biaya melalui pengadaan yang tepat sasaran.'
    ],
    flow: ['Kumpulkan Data', 'Analisis Tren', 'Hitung Kebutuhan', 'Review Farmasis', 'Finalisasi Rencana']
  },
  {
    slug: 'logistik-farmasi',
    title: 'Logistik Farmasi',
    icon: 'solar:delivery-bold-duotone',
    image: '/services/logistik-farmasi.svg',
    desc: 'Mendukung pengadaan, penyimpanan, dan distribusi obat agar lebih terkontrol dan efisien.',
    intro:
      'Fitur logistik farmasi mengintegrasikan proses pengadaan hingga distribusi obat agar alur supply chain transparan dan terdokumentasi baik.',
    benefits: [
      'Kontrol proses pengadaan dan penerimaan barang.',
      'Pemetaan distribusi obat antar unit pelayanan.',
      'Audit trail perpindahan barang untuk akuntabilitas.'
    ],
    flow: ['Perencanaan', 'Pengadaan', 'Penerimaan', 'Penyimpanan', 'Distribusi']
  },
  {
    slug: 'farmasi-klinik',
    title: 'Farmasi Klinik',
    icon: 'solar:heart-pulse-bold-duotone',
    image: '/services/farmasi-klinik.svg',
    desc: 'Monitoring terapi, evaluasi penggunaan obat, dan pendekatan patient-oriented di fasilitas kesehatan.',
    intro:
      'Layanan farmasi klinik mendukung kolaborasi dengan tenaga medis untuk memastikan terapi pasien aman, rasional, dan efektif.',
    benefits: [
      'Pemantauan terapi obat pada pasien rawat jalan maupun rawat inap.',
      'Identifikasi drug related problems secara proaktif.',
      'Meningkatkan keselamatan pasien melalui intervensi farmasis.'
    ],
    flow: ['Review Terapi', 'Monitoring', 'Intervensi', 'Edukasi Pasien', 'Evaluasi Hasil']
  },
  {
    slug: 'laporan-keuangan',
    title: 'Laporan Keuangan',
    icon: 'solar:wallet-money-bold-duotone',
    image: '/services/laporan-keuangan.svg',
    desc: 'Rekap transaksi dan performa operasional untuk mendukung pengambilan keputusan yang cepat.',
    intro:
      'Modul laporan keuangan menampilkan ringkasan transaksi farmasi dan indikator biaya operasional untuk memudahkan evaluasi manajemen.',
    benefits: [
      'Laporan pendapatan dan pengeluaran layanan farmasi.',
      'Analisis tren transaksi untuk evaluasi performa.',
      'Membantu penyusunan keputusan strategis berbasis data.'
    ],
    flow: ['Pencatatan Transaksi', 'Rekonsiliasi', 'Penyusunan Laporan', 'Analisis', 'Pengambilan Keputusan']
  }
]

export function findServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
