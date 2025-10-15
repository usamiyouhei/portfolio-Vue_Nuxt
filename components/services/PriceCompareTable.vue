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

          <tr>
            <th class="th"></th>
            <th class="th"></th>
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