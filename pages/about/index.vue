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
      <AboutSkills />
    </section>
  </main>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue';
import type { TimelineItem } from '~/components/about/AboutTimeline.vue';

/**===================================================================================================================
 * 
 ===================================================================================================================**/
const timeline: TimelineItem[] = [
  { period: "2019–2024", title: "dessert une assiette 運営", detail: "カウンターデザートコースを一人で企画・運営。器と一体の体験型デザートを提供。" }
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