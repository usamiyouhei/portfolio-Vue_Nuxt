<template>
  <component 
    :is="rootTag"
    :href="href"
    :to="to"
    :target="target"
    rel="noopener"
    :class="[
      props.variant === 'overlay' ? 'work-card' : 'card-gallery',
      { 'work-card--compact': compact, 'is-empty': isEmpty },
      aspectClass
    ]"
    :aria-label="ariaLabel"
    :aria-disabled="isEmpty ? 'true' : undefined"
    tabindex="0"
  >
    <!-- overlay バリアント -->
    <template v-if="props.variant === 'overlay'">
      <div class="work-card__thumb">
        <img :src="work?.img || fallback" :alt="work?.title" />
        <div class="work-card__shade"></div>

        <div class="work-card__meta">
          <span class="work-card__badge">{{ categoryLabel }}</span>
          <time v-if="work?.date" :datetime="isoDate" class="work-card__date">{{ shortDate }}</time>

          <h3 class="work-card__title">{{ work?.title }}</h3>
          <p v-if="work?.subTitle" class="work-card__subTitle">{{ work?.subTitle }}</p>
        </div>
      </div>

      <div v-if="!compact" class="work-card__body">
        <p v-if="work?.description" class="work-card__desc">{{ work?.description }}</p>
        <ul v-if="work?.tags?.length" class="work-card__tags">
          <li v-for="t in work?.tags" :key="t" class="work-card__tag">{{ t }}</li>
        </ul>
      </div>
    </template>

    <!-- gallery バリアント -->
    <template v-else>
      <div class="card-gallery__media">
        <img :src="imgSrc" :alt="title" loading="lazy" decoding="async" />
      </div>
      <div class="card-gallery__body">
        <h3 class="card-gallery__title">{{ title }}</h3>
        <p v-if="subTitle" class="card-gallery__sub">{{ subTitle }}</p>
        <div class="card-gallery__meta">
          <span class="card-gallery__badge">{{ categoryLabel }}</span>
          <time v-if="!isEmpty && work?.date" :datetime="isoDate" class="card-gallery__date">{{ shortDate }}</time>
        </div>
      </div>
    </template>
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
type Variant = 'overlay' | 'gallery'
type Size = 'md' | 'lg'

 const props = withDefaults(defineProps<{
  work?: Work,
  empty?: boolean,
  category?: Cat,
  placeholderData?: {
  title?: string,
  subTitle?: string,
  img?: string,
  description?: string,
  }
  compact?: boolean,
  aspect?: '4x3' | '3x2' | '1x1' | '16x9'
  fallbackSrc?: string,
  catLabels?: Partial<Record<Work['category'], string>>
  variant?: Variant
  showNav?: boolean
  size?: Size
}>(), {
  empty: false,
  compact: false,
  catLabels: () => ({}),
  fallbackSrc: '/img/noImg.png',
  variant: 'gallery',
  placeholderData: () => ({}),
  showNav: true,
  size:'md',
})

const emits = defineEmits<{
  (e: 'prev'): void;
  (e: 'next'): void;
}>()



//------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
const isEmpty = computed(() => props.empty || !props.work)
const fallback = computed(() => props.fallbackSrc ?? '/img/noImg.png')
const imgSrc = computed(() => {
  // isEmpty.value ? (props.placeholderData?.img || fallback.value) : (props.work?.img || fallback.value)
  const w = props.work as any
  return w?.img || w?.cover || (w?.images?.[0]) || fallback.value
})

const title = computed(() => 
  isEmpty.value ? (props.placeholderData?.title || 'Coming soon...') : (props.work?.title || '')
)

const subTitle = computed(() => 
  isEmpty.value ? (props.placeholderData?.subTitle || '現在準備中') : (props.work?.subTitle || '')
)
const isExternal = computed(() => !!props.work?.externalUrl);
const permalink = computed(() =>   props.work ? `/works/${props.work.slug ?? props.work.id}` : '#')

const rootTag = computed(() => {
  if (isEmpty.value) return 'div'
  return isExternal.value ? 'a' : NuxtLink
})

const href   = computed(() => (!isEmpty.value && isExternal.value) ? props.work!.externalUrl : undefined)
const to     = computed(() => (!isEmpty.value && !isExternal.value) ? `/works/${props.work!.slug ?? props.work!.id}` : undefined)
const target = computed(() => (!isEmpty.value && isExternal.value) ? '_blank' : undefined)
const categoryLabel = computed(() => {
  const base = { 
    patissier: 'Patissier', 
    programming: 'Programming', 
    design: 'Design', 
    hobby: 'Hobby'
  } as const

  const map = {...base, ...props.catLabels}
  const cat: Cat | undefined = isEmpty.value ? props.category : props.work?.category
  return cat ? map[cat] :''
})

const ariaLabel = computed(() => isExternal.value ? `${props.work?.title}（外部リンク）` : props.work?.title)

// 日付表示
const isoDate = computed(() => {
  if (!props.work?.date) return undefined;
  const d = typeof props.work?.date === 'string' ? new Date(props.work?.date) : props.work?.date;
  return d.toISOString();
});
const shortDate = computed(() => {
  if (!props.work?.date) return '';
  const d = typeof props.work?.date === 'string' ? new Date(props.work?.date) : props.work?.date;
  return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}`;
});

const aspectClass = computed(() => ({ 
  'is-4x3': props.aspect !== '1x1' && props.aspect !== '3x2', 
  'is-3x2': props.aspect === '3x2', 
  'is-1x1': props.aspect === '1x1' }))

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------

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

   &__thumb{ position:relative; &::before{content:""; display:block; aspect-ratio:4/3;}
    > img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .6s ease;}
   }
   &:hover &__thumb>img{ transform:scale(1.04); }
  &.is-3x2 &__thumb::before{ aspect-ratio:3/2;}
  &.is-1x1 &__thumb::before{ aspect-ratio:1/1;}

  &__shade{ position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0) 55%); pointer-events:none; }

  &__meta{ position:absolute; left:12px; right:12px; bottom:12px; display:flex; gap:8px; align-items:center; }
  &__badge{ font-size:11px; letter-spacing:.08em; text-transform:uppercase; padding:4px 8px; border:1px solid rgba(255,255,255,.25); border-radius:999px; color:#fff; background:rgba(0,0,0,.25); backdrop-filter:blur(4px); }
  &__date{ font-size:12px; color:rgba(255,255,255,.85); }

  &__title{ position:absolute; left:12px; right:12px; bottom:42px; margin:0; font-size:16px; font-weight:700; line-height:1.25; color:#fff;
    display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; text-shadow:0 1px 2px rgba(0,0,0,.35); }
  &__subtitle{ position:absolute; left:12px; right:12px; bottom:66px; font-size:13px; color:rgba(255,255,255,.9);
    display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden; }

  &__body{ padding:12px 14px 14px; }
  &__desc{ margin:0; font-size:14px; line-height:1.55; color:var(--c-sub);
    display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
  &__tags{ margin:10px 0 0; padding:0; list-style:none; display:flex; flex-wrap:wrap; gap:6px; }
  &__tag{ font-size:11px; color:var(--c-muted); border:1px solid #2a2d3f; border-radius:999px; padding:2px 8px; }

  &--compact &__body{ display:none; }
}
.work-card__meta,
.work-card__title,
.work-card__subtitle,
.work-card__shade {
  pointer-events: none;   /* クリック/右クリックは親リンクへ通す */
}

.card-gallery{
  display:block; background:#fff; color:#222;
  border-radius:16px; border:1px solid rgba(0,0,0,.06);
  box-shadow: 0 2px 10px rgba(0,0,0,.06);
  overflow:hidden; text-decoration:none;
  transition: transform .25s ease, box-shadow .25s ease;
  padding: 20px;
  &:hover{ transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.12); }

  &__media{
    position:relative; 
    background:#eee;
    border-radius:12px; 
    overflow:hidden;
    &::before{ content:""; display:block; aspect-ratio: 3 / 2; } /* 画像比率を固定 */
    > img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
  }
  &__body{ padding:10px 12px 12px; }
  &__title{ margin:0 0 6px; font-weight:700; font-size:16px; line-height:1.35; color:#1f2937; }
  &__sub{ margin:0 0 10px; font-size:13px; color:#6b7280; }
  &__meta{ display:flex; gap:8px; align-items:center; }
  &__badge{ font-size:11px; letter-spacing:.06em; text-transform:uppercase; padding:4px 8px; border:1px solid #e5e7eb; border-radius:999px; color:#374151; background:#f9fafb; }
  &__date{ font-size:12px; color:#6b7280; }
}

.card-gallery.is-empty{
  border:1px dashed #e5e7eb;
  background:#fafafa;
  box-shadow:none;
  pointer-events:none; /* クリック無効 */
}
.card-gallery.is-16x9 .card-gallery__media::before{ content:""; display:block; aspect-ratio:16/9; }
.card-gallery.is-3x2  .card-gallery__media::before{ content:""; display:block; aspect-ratio:3/2; }
.card-gallery.is-4x3  .card-gallery__media::before{ content:""; display:block; aspect-ratio:4/3; }
.card-gallery.is-1x1  .card-gallery__media::before{ content:""; display:block; aspect-ratio:1/1; }

// .works-item {
//   width: 31%;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
//   border-radius: 6px;
//   background-color: #fff;
//   cursor: pointer;
//   text-align: center;
//   transition: transform 0.8s;
// }
// .works-item a {
//   display: block;
//   overflow: hidden;
//   position: relative;
//   padding: 20px;
// }

// .works-item img {
//   filter: saturate(20%);
//   filter: sepia(80%);
//   transition: filter 0.5s, transform 0.5s;
//   vertical-align: top;
//   height: 30vh;
// }
// .works-item div {
//   overflow: hidden;
// }
// .works-item:hover img {
//   position: relative;

//   transform: scale(1.1);
//   filter: saturate(100%);
// }
// /* 0.5秒間かけてフェードイン */
// .fadeInAnime500ms {
//   animation-name: fadeIn500ms;
// }
// .fadeIn500ms {
//   animation-delay: 500ms;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn500ms {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
// .fadeInAnime1s {
//   animation-name: fadeIn1s;
// }
// .fadeIn1s {
//   animation-delay: 1s;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn1s {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
// .fadeInAnime1500ms {
//   animation-name: fadeIn1500ms;
// }
// .fadeIn1500ms {
//   animation-delay: 1500ms;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn1500ms {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

// /* 2秒間かけてフェードイン */
// .fadeInAnime2s {
//   animation-name: fadeIn2s;
// }
// .fadeIn2s {
//   animation-delay: 2s;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn2s {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
// /* 2秒間かけてフェードイン */
// .fadeInAnime2500ms {
//   animation-name: fadeIn2500ms;
// }
// .fadeIn2500ms {
//   animation-delay: 2500ms;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn2500ms {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
// /* 2秒間かけてフェードイン */
// .fadeInAnime3s {
//   animation-name: fadeIn3s;
// }
// .fadeIn3s {
//   animation-delay: 3s;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn3s {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
// /* 3.5秒間かけてフェードイン */
// .fadeInAnime3500ms {
//   animation-name: fadeIn3500ms;
// }
// .fadeIn3500ms {
//   animation-delay: 3500ms;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn3500ms {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
// /* 4秒間かけてフェードイン */
// .fadeInAnime4s {
//   animation-name: fadeIn4s;
// }
// .fadeIn4s {
//   animation-delay: 4s;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn4s {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
// /* 4.5秒間かけてフェードイン */
// .fadeInAnime4500ms {
//   animation-name: fadeIn4500ms;
// }
// .fadeIn4500ms {
//   animation-delay: 4500ms;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   transform: translateY(50px);
//   opacity: 0;
// }
// @keyframes fadeIn4500ms {
//   0% {
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

</style>