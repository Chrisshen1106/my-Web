<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  ArrowUpRight,
  Code2,
  Gamepad2,
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
let activeSectionLockTimer = null;

const profilePhoto = new URL('../S__59359236_0.jpg', import.meta.url).href;
const resumePdf = new URL('../pdf/Jui-Ping-Shen-Resume.pdf', import.meta.url).href;
const workExperiencePdf = new URL('../pdf/沈芮平_工作經歷.pdf', import.meta.url).href;
const projectPortfolioPdf = new URL('../pdf/沈芮平_專題經歷.pdf', import.meta.url).href;
const awardActivitiesPdf = new URL('../pdf/沈芮平_獲獎經歷與課外表現.pdf', import.meta.url).href;
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
  { key: 'experience', href: '#experience' },
  { key: 'courses', href: '#courses' },
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
  lockActiveSection();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleNavClick(event, item) {
  event.preventDefault();

  if (item.key === 'profile') {
    scrollToTop();
    return;
  }

  activeSection.value = item.key;
  lockActiveSection();
  closeMenu();

  document.getElementById(item.key)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
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

function gradeClass(grade) {
  return {
    'grade-plus': grade === 'A+',
    'grade-plain': grade === 'A',
    'grade-minus': grade === 'A-',
  };
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
  window.clearTimeout(activeSectionLockTimer);
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
  if (activeSectionLockTimer) return;
  if (activeSectionFrame) return;

  activeSectionFrame = requestAnimationFrame(() => {
    activeSectionFrame = null;
    updateActiveSection();
  });
}

function lockActiveSection() {
  window.clearTimeout(activeSectionLockTimer);
  activeSectionLockTimer = window.setTimeout(() => {
    activeSectionLockTimer = null;
    updateActiveSection();
  }, 900);
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

          <div class="document-block">
            <div class="document-heading">
              <strong>Documents</strong>
              <span>PDF files</span>
            </div>
            <div class="document-links" aria-label="Document links">
              <a
                class="resume-link"
                :href="resumePdf"
                target="_blank"
                rel="noopener"
                aria-label="Open resume PDF in a new tab"
              >
                Resume
                <ArrowUpRight aria-hidden="true" :size="15" />
              </a>
              <a
                class="resume-link"
                :href="workExperiencePdf"
                target="_blank"
                rel="noopener"
                aria-label="Open work experience PDF in a new tab"
              >
                Work experience
                <ArrowUpRight aria-hidden="true" :size="15" />
              </a>
              <a
                class="resume-link"
                :href="projectPortfolioPdf"
                target="_blank"
                rel="noopener"
                aria-label="Open project portfolio PDF in a new tab"
              >
                Project portfolio
                <ArrowUpRight aria-hidden="true" :size="15" />
              </a>
              <a
                class="resume-link"
                :href="awardActivitiesPdf"
                target="_blank"
                rel="noopener"
                aria-label="Open award and extracurricular activities PDF in a new tab"
              >
                Award &amp; Extracurricular activities
                <ArrowUpRight aria-hidden="true" :size="15" />
              </a>
            </div>
          </div>
        </div>

        <figure class="portrait-panel">
          <img :src="profilePhoto" :alt="t('hero.portraitCaption')" />
          <figcaption>{{ t('hero.portraitCaption') }}</figcaption>
          <div class="profile-links" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/芮平-沈-60a50725a/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M6.94 8.88H3.72v10.38h3.22V8.88ZM5.34 7.47c1.03 0 1.87-.84 1.87-1.87S6.37 3.73 5.34 3.73 3.47 4.57 3.47 5.6s.84 1.87 1.87 1.87Zm13.12 11.79h3.07v-5.7c0-3.06-1.63-4.48-3.81-4.48-1.76 0-2.55.97-2.99 1.65V8.88h-3.08v10.38h3.08v-5.79c0-1.55.29-3.05 2.22-3.05 1.9 0 1.93 1.78 1.93 3.15v5.69Z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_pinggggg_1106/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <svg
                class="social-icon instagram-icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <rect x="4" y="4" width="16" height="16" rx="4.5"></rect>
                <circle cx="12" cy="12" r="3.4"></circle>
                <circle cx="16.8" cy="7.2" r="1"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/Chrisshen1106"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M12 2.5c-5.25 0-9.5 4.26-9.5 9.52 0 4.2 2.73 7.77 6.51 9.03.48.09.65-.21.65-.46v-1.8c-2.65.58-3.21-1.13-3.21-1.13-.43-1.1-1.06-1.39-1.06-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.85 1.46 2.24 1.04 2.79.79.09-.62.33-1.04.6-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.9.98-2.57-.1-.24-.43-1.22.09-2.54 0 0 .81-.26 2.62.98.76-.21 1.57-.32 2.38-.32s1.62.11 2.38.32c1.81-1.24 2.61-.98 2.61-.98.52 1.32.19 2.3.09 2.54.61.67.98 1.53.98 2.57 0 3.67-2.24 4.48-4.36 4.72.34.3.64.88.64 1.77v2.64c0 .26.17.55.66.46A9.52 9.52 0 0 0 21.5 12.02c0-5.26-4.25-9.52-9.5-9.52Z"
                ></path>
              </svg>
            </a>
          </div>
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
                <strong :class="gradeClass(course.grade)">{{ formatGrade(course.grade) }}</strong>
              </div>
            </div>
          </article>

          <article class="course-panel">
            <h3>{{ t('courses.analyticsTitle') }}</h3>
            <div class="course-list">
              <div v-for="course in analyticsCourses" :key="course.name" class="course-row">
                <span>{{ course.name }}</span>
                <strong :class="gradeClass(course.grade)">{{ formatGrade(course.grade) }}</strong>
              </div>
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
                  <div class="project-title-row">
                    <h3>{{ project.title }}</h3>
                    <a
                      v-if="project.link"
                      class="project-link"
                      :href="project.link"
                      target="_blank"
                      rel="noopener"
                    >
                      <Gamepad2 aria-hidden="true" :size="11" />
                      {{ project.linkLabel || t('labels.projectLink') }}
                      <ArrowUpRight aria-hidden="true" :size="10" />
                    </a>
                  </div>
                  <p>{{ project.description }}</p>
                  <p class="meta-line"><strong>{{ t('labels.focus') }}</strong> {{ project.tags.join(' · ') }}</p>
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
