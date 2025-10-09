<template>
  <div class="overlay">
    <article class="modal">
      <header class="head">
        <h2 class="title">{{ work.title }}</h2>
        <button class="x" @click="emit('close')">×</button>
      </header>

      <div class="body">
        <div class="media">
          <img v-for="(src, i) in imgs" :src="src" :key="i" :alt="`${work.title} ${i + 1}`" loading="lazy">
        </div>

        <section v-if="work.description" class="section">
          <h3>Story</h3>
          {{ work.description }}
        </section>

        <section v-if="work.platingNotes?.length" class="section">
          <h3>Plating & Concept</h3>
          <ul>
            <li v-for="(t, i) in work.platingNotes">
              {{ t }}
            </li>
          </ul>
        </section>

        <section v-if="work.recipe" class="grid">
          <div>
            <h3>Ingradients</h3>
              <ul>
                <li v-for="(ing, i) in work.recipe!.ingredients" :key="i">
                  {{ ing }}
                </li>
              </ul>
          </div>

          <div>
            <h3>Steps</h3>
            <ol>
              <li v-for="(step, i) in work.recipe!.steps" :key="i" >
                {{ step }}
              </li>
            </ol>
          </div>
        </section>

        <section v-if="work.tools?.length" class="section">
          <h3>Tools</h3>
          <ul class="chips">
            <li v-for="(t, i) in work.tools" :key="i">{{ t }}</li>
          </ul>
        </section>
      </div>

      <footer class="footer">
        <button @click="nav(-1)">← Prev</button>
        <button @click="nav(1)">Next →</button>
      </footer>
    </article>
  </div>
</template>

<script setup lang="ts">
import { onKeyDown } from '@vueuse/core';
import { onMounted, onBeforeUnmount, computed } from 'vue';
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Work = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  images?: string[];
  cover?: string;
  recipe?: {ingredients: string[], steps: string[]};
  platingNotes?: string[];
  tools?: string[]
}

const props = defineProps<{ work: Work, siblings: Work[]}>()
const emit = defineEmits<{ close:[] }>()

const imgs = computed(
  () => props.work.images?.length
  ? props.work.images
  : [props.work.cover].filter(Boolean) as string[]
)

function onKey(e: KeyboardEvent) {
  if(e.key === 'Escape') emit('close')
  if(e.key === 'ArrowLeft') nav(-1)
  if(e.key === 'ArrowRight') nav(1)
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown',onKey))

function nav(delta: number) {
  const list = props.siblings
  const idx = list.findIndex( w => w.id === props.work.id)
  if(idx < 0) return
  const next = list[(idx + delta + list.length) % list.length]
  const url = new URL(location.href); url.searchParams.set('id', next.id); history.replaceState({},'',url)
}
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0, .6);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 60;
}
.modal {
  max-width: 980px;
  width: 100%;
  height: 90vh;
  overflow: auto;
  background: #fff;
  border-radius: 14px;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom:1px solid #eee ;
}
.title {
  font-weight: 800;
  font-size: clamp(16px, 2vw,20px);
}
.x {
  font-size: 22px;
  line-height: 1;
  padding: 10px;
  border-radius: 14px;
}
.body {
  padding: 16px;
}
.media {
  display: grid;
  gap: 10px;
}
.media img {
  width: 100%;
  display: block;
  border-radius: 10px;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(1fr, 1fr);
  }
}
.section {
  margin-top: 14px;
}
.section h3 {
  font-weight: 700;
  margin-bottom: 6px;
}
.chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.chips li {
  border: 1px solid #ddd;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 13px;
}
.footer {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #eee;
}
</style>