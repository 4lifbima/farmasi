<script setup>
import { Icon } from '@iconify/vue'
import { services as highlights } from '../data/services'

const stats = [
  { label: 'Pemantauan Stok', value: 'Real-time', icon: 'solar:alarm-bold-duotone' },
  { label: 'Fokus Pelayanan', value: 'Patient-Oriented', icon: 'solar:users-group-rounded-bold-duotone' },
  { label: 'Dukungan Keputusan', value: 'Cepat & Akurat', icon: 'solar:graph-up-bold-duotone' },
  { label: 'Standar Layanan', value: 'Terkontrol', icon: 'solar:shield-check-bold-duotone' }
]
</script>

<template>
  <div class="page-shell">
    <header class="topbar container">
      <div class="brand-wrap">
        <span class="brand-dot" aria-hidden="true"></span>
        <span class="brand-name">Manajemen Farmasi</span>
      </div>
      <a class="top-cta" href="#kontak">Konsultasi Demo</a>
    </header>

    <section class="hero container" id="beranda">
      <div class="hero-content">
        <p class="eyebrow">Platform Pelayanan Farmasi Terintegrasi</p>
        <h1>Kelola Pelayanan Kefarmasian dengan Standar Modern</h1>
        <p class="hero-desc">
          Platform digital untuk mengelola pelayanan kefarmasian secara efektif, efisien, dan
          terintegrasi.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#layanan">Lihat Layanan</a>
          <a class="btn btn-light" href="#tentang">Pelajari Sistem</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-card">
          <img src="/icons.jpeg" alt="Visual inspirasi desain website farmasi" />
          <div class="hero-badge">
            <strong><Icon icon="solar:syringe-bold-duotone" /> Solusi Terintegrasi</strong>
            <span>Operasional, klinis, dan logistik dalam satu dashboard.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="overview container" id="tentang">
      <article class="panel panel-large">
        <p class="eyebrow">Deskripsi Utama</p>
        <h2>Website Manajemen Farmasi</h2>
        <p>
          Website Manajemen Farmasi merupakan platform digital yang dirancang untuk membantu
          pengelolaan pelayanan kefarmasian secara terintegrasi, mulai dari perencanaan kebutuhan
          obat, pengadaan, penyimpanan, distribusi, hingga pelayanan farmasi klinik. Sistem ini
          mendukung tenaga farmasi dalam meningkatkan efisiensi operasional, menjamin ketersediaan
          obat, serta memastikan penggunaan obat yang aman, rasional, dan berfokus pada pasien.
          Dengan dukungan teknologi informasi, website ini memudahkan pemantauan stok, pengelolaan
          data pasien, serta pengambilan keputusan yang lebih cepat dan akurat.
        </p>
      </article>

      <div class="stats-grid">
        <article v-for="item in stats" :key="item.label" class="panel stat-card">
          <span class="icon-chip"><Icon :icon="item.icon" /></span>
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </div>
    </section>

    <section class="services container" id="layanan">
      <div class="section-head">
        <p class="eyebrow">Deskripsi Fitur</p>
        <h2>Layanan Manajemen Farmasi</h2>
        <p>
          Website ini menyediakan berbagai fitur utama dalam manajemen farmasi, meliputi pelayanan
          kefarmasian, pengelolaan persediaan obat, forecasting kebutuhan, logistik farmasi,
          farmasi klinik, hingga laporan keuangan. Setiap fitur dirancang untuk mendukung alur
          kerja apotek atau fasilitas kesehatan agar lebih sistematis, terkontrol, dan sesuai
          standar pelayanan kefarmasian.
        </p>
      </div>

      <div class="service-grid">
        <RouterLink
          v-for="feature in highlights"
          :key="feature.slug"
          class="panel service-card service-link"
          :to="`/layanan/${feature.slug}`"
        >
          <img class="service-thumb" :src="feature.image" :alt="`Ilustrasi ${feature.title}`" />
          <span class="icon-chip"><Icon :icon="feature.icon" /></span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
          <span class="service-readmore">
            Lihat Detail
            <Icon icon="solar:arrow-right-up-linear" />
          </span>
        </RouterLink>
      </div>
    </section>

    <section class="academic container" id="akademik">
      <article class="panel panel-large">
        <p class="eyebrow">Deskripsi Akademik</p>
        <h2>Sistem Informasi Berbasis Web</h2>
        <p>
          Website Manajemen Farmasi merupakan sistem informasi berbasis web yang mendukung proses
          perencanaan, pengorganisasian, pengelolaan, dan pengawasan kegiatan kefarmasian.
          Platform ini mengintegrasikan aspek manajerial dan klinis, termasuk pengelolaan obat dan
          bahan medis habis pakai, pelayanan farmasi klinik, serta evaluasi penggunaan obat. Dengan
          pendekatan patient-oriented, sistem ini bertujuan meningkatkan kualitas pelayanan,
          keselamatan pasien, serta efektivitas terapi.
        </p>
      </article>
    </section>

    <section class="promo container" id="kontak">
      <article class="panel cta-panel">
        <p class="eyebrow">Deskripsi Promosi</p>
        <h2>Praktis, Cepat, dan Profesional</h2>
        <p>
          Kelola apotek dan pelayanan farmasi Anda dengan lebih mudah dan profesional! Website
          Manajemen Farmasi hadir sebagai solusi modern untuk mengatur stok obat, pelayanan resep,
          hingga monitoring terapi pasien dalam satu sistem terintegrasi. Praktis, cepat, dan
          membantu meningkatkan kualitas pelayanan kesehatan Anda.
        </p>
        <a class="btn btn-primary" href="#beranda">Mulai Sekarang</a>
      </article>
    </section>

    <footer class="site-footer container">
      <div class="footer-main panel">
        <div class="footer-brand">
          <div class="brand-wrap">
            <span class="brand-dot" aria-hidden="true"></span>
            <span class="brand-name">Manajemen Farmasi</span>
          </div>
          <p>
            Solusi digital terintegrasi untuk pengelolaan pelayanan kefarmasian yang efektif,
            efisien, dan berfokus pada pasien.
          </p>
        </div>

        <div class="footer-links">
          <h4>Navigasi</h4>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#akademik">Akademik</a>
        </div>

        <div class="footer-contact">
          <h4>Kontak</h4>
          <p><Icon icon="solar:letter-bold-duotone" /> hello@farmasi.id</p>
          <p><Icon icon="solar:phone-bold-duotone" /> +62 812 3456 7890</p>
          <p><Icon icon="solar:map-point-bold-duotone" /> Indonesia</p>
        </div>
      </div>
      <p class="footer-copy">© 2026 Manajemen Farmasi. All rights reserved.</p>
    </footer>
  </div>
</template>
