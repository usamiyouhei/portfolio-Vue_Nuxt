<template>
  <main class="about-page">
    <header class="about_page--hero inner">
      <SectionTitle sectionTitle="About" sectionSubTitle="経歴・スキル"></SectionTitle>
      
    </header>

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

/**===================================================================================================================
 * 
 ===================================================================================================================**/
const timeline: TimelineItem[] = [
  { period: "2019–2024", title: "dessert une assiette 運営", detail: "カウンターデザートコースを一人で企画・運営。器と一体の体験型デザートを提供。" },
  { period: "2025–",     title: "ドバイ勤務（TAKAHISA）", detail: "パティシエとして海外でのオペレーション・新作開発・現地食材の活用。" },
  { period: "2025–",     title: "Web制作／アプリ開発",  detail: "Nuxt/Next/TypeScriptでポートフォリオ・英単語アプリ等を開発。" },
]

const skills: Skill[] = [
    { name: "Nuxt / Vue",     level: 4, tags: ["Composition API", "Swiper", "SCSS"] },
  { name: "Next / React",   level: 3, tags: ["Tailwind", "App Router", "TypeScript"] },
  { name: "UI/UX デザイン", level: 4, tags: ["BEM", "アクセシビリティ", "モーション"] },
  { name: "Pâtisserie",     level: 5, tags: ["和三盆", "抹茶", "ナパージュ / ミラー"] },
] 

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.about-page{
  margin-top: 50px;
}
</style>