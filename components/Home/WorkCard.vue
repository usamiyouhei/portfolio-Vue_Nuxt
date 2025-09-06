<template>
  <component
    :is="isExternal ? 'a' : NuxtLink"
    :href="isExternal ? work.extarnalUrl : undefined"
    :to="!isExternal ? permalink : undefined"
    :target="isExternal ? '_blank' : undefined"
    rel="noopener"
    class="work-card"
    :class="[{'work-card--compact' : compact}, aspectClass]"
    :aria-label="ariaLabel"
  >
      <!-- thumbnail -->
        <div class="work-card__thumbnail">
          <img src="" alt="">
          <div class="work-card__shade"></div>

          <div class="work-card__meta">
            <span class="work-card__badge">categoryLabel</span>
            <time datetime="" class="work-card__date">shortDate</time>

            <h3 class="work-card__title">title</h3>
            <p class="work-card__subTitle">subTitle</p>
          </div>
        </div>

        <div class="work-card__body">
          <p class="work-card__desc">description</p>
          <ul class="work-card__tags">
            <li class="work-card__tag">tag</li>
          </ul>

        </div>
  </component>

</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import type { Work } from "@/types/works";
import { computed } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Cat = Work['category']

 const props = withDefaults(defineProps<{
  work: Work,
  compact?: boolean,
  aspect?: '4x3' | '3x2' | '1x1'
  fallbackSrc?: string,
  catLabels?: Partial<Record<Work['category'], string>>
}>(), {
  compact: false,
  catLabels: () => ({}),
  fallbackSrc: '/img/placeholder-work.jpg'
})



 //------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
const fallback = computed(() => props.fallbackSrc ?? '/img/placeholder-work.jpg')
const isExternal = computed(() => !!props.work.extarnalUrl);
const permalink = computed(() => `works/${props.work.slug ?? props.work.id}`)

const categoryLabel = computed(() => {
  const base = { 
    patissier: 'Patissier', 
    programming: 'Programming', 
    design: 'Design', 
    hobby: 'Hobby'
  } as const

  const map = {...base, ...props.catLabels}
  return map[props.work.category]
})

const ariaLabel = computed(() => isExternal.value ? `${props.work.title}（外部リンク）` : props.work.title)



const aspectClass = computed(() => ({ 'is-4x3': props.aspect !== '1x1' && props.aspect !== '3x2', 'is-3x2': props.aspect === '3x2', 'is-1x1': props.aspect === '1x1' }))

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// ライフサイクル
//------------------------------------------------------------------------------------------------------------
/*
onBeforeMount(() => {
  //記憶した位置、サイズでの復帰を可能にする
})

onMounted(() => {
  //window.addEventListener('resize', onGetPosition)
})

onBeforeUnmount(() => {
  //window.removeEventListener('resize', onGetPosition)
})
*/
//------------------------------------------------------------------------------------------------------------
//watch
//------------------------------------------------------------------------------------------------------------
/*
watch(
  () => props.value,
  (value) => {
    input.value = value
  }
)
//------------------------------------------------------------------------------------------------------------
//computed
//------------------------------------------------------------------------------------------------------------
/*
const counter: Ref<number> = useState('counter', () => 500)

// computedによりcounter変数の監視が行われる
const doubleCount = computed(() => {
  return counter.value * 2
})
*/
//------------------------------------------------------------------------------------------------------------
// エミット
//------------------------------------------------------------------------------------------------------------
/*
const emits = defineEmits<{ (e: 'update:value', item: any): void }>()
const input = ref(props.value)

function onChange(value: any) {
  input.value = value
  emits('update:value', value)
}
*/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
:root {
  --c-card: #2f2a24;     /* 深いブラウン */
  --c-text: #f5f0e6;     /* アイボリー系の文字色 */
  --c-sub: #d6cbb7;      /* ベージュ寄りのサブテキスト */
  --c-muted: #b39c82;    /* くすんだブラウン/グレー */
  --c-accent: #c8a15a;   /* ゴールド寄りのアクセント */
  --c-border: #3e342c;   /* 濃いブラウン（境界線） */
}

.work-card{
  display:block; background:var(--c-card); color:var(--c-text);
  border:1px solid var(--c-border); border-radius:16px; overflow:hidden;
  text-decoration:none; transform:translateZ(0);
  transition:transform .35s ease, box-shadow .35s ease, border-color .35s ease;
  &:hover{ transform:translateY(-4px); box-shadow:0 8px 28px rgba(0,0,0,.35); border-color:#2b2e44; }
}

.works-item {
  width: 31%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  transition: transform 0.8s;
}
.works-item a {
  display: block;
  overflow: hidden;
  position: relative;
  padding: 20px;
}

.works-item img {
  filter: saturate(20%);
  filter: sepia(80%);
  transition: filter 0.5s, transform 0.5s;
  vertical-align: top;
  height: 30vh;
}
.works-item div {
  overflow: hidden;
}
.works-item:hover img {
  position: relative;

  transform: scale(1.1);
  filter: saturate(100%);
}
/* 0.5秒間かけてフェードイン */
.fadeInAnime500ms {
  animation-name: fadeIn500ms;
}
.fadeIn500ms {
  animation-delay: 500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.fadeInAnime1s {
  animation-name: fadeIn1s;
}
.fadeIn1s {
  animation-delay: 1s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn1s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.fadeInAnime1500ms {
  animation-name: fadeIn1500ms;
}
.fadeIn1500ms {
  animation-delay: 1500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn1500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 2秒間かけてフェードイン */
.fadeInAnime2s {
  animation-name: fadeIn2s;
}
.fadeIn2s {
  animation-delay: 2s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn2s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 2秒間かけてフェードイン */
.fadeInAnime2500ms {
  animation-name: fadeIn2500ms;
}
.fadeIn2500ms {
  animation-delay: 2500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn2500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 2秒間かけてフェードイン */
.fadeInAnime3s {
  animation-name: fadeIn3s;
}
.fadeIn3s {
  animation-delay: 3s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn3s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 3.5秒間かけてフェードイン */
.fadeInAnime3500ms {
  animation-name: fadeIn3500ms;
}
.fadeIn3500ms {
  animation-delay: 3500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn3500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 4秒間かけてフェードイン */
.fadeInAnime4s {
  animation-name: fadeIn4s;
}
.fadeIn4s {
  animation-delay: 4s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn4s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 4.5秒間かけてフェードイン */
.fadeInAnime4500ms {
  animation-name: fadeIn4500ms;
}
.fadeIn4500ms {
  animation-delay: 4500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn4500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>