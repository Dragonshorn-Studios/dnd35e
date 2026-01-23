<template>
  <IdentifiableItemSheetVue />
</template>
<script lang="ts" setup>
  import { IdentifiableItemSheetVue } from '@items/components/Identifiable/index.mjs';
  import { provide } from 'vue';
  import { useMaterialStore } from './index.mjs';

  const props = defineProps<{
    context: any;
  }>();

  const store = useMaterialStore(props.context);
  provide('itemSheetStore', store);

</script>
