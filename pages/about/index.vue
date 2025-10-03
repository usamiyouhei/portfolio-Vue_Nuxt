<template>
  <main class="about-page">
    <header class="about_page--hero inner">
      <SectionTitle sectionTitle="About" sectionSubTitle="経歴・スキル"></SectionTitle>
      <p class="about-page__lead">
        一皿のデザートと体験のデザイン。<br>
        パティシエ × デジタルクリエイターとしての歩みとスキル、そしてストーリー。
      </p>
    </header>

    <section class="aboutpage__section">
      <SectionTitle sectionTitle="Story" sectionSubTitle="ストーリー"/>
      <AboutStory :story="story"/>
    </section>

    <section class="about-page__section inner">
      <SectionTitle sectionTitle="TimeLine" sectionSubTitle="経歴"/>
      <AboutTimeline :items="timeline"/>
    </section>

    <section class="about-page__section inner">
      <SectionTitle sectionTitle="Skills" sectionSubTitle="スキル"/>
      <AboutSkills :skills="skills" />
    </section>
  </main>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue';
import type { TimelineItem } from '~/components/about/AboutTimeline.vue';
import type { Skill } from '~/components/about/AboutSkills.vue';
import type { Story } from '~/components/about/AboutStory.vue';
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const timeline: TimelineItem[] = [
  { period: "2019–2024", title: "dessert une assiette 運営", detail: "カウンターデザートコースを一人で企画・運営。器と一体の体験型デザートを提供。" },
  { period: "2025–",     title: "ドバイ勤務", detail: "パティシエとして海外でのオペレーション・新作開発。" },
  { period: "2025–",     title: "Web制作／アプリ開発",  detail: "Nuxt/Next/TypeScriptでポートフォリオ・英単語アプリ等を開発。" },
]

const skills: Skill[] = [
    { name: "Nuxt / Vue",     level: 4, tags: ["Composition API", "Swiper", "SCSS"] },
  { name: "Next / React",   level: 3, tags: ["Tailwind", "App Router", "TypeScript"] },
  { name: "UI/UX デザイン", level: 4, tags: ["BEM", "アクセシビリティ", "モーション"] },
  { name: "Pâtisserie",     level: 5, tags: ["和三盆", "抹茶", "ナパージュ / ミラー"] },
] 

const story: Story = {
  photo: "/img/about-my-photo.jpg", // /public/img なら /img で参照可能
  caption: "“一皿に魂を込めて” の原点",
  paragraphs: [
    "日本で立ち上げたカウンターデザート店では、その場限りの体験設計にこだわりました。",
    "現在はドバイでの経験を通じ、デジタルでも “記憶に残る時間” を形にしています。",
  ]
}
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.about-page{
  margin-top: 50px;
  padding: 60px 100px;
}

.inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>