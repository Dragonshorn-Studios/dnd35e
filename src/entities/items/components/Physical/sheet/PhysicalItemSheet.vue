<template>
  <BaseItemSheetVue :context="context">
    <template #header>
      <slot name="header">
        <IdentifiableHeader />
      </slot>
    </template>
    <slot>
      <IdentifiableDescription />
      <IdentifiableNameConfig />
    </slot>
  </BaseItemSheetVue>
</template>

<script lang="ts" setup>
  import { BaseItemSheetVue } from '@items/baseItem/index.mjs';
  import { provide } from 'vue';
  import {
    IdentifiableHeader,
    IdentifiableDescription,
    IdentifiableNameConfig,
  } from '@items/components/IdentifiableItem/index.mjs';
  import { usePhysicalItemStore } from './PhysicalItemStore.mjs';

  const props = defineProps<{
    context?: any;
  }>();

  if (!!props.context) {
    const physicalItemStore = usePhysicalItemStore(props.context);
    provide('itemSheetStore', physicalItemStore);
  }
</script>