<template>
  <PhysicalItemSheet :context="context">
    <template #header>
    </template>
    <slot>
      <!-- Tabs go here -->
      <IdentifiableDescription />
      <IdentifiableNameConfig />
      <MaterialDetails />
    </slot>
  </PhysicalItemSheet>
</template>

<script lang="ts" setup>
  import PhysicalItemSheet from '../../physical/sheet/PhysicalItemSheet.vue';
  import IdentifiableDescription from '../../components/IdentifiableItem/IdentifiableDescription.vue';
  import IdentifiableNameConfig from '../../components/IdentifiableItem/IdentifiableNameConfig.vue';
  import MaterialDetails from './MaterialDetails.vue';
  import { provide } from 'vue';
  import { useMaterialStore } from './materialStore.mjs';

  const props = defineProps<{
    context: any;
  }>();

  const store = useMaterialStore(props.context);
  provide('itemSheetStore', store);
</script>

