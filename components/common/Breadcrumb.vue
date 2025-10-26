<template>
  <nav class="breadcrumb" aria-label="Breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-for="(crumb, i) in crumbs" :key="i">
        <span v-if="i === crumbs.length - 1">{{  crumb.label }}</span>
        <NuxtLink v-else :to="crumb.to">{{  crumb.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

const props = defineProps<{
  crumbs:{ label: string; to?: string}[]
}>()
/**===================================================================================================================
 * 
 ===================================================================================================================**/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.breadcrumb{
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 24px;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 6px;
      :hover{
        color: red;
        border-bottom: 1px solid red;
      }
      &:not(:last-child)::after {
        content: '/';
        color: #aaa;
      }
    }
  }
  a {
    color: #555;
    text-decoration: none;
    transition: ease 0.3s;
    :hover {
      color: #000;
    }
  }
  span {
    color: #aaa;
  }
}
</style>