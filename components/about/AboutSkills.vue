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
.skills {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.skills__card {
  background: rgba(255, 255, 255, .04);
  border: 1px solid rgba(255, 255, 255, .8);
  border-radius: 14px;
  padding: 14px;
}

.skills__head {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 10px;
  align-items: center;
}
.skills__name {
  font-weight: 600;
}
.skills__meter {
  grid-column: 1 / -1;
  width: 100%;
  height: 8px;
}
.skills__lvl {
  font-size: 12px;
  opacity: .75;
}
.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.skills__tag {
  font-size: 12px; 
  padding: 4px 8px; 
  border-radius: 999px;
  background: rgba(199,160,73,.15); 
  border: 1px solid rgba(199,160,73,.35);
}
</style>