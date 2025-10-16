<template>
  <div class="price-wrap">
    <div class="scroll-hint md-show">横にスクロールできます →</div>

    <div class="price-scroll">
      <table class="price-table">
        <tbody>
          <tr>
            <th class="th sticky">プラン</th>
            <th class="th"></th>
          </tr>

          <tr v-for="(row , i) in table.rows" :key="i">
            <th class="th sticky" v-html="row.feature"/>
            <td v-for="(val , j) in row.values" class="td" v-html="val"/>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PriceTable } from "~/data/services";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
defineProps<{ table: PriceTable }>()

const root = ref<HTMLElement | null>(null)
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.price-wrap {
  padding: 4px 0 16px;
}
</style>