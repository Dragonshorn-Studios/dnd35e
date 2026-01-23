<template>
    <IdentifiableItemSheet />
</template>

<script lang="ts" setup>
  import { useItemSheetStore } from '@items/baseItem/index.mjs';
  import { provide } from 'vue';
  import { IdentifiableItemSheet } from '@items/components/Identifiable/index.mjs';
  import { usePhysicalItemStore } from './PhysicalItemStore.mjs';

  const props = defineProps<{
    context?: any;
  }>();

  if (!!props.context) {
    const baseStore = useItemSheetStore(props.context);
    const physicalItemStore = usePhysicalItemStore(props.context, baseStore);
    provide('itemSheetStore', {
      ...baseStore,
      ...physicalItemStore
    });
  }
</script>