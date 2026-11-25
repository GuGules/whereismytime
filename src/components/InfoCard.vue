<script setup lang="ts">
import { BriefcaseBusiness } from "@lucide/vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="info-card mb-2" aria-labelledby="info-title">
    <div class="info-content">
      <span class="info-eyebrow">À propos</span>
      <h1 id="info-title">Informations</h1>

      <p class="info-author">
        Un site créé par <strong>Jules Pillot</strong>.
        Utilisation de l'IA limitée à cet encadré et à la documentation.
      </p>

      <p class="info-tech">
        Réalisé avec
        <span>Vue.js</span>
        <span>GitHub Actions</span>
        <span>Vercel</span>
      </p>

      <nav class="info-links" aria-label="Liens">
        <a
          class="info-link"
          href="https://jules-pillot.fr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter le site de Jules Pillot"
          title="Site de Jules Pillot"
        >
          <BriefcaseBusiness :size="20" aria-hidden="true" />
        </a>

        <a
          class="info-link"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter GitHub"
          title="GitHub"
        >
          <Icon icon="ant-design:github-outlined" aria-hidden="true" />
        </a>
      </nav>
    </div>

    <div class="info-decoration" aria-hidden="true">
      <BriefcaseBusiness :size="76" :stroke-width="1" />
    </div>
  </section>
</template>

<style scoped>
.info-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  overflow: hidden;
  padding: 2rem;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 1.25rem;
  background: linear-gradient(
    151deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 85%,
    rgba(252, 176, 69, 1) 100%
  );
  color: #fff;
  box-shadow: 0 12px 32px rgb(83 27 89 / 20%);
}

.info-content {
  position: relative;
  z-index: 1;
}

.info-eyebrow {
  display: inline-block;
  margin-bottom: 0.5rem;
  color: rgb(255 255 255 / 78%);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.info-card h1 {
  margin: 0;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  line-height: 1.1;
}

.info-author {
  margin: 1rem 0 0.5rem;
  font-size: 1rem;
}

.info-tech {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  color: rgb(255 255 255 / 85%);
  font-size: 0.9rem;
}

.info-tech span {
  padding: 0.3rem 0.65rem;
  border: 1px solid rgb(255 255 255 / 25%);
  border-radius: 999px;
  background: rgb(255 255 255 / 12%);
  color: #fff;
  font-size: 0.8rem;
}

.info-links {
  display: flex;
  gap: 0.65rem;
  margin-top: 1.25rem;
}

.info-link {
  display: inline-grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 35%);
  border-radius: 0.8rem;
  background: rgb(255 255 255 / 12%);
  color: #fff;
  transition:
    transform 180ms ease,
    background-color 180ms ease;
}

.info-link :deep(svg) {
  width: 20px;
  height: 20px;
}

.info-link:hover {
  transform: translateY(-2px);
  background: rgb(255 255 255 / 24%);
}

.info-link:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}

.info-decoration {
  display: grid;
  width: 7rem;
  height: 7rem;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 2rem;
  background: rgb(255 255 255 / 10%);
  color: rgb(255 255 255 / 75%);
  transform: rotate(8deg);
}

@media (max-width: 520px) {
  .info-card {
    padding: 1.5rem;
  }

  .info-decoration {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .info-link {
    transition: none;
  }
}
</style>