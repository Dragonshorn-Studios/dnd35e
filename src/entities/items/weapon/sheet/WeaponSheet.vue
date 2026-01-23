<template>
  <PhysicalItemSheet>
  </PhysicalItemSheet>
</template>

<script lang="ts" setup>
  import { PhysicalItemSheet } from '@items/components/Physical/index.mjs';
  import { provide } from 'vue';
  import { useWeaponStore } from './index.mjs';

  const props = defineProps<{
    context: any;
  }>();

  const store = useWeaponStore(props.context);
  provide('itemSheetStore', store);
</script>

