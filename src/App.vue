<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  ArrowUpRight,
  Code2,
  Globe2,
  Mail,
  Menu,
  Phone,
  X,
} from '@lucide/vue';

const { t, tm, locale } = useI18n();
const menuOpen = ref(false);
const copiedEmail = ref(false);
const selectedExperience = ref(null);
const activeSection = ref('profile');
const year = new Date().getFullYear();
let copyTimer;
let revealObserver;
let revealVisibleHandler = () => {};
let activeSectionFrame = null;
let activeSectionHandler = null;

const profilePhoto = new URL('../S__59359236_0.jpg', import.meta.url).href;
const galleryImages = [
  {
    key: 'softwareSystem',
    src: new URL('../Photo/軟體開發系統.png', import.meta.url).href,
  },
  {
    key: 'softwareArchitecture',
    src: new URL('../Photo/軟體開發系統架構.png', import.meta.url).href,
  },
  {
    key: 'cloudArchitecture',
    src: new URL('../Photo/雲原生系統架構.png', import.meta.url).href,
  },
  {
    key: 'cloudRecord',
    src: new URL('../Photo/雲原生系統紀錄.png', import.meta.url).href,
  },
  {
    key: 'lab',
    src: new URL('../Photo/LAB聚餐.jpg', import.meta.url).href,
  },
  {
    key: 'workshop',
    src: new URL('../Photo/SodinX金融工作坊.png', import.meta.url).href,
  },
  {
    key: 'game',
    src: new URL('../Photo/遊戲設計期末專題2.jpg', import.meta.url).href,
  },
  {
    key: 'nvidia',
    src: new URL('../Photo/NVIDIA深度學習證書.png', import.meta.url).href,
  },
  {
    key: 'toeic',
    src: new URL('../Photo/TOEIC證書.png', import.meta.url).href,
  },
  {
    key: 'bikeFestival',
    src: new URL('../Photo/成大單車節公關.png', import.meta.url).href,
  },
  {
    key: 'trivia',
    src: new URL('../Photo/成大金頭腦第三名.png', import.meta.url).href,
  },
  {
    key: 'environmentAward',
    src: new URL('../Photo/環境經濟學得獎獎狀.png', import.meta.url).href,
  },
  {
    key: 'freshmanCamp',
    src: new URL('../Photo/經濟系新生宿營合照.png', import.meta.url).href,
  },
  {
    key: 'gameDesign',
    src: new URL('../Photo/遊戲設計.png', import.meta.url).href,
  },
  {
    key: 'webapp',
    src: new URL('../Photo/WebAPP模擬平台.png', import.meta.url).href,
  },
  {
    key: 'campFire',
    src: new URL('../Photo/經濟系新生宿營火晚.png', import.meta.url).href,
  },
  {
    key: 'econometricsShow',
    src: new URL('../Photo/計量經濟學期末展演.png', import.meta.url).href,
  },
  {
    key: 'econometricsCertificate',
    src: new URL('../Photo/計量經濟學二參加證明.png', import.meta.url).href,
  },
  {
    key: 'gameFinal',
    src: new URL('../Photo/遊戲設計期末專題.jpg', import.meta.url).href,
  },
];
const marqueeImages = Array.from({ length: 3 }, (_, copyIndex) =>
  galleryImages.map((item) => ({
    ...item,
    copyIndex,
    repeatKey: `${item.key}-${copyIndex}`,
  })),
).flat();

const navItems = [
  { key: 'profile', href: '#profile' },
  { key: 'education', href: '#education' },
  { key: 'courses', href: '#courses' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'awards', href: '#awards' },
  { key: 'activities', href: '#activities' },
  { key: 'contact', href: '#contact' },
];

const basicInfo = computed(() => tm('hero.basicInfo'));
const educationItems = computed(() => tm('education.items'));
const skillGroups = computed(() => tm('skills.groups'));
const experienceItems = computed(() => tm('experience.items'));
const awards = computed(() => tm('awards.items'));
const projects = computed(() => tm('projects.items'));
const projectGroups = computed(() =>
  projects.value.reduce((groups, project) => {
    const group = groups.find((item) => item.year === project.year);
    if (group) {
      group.items.push(project);
      return groups;
    }

    groups.push({ year: project.year, items: [project] });
    return groups;
  }, []),
);
const technologyCourses = computed(() => tm('courses.technology'));
const analyticsCourses = computed(() => tm('courses.analytics'));
const activities = computed(() => tm('activities.items'));
const contactInfo = computed(() => tm('contact'));

function setLocale(value) {
  locale.value = value;
  localStorage.setItem('portfolio-locale', locale.value);
  menuOpen.value = false;
}

function scrollToTop() {
  menuOpen.value = false;
  activeSection.value = 'profile';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleNavClick(event, item) {
  if (item.key === 'profile') {
    event.preventDefault();
    scrollToTop();
    return;
  }

  activeSection.value = item.key;
  closeMenu();
}

async function copyEmail() {
  const email = contactInfo.value.email;

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  copiedEmail.value = true;
  window.clearTimeout(copyTimer);
  copyTimer = window.setTimeout(() => {
    copiedEmail.value = false;
  }, 1800);
}

function closeMenu() {
  menuOpen.value = false;
}

function openExperience(item) {
  selectedExperience.value = item;
}

function closeExperience() {
  selectedExperience.value = null;
}

function formatGrade(grade) {
  return grade === 'A' ? 'A\u00a0' : grade;
}

function formatTags(tags) {
  return tags.join(locale.value === 'zh' ? '、' : ' · ');
}

onMounted(() => {
  const elements = document.querySelectorAll('.reveal');

  revealVisibleHandler = () => {
    elements.forEach((element) => {
      if (element.classList.contains('is-visible')) {
        return;
      }

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        element.classList.add('is-visible');
        revealObserver?.unobserve(element);
      }
    });
  };

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
  } else {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -48px 0px',
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 55}ms`);
      revealObserver.observe(element);
    });
  }

  revealVisibleHandler();
  window.addEventListener('scroll', revealVisibleHandler, { passive: true });
  window.addEventListener('resize', revealVisibleHandler);

  startActiveSectionTracking();
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
  window.removeEventListener('scroll', revealVisibleHandler);
  window.removeEventListener('resize', revealVisibleHandler);
  stopActiveSectionTracking();
  document.body.classList.remove('modal-open');
  window.clearTimeout(copyTimer);
});

function startActiveSectionTracking() {
  activeSectionHandler = requestActiveSectionUpdate;
  updateActiveSection();
  window.addEventListener('scroll', activeSectionHandler, { passive: true });
  window.addEventListener('resize', activeSectionHandler);
}

function stopActiveSectionTracking() {
  if (activeSectionHandler) {
    window.removeEventListener('scroll', activeSectionHandler);
    window.removeEventListener('resize', activeSectionHandler);
    activeSectionHandler = null;
  }

  if (activeSectionFrame) {
    cancelAnimationFrame(activeSectionFrame);
    activeSectionFrame = null;
  }
}

function requestActiveSectionUpdate() {
  if (activeSectionFrame) return;

  activeSectionFrame = requestAnimationFrame(() => {
    activeSectionFrame = null;
    updateActiveSection();
  });
}

function updateActiveSection() {
  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
  const anchorY = window.scrollY + headerHeight + Math.min(window.innerHeight * 0.28, 180);
  const sectionItems = navItems
    .map((item) => ({
      key: item.key,
      element: document.getElementById(item.key),
    }))
    .filter((item) => item.element);

  let current = 'profile';

  sectionItems.forEach((item) => {
    if (item.element.offsetTop <= anchorY) {
      current = item.key;
    }
  });

  const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (nearBottom) {
    current = sectionItems[sectionItems.length - 1]?.key ?? current;
  }

  activeSection.value = current;
}

watch(selectedExperience, (item) => {
  document.body.classList.toggle('modal-open', Boolean(item));
});

watch(
  locale,
  (value) => {
    document.documentElement.lang = value === 'zh' ? 'zh-TW' : 'en';
  },
  { immediate: true },
);
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#" @click.prevent="scrollToTop">
        <span class="brand-mark">
          <img :src="profilePhoto" :alt="t('hero.portraitCaption')" />
        </span>
        <span>
          <strong>Chris Shen</strong>
          <small>Portfolio</small>
        </span>
      </a>

      <nav class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Primary navigation">
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="item.href"
          :class="{ active: activeSection === item.key }"
          :aria-current="activeSection === item.key ? 'location' : undefined"
          @click="handleNavClick($event, item)"
        >
          {{ t(`nav.${item.key}`) }}
        </a>
      </nav>

      <div class="header-actions">
        <div class="language-switch" role="group" :aria-label="t('actions.switchLanguage')">
          <Globe2 aria-hidden="true" :size="17" />
          <button
            type="button"
            :class="{ active: locale === 'zh' }"
            :aria-pressed="locale === 'zh'"
            @click="setLocale('zh')"
          >
            中文
          </button>
          <button
            type="button"
            :class="{ active: locale === 'en' }"
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>
        <button
          class="menu-toggle"
          type="button"
          :aria-label="menuOpen ? t('actions.closeMenu') : t('actions.openMenu')"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" aria-hidden="true" :size="21" />
          <Menu v-else aria-hidden="true" :size="21" />
        </button>
      </div>
    </header>
    <button
      v-if="menuOpen"
      class="menu-backdrop"
      type="button"
      :aria-label="t('actions.closeMenu')"
      @click="closeMenu"
    ></button>

    <section class="top-photo-marquee" aria-label="Portfolio photo records">
      <div class="photo-track">
        <article
          v-for="item in marqueeImages"
          :key="item.repeatKey"
          class="photo-card"
          :aria-hidden="item.copyIndex > 0 ? 'true' : undefined"
        >
          <img
            :src="item.src"
            :alt="item.copyIndex === 0 ? t(`gallery.items.${item.key}.title`) : ''"
            loading="eager"
            decoding="async"
            draggable="false"
          />
          <h3>{{ t(`gallery.items.${item.key}.title`) }}</h3>
        </article>
      </div>
    </section>

    <main>
      <section id="profile" class="hero-section reveal">
        <div class="hero-copy">
          <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
          <h1>
            {{ t('hero.name') }}
            <span>{{ t('hero.alias') }}</span>
          </h1>

          <dl class="basic-info">
            <div v-for="item in basicInfo" :key="item.label" class="basic-info-row">
              <dt>{{ item.label }}</dt>
              <dd v-if="item.kind === 'email'">
                <button type="button" class="copy-email-button" @click="copyEmail">
                  {{ item.value }}
                </button>
                <span class="copy-state" :class="{ show: copiedEmail }">{{ t('labels.copied') }}</span>
              </dd>
              <dd v-else>{{ item.value }}</dd>
            </div>
          </dl>
        </div>

        <figure class="portrait-panel">
          <img :src="profilePhoto" :alt="t('hero.portraitCaption')" />
          <figcaption>{{ t('hero.portraitCaption') }}</figcaption>
        </figure>
      </section>

      <section id="education" class="content-section reveal">
        <div class="section-heading">
          <p class="eyebrow">{{ t('education.eyebrow') }}</p>
          <h2>{{ t('education.title') }}</h2>
        </div>

        <div class="education-grid">
          <article v-for="school in educationItems" :key="school.institution" class="education-entry">
            <div class="card-topline">
              <span>{{ school.abbreviation }}</span>
            </div>
            <h3>{{ school.institution }}</h3>
            <ul class="education-detail-list">
              <li v-for="detail in school.details" :key="detail.label">
                <span>{{ detail.label }}</span>
                <strong>{{ detail.value }}</strong>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="courses" class="content-section reveal">
        <div class="section-heading">
          <p class="eyebrow">{{ t('courses.eyebrow') }}</p>
          <h2>{{ t('courses.title') }}</h2>
        </div>

        <div class="course-columns">
          <article class="course-panel">
            <h3>{{ t('courses.technologyTitle') }}</h3>
            <div class="course-list">
              <div v-for="course in technologyCourses" :key="course.name" class="course-row">
                <span>{{ course.name }}</span>
                <strong>{{ formatGrade(course.grade) }}</strong>
              </div>
            </div>
          </article>

          <article class="course-panel">
            <h3>{{ t('courses.analyticsTitle') }}</h3>
            <div class="course-list">
              <div v-for="course in analyticsCourses" :key="course.name" class="course-row">
                <span>{{ course.name }}</span>
                <strong>{{ formatGrade(course.grade) }}</strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="content-section compact-section reveal">
        <div class="section-heading">
          <p class="eyebrow">{{ t('skills.title') }}</p>
          <h2>{{ t('skills.title') }}</h2>
        </div>
        <div class="skill-grid">
          <article v-for="group in skillGroups" :key="group.name" class="skill-entry">
            <h3>{{ group.name }}</h3>
            <p class="skill-description">{{ group.description }}</p>
          </article>
        </div>
      </section>

      <section id="experience" class="content-section reveal">
        <div class="section-heading">
          <p class="eyebrow">{{ t('experience.eyebrow') }}</p>
          <h2>{{ t('experience.title') }}</h2>
        </div>

        <div class="timeline">
          <article
            v-for="item in experienceItems"
            :key="`${item.date}-${item.title}`"
            class="timeline-item"
          >
            <time>{{ item.date }}</time>
            <div>
              <h3>
                <template v-if="item.titleRole">
                  <span>{{ item.titleRole }}</span>
                  <span class="title-affiliation">｜{{ item.titleAffiliation }}</span>
                </template>
                <template v-else>{{ item.title }}</template>
              </h3>
              <p v-if="item.organization" class="organization">{{ item.organization }}</p>
              <p>{{ item.description }}</p>
              <p class="meta-line"><strong>{{ t('labels.focus') }}</strong> {{ formatTags(item.tags) }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="content-section reveal">
        <div class="section-heading">
          <p class="eyebrow">{{ t('projects.eyebrow') }}</p>
          <h2>{{ t('projects.title') }}</h2>
        </div>

        <div class="projects-list">
          <section v-for="group in projectGroups" :key="group.year" class="project-year-group">
            <time class="project-year">{{ group.year }}</time>
            <div class="project-year-items">
              <article v-for="project in group.items" :key="`${project.year}-${project.title}`" class="project-entry">
                <div class="project-header">
                  <span>{{ project.context }}</span>
                </div>
                <div class="project-body">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <p class="meta-line"><strong>{{ t('labels.methods') }}</strong> {{ project.tags.join(' · ') }}</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section id="awards" class="content-section reveal">
        <div class="section-heading">
          <p class="eyebrow">{{ t('awards.eyebrow') }}</p>
          <h2>{{ t('awards.title') }}</h2>
        </div>

        <div class="awards-grid">
          <article v-for="award in awards" :key="`${award.date}-${award.title}`" class="award-entry">
            <div>
              <time>{{ award.date }}</time>
              <h3>{{ award.title }}</h3>
              <strong>{{ award.achievement }}</strong>
              <p>{{ award.organization }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="activities" class="content-section split-section reveal">
        <div class="section-heading">
          <p class="eyebrow">{{ t('activities.eyebrow') }}</p>
          <h2>{{ t('activities.title') }}</h2>
        </div>

        <div class="activity-list">
          <article v-for="activity in activities" :key="`${activity.year}-${activity.title}`" class="activity-item">
            <time>{{ activity.year }}</time>
            <div>
              <h3>{{ activity.title }}</h3>
              <p>{{ activity.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="contact-section reveal">
        <div>
          <p class="eyebrow">{{ t('contact.eyebrow') }}</p>
          <h2>{{ t('contact.title') }}</h2>
        </div>
        <div class="contact-links">
          <button type="button" @click="copyEmail">
            <Mail aria-hidden="true" :size="19" />
            {{ contactInfo.email }}
            <span class="copy-state contact-copy-state" :class="{ show: copiedEmail }">{{ t('labels.copied') }}</span>
          </button>
          <a :href="`tel:${contactInfo.phone.replaceAll(' ', '')}`">
            <Phone aria-hidden="true" :size="19" />
            {{ contactInfo.phone }}
          </a>
          <a href="https://github.com/Chrisshen1106" target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" :size="19" />
            {{ contactInfo.github }}
            <ArrowUpRight aria-hidden="true" :size="16" />
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>© {{ year }} Chris Shen.</span>
    </footer>

    <div
      v-if="selectedExperience"
      class="experience-modal"
      role="dialog"
      aria-modal="true"
      :aria-label="selectedExperience.title"
      @click.self="closeExperience"
    >
      <article class="experience-card">
        <button type="button" class="modal-close" :aria-label="t('actions.closeCard')" @click="closeExperience">
          <X aria-hidden="true" :size="18" />
        </button>
        <time>{{ selectedExperience.date }}</time>
        <h3>
          <template v-if="selectedExperience.titleRole">
            <span>{{ selectedExperience.titleRole }}</span>
            <span class="title-affiliation">｜{{ selectedExperience.titleAffiliation }}</span>
          </template>
          <template v-else>{{ selectedExperience.title }}</template>
        </h3>
        <p v-if="selectedExperience.organization" class="organization">{{ selectedExperience.organization }}</p>
        <p>{{ selectedExperience.detail }}</p>
      </article>
    </div>
  </div>
</template>
