<template>
  <template v-for="(src, i) in sources" :key="i">
    <img v-if="!isVideo(src)" :src="src" />
    <video v-else :src="src" controls playsinline />
  </template>
</template>

<script setup lang="ts">
defineProps<{ sources: string[] }>();

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);
</script>
