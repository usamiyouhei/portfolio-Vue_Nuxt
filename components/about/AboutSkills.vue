<template>
  <div class="skills">
    <div v-for="(skill, i) in skills" :key="i" class="skills__card">
      <div class="skills__head">
        <h4 class="skills__name">{{ skill.name }}</h4>
        <meter :min="0" :max="5" :value="skill.level" class="skills__meter" />
        <span class="skills__lvl">{{ skill.level }}/5</span>
      </div>
      <ul class="skills__tags">
        <li v-for="(tag, j) in skill.tags" :key="j" class="skills__tag">#{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
export type Skill = {
  name: string;
  level: 0|1|2|3|4|5;
  tags?: string[];
}

const props= defineProps<{ skills: Skill[]}>()

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
</style>