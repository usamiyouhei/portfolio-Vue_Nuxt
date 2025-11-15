<template>
  <main class="about-page">
    <Breadcrumb :crumbs="crumbs" />

    <header class="about_page--hero inner">
      <SectionTitle
        sectionTitle="About"
        sectionSubTitle="経歴・スキル"
      ></SectionTitle>
      <p class="about-page__lead">
        一皿のデザートと体験のデザイン。<br />
        パティシエ ×
        デジタルクリエイターとしての歩みとスキル、そしてストーリー。
      </p>
    </header>

    <section class="about-page__section">
      <SectionTitle sectionTitle="Story" sectionSubTitle="ストーリー" />
      <AboutStory :story="story" />
    </section>

    <section class="about-page__section inner">
      <SectionTitle sectionTitle="TimeLine" sectionSubTitle="経歴" />
      <AboutTimeline :items="timeline" />
    </section>

    <section class="about-page__section inner">
      <SectionTitle sectionTitle="Skills" sectionSubTitle="スキル" />
      <AboutSkills :skills="skills" />
    </section>
  </main>
  <LoopText />
</template>

<script setup lang="ts">
import SectionTitle from "~/components/common/SectionTitle.vue";
import LoopText from "~/components/common/LoopText.vue";
import type { TimelineItem } from "~/components/about/AboutTimeline.vue";
import type { Skill } from "~/components/about/AboutSkills.vue";
import type { Story } from "~/components/about/AboutStory.vue";
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const timeline: TimelineItem[] = [
  {
    period: "2003",
    title: "愛知工業高校卒業",
    detail: "ものづくりの楽しさを学ぶ",
  },
  {
    period: "2003-2011",
    title: "株式会社エーデルワイス入社",
    detail: "ケーキ作りの基礎から応用まで仕事をしながら習得",
  },
  {
    period: "2008",
    title: "西日本洋菓子コンクール最優秀賞受賞",
    detail: "ケーキのアート作品を時間内に作成。２位受賞",
  },
  {
    period: "2011",
    title: "株式会社ペニンシュラ東京入社",
    detail: "主に宴会デザートを担当。",
  },
  {
    period: "2012",
    title: "株式会社浦和ロイヤルパインズホテル入社",
    detail: "主に宴会デザート、ブティックケーキ制作を担当。コンクールにも挑戦",
  },
  {
    period: "2013",
    title: "都内のデザートコンクール決勝進出",
    detail: "入賞は逃すが、デザートは高評価",
  },
  {
    period: "2014-2016",
    title: "レストランアップステアーズ",
    detail: "シェフパティシエ",
  },
  {
    period: "2016-2018",
    title: "ミシュラン２つ星 レストラン レミニセンス",
    detail: "シェフパティシエ",
  },
  {
    period: "2019-2024",
    title: "dessert une assiette 運営",
    detail:
      "カウンターデザートコースを一人で企画・運営。器と一体の体験型デザートを提供。",
  },
  { period: "2024-2025", title: "株式会社RingZero", detail: "Web開発会社" },
  {
    period: "2025-",
    title: "ドバイ勤務",
    detail: "パティシエとして海外でのオペレーション・新作開発。",
  },
  {
    period: "2025-",
    title: "Web制作／アプリ開発",
    detail: "Nuxt/Next/TypeScriptでポートフォリオ・その他アプリ等を自己開発。",
  },
];

const skills: Skill[] = [
  {
    name: "Pâtisserie",
    level: 5,
    tags: ["和三盆", "抹茶", "ナパージュ / ミラー"],
  },
  { name: "Nuxt / Vue", level: 4, tags: ["Composition API", "Swiper", "SCSS"] },
  {
    name: "Next / React",
    level: 3,
    tags: ["Tailwind", "App Router", "TypeScript"],
  },
  {
    name: "UI/UX デザイン",
    level: 4,
    tags: ["BEM", "アクセシビリティ", "モーション"],
  },
];

const story: Story = {
  photo: "/img/about/about_my_photo.jpg", // /public/img なら /img で参照可能
  caption: "“一皿に魂を込めて” の原点",
  paragraphs: [
    "幼い頃からモノを作るのが好きで工業高校に入学",
    "あるきっかけでパティシエの道に。",
    "専門学校には行かずに働きながら学び、独学の部分も多い。",
    "開業した自店では『他では食べられない、唯一無二のデザート』をテーマにした、四季折々の食材を使ってデザートを作成。技術力を高める為、日々の研鑽に努めておりまして、お菓子、料理、プログラミング、写真など好きなことを追求しております。",
    "日本で立ち上げたカウンターデザート店では、その場限りの体験設計にこだわりました。",
    "現在はドバイでの経験を通じ、デジタルでも “記憶に残る時間” を形にしています。",
  ],
};

const { crumbs } = useBreadcrumb("about");
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.about-page {
  margin-top: 80px;
  padding: 0;

  .about-page__lead {
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.9;
    margin-top: 20px;
    opacity: 0.9;
  }

  .about-page__section {
    padding: 80px 0;
  }

  .about-page__section:nth-of-type(even) {
    background: #fafafa;
  }

  .inner {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .about-story {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 40px;
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    img {
      border-radius: 12px;
      width: 100%;
      object-fit: cover;
    }

    p {
      font-size: 17px;
      line-height: 1.8;
      margin-bottom: 1.4em;
    }
  }
}
</style>
