<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { findServiceBySlug, services } from '../data/services'

const route = useRoute()

const service = computed(() => findServiceBySlug(route.params.slug))

const recommendations = computed(() => {
  if (!service.value) {
    return []
  }
  return services.filter((item) => item.slug !== service.value.slug).slice(0, 3)
})
</script>

<template>
  <div class="page-shell">
    <header class="topbar container">
      <div class="brand-wrap">
        <span class="brand-dot" aria-hidden="true"></span>
        <span class="brand-name">Manajemen Farmasi</span>
      </div>
      <RouterLink class="top-cta" to="/">Kembali ke Beranda</RouterLink>
    </header>

    <main v-if="service" class="detail-page container">
      <section class="panel detail-hero">
        <img class="detail-hero-image" :src="service.image" :alt="`Banner ${service.title}`" />
        <div class="detail-hero-body">
          <p class="eyebrow">Detail Layanan</p>
          <h1>{{ service.title }}</h1>
          <p>{{ service.intro }}</p>
          <div class="detail-meta">
            <span class="icon-chip"><Icon :icon="service.icon" /></span>
            <span class="detail-meta-text">Dirancang untuk alur kerja farmasi yang lebih terukur.</span>
          </div>
        </div>
      </section>

      <section class="detail-content">
        <article class="panel detail-card">
          <h2>Manfaat Utama</h2>
          <ul class="detail-list">
            <li v-for="point in service.benefits" :key="point">
              <Icon icon="solar:check-circle-bold-duotone" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </article>

        <article class="panel detail-card">
          <h2>Alur Proses</h2>
          <ol class="detail-steps">
            <li v-for="step in service.flow" :key="step">{{ step }}</li>
          </ol>
          <p class="detail-note">
            Setiap tahap dapat dipantau melalui dashboard agar evaluasi operasional berjalan konsisten.
          </p>
        </article>
      </section>

      <section class="related-services">
        <div class="section-head">
          <p class="eyebrow">Layanan Terkait</p>
          <h2>Eksplor Layanan Lainnya</h2>
        </div>
        <div class="service-grid">
          <RouterLink
            v-for="item in recommendations"
            :key="item.slug"
            class="panel service-card service-link"
            :to="`/layanan/${item.slug}`"
          >
            <img class="service-thumb" :src="item.image" :alt="`Ilustrasi ${item.title}`" />
            <span class="icon-chip"><Icon :icon="item.icon" /></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <span class="service-readmore">
              Lihat Detail
              <Icon icon="solar:arrow-right-up-linear" />
            </span>
          </RouterLink>
        </div>
      </section>
    </main>

    <section v-else class="container">
      <article class="panel not-found">
        <h1>Layanan tidak ditemukan</h1>
        <p>Halaman detail yang Anda cari tidak tersedia atau tautannya sudah berubah.</p>
        <RouterLink class="btn btn-primary" to="/">Kembali ke Beranda</RouterLink>
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
            Platform manajemen farmasi modern untuk operasional, klinis, dan logistik yang saling
            terintegrasi.
          </p>
        </div>

        <div class="footer-links">
          <h4>Navigasi</h4>
          <RouterLink to="/">Beranda</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#layanan' }">Layanan</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#kontak' }">Kontak</RouterLink>
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
