<template>
  <BaseItemSheetVue>
    <template #header>
    </template>
    <slot>
      <!-- Tabs go here -->
      <IdentifiableDescription />
      <IdentifiableNameConfig />
      <MaterialDetails />
    </slot>
  </BaseItemSheetVue>
</template>
<script lang="ts" setup>
  import { IdentifiableDescription, IdentifiableNameConfig } from '@items/components/IdentifiableItem/index.mjs';
  import MaterialDetails from './MaterialDetails.vue';
  import { provide } from 'vue';
  import { useMaterialStore } from './materialStore.mts';
import { BaseItemSheetVue } from '@items/baseItem/index.mjs';

  const props = defineProps<{
    context: any;
  }>();

  const store = useMaterialStore(props.context);
  provide('itemSheetStore', store);

</script>
