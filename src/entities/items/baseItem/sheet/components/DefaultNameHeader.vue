<template>
  <div class="header-details flexrow">
    <div class="flexcol">
      <ItemName :labelKey="'DND35E.Name'" :value="displayName" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ItemName from './ItemName.vue';
import { inject } from 'vue';

const {
  documentGetters: { displayName }
} = inject<ItemSheetStore>('itemSheetStore');
</script>