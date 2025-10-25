<template>
  <div class="price-wrap">
    <div class="scroll-hint md-show">横にスクロールできます →</div>

    <div class="price-scroll" ref="root">
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

      <span class="shadow shadow--left" />
      <span class="shadow shadow--right" />
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
  overflow: visible !important;
}
.scroll-hint {
  font-size: 12px;
  color: #666;
  padding: 0 16px 6px;
    @media (min-width: 769px) {
    display: none;
  }
}

.price-scroll {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
   white-space: nowrap;
}

.price-table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 1200px;
  width: auto;
  background: #fff;
}

.th, .td {
  border: 1px solid #e6e6e6;
  padding: 14px 16px;
  vertical-align: top;
  text-align-last: left;
}

.th {
  background: #fafafa;
  font-weight: 700;
  white-space: nowrap;
}

.td :where(h4,p){
  margin:0;
}

.sticky {
  position: sticky;
  left: 0;
  z-index: 2;
  background: #fafafa;
}

.shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 24px;
  pointer-events: none;
}
.shadow--left{
  left:16px; background:linear-gradient(90deg,#fff 0%,rgba(255,255,255,0) 100%); 
}
.shadow--right{
  right:16px; background:linear-gradient(270deg,#fff 0%,rgba(255,255,255,0) 100%);
}
@media (max-width: 768px) {
  .price-table {
    min-width: 900px;
  }
}

@media (max-width: 480px) {
  .price-table {
    min-width: 700px;
  }
}
</style>