<template>
  <ArtHeader>
    <slot name="header">
      <ItemHeader />
    </slot>
  </ArtHeader>
  <TabDivider />
    <slot>
      <Description />
      <NameConfig />
      <!-- Tabs go here -->
    </slot>
</template>

<script lang="ts" setup>
  import { ArtHeader, ItemHeader } from './components/index.mjs';
  import { Description, NameConfig } from './tabs/index.mjs';
  import TabDivider from '@vc/TabDivider/TabDivider.vue';
  import { provide } from 'vue';
  import { useItemSheetStore } from './index.mjs';
  import type { DocumentSheetRenderContext } from '@client/applications/api/document-sheet.mjs';

  const props = defineProps<{
    context?: DocumentSheetRenderContext
  }>();

  if (!!props.context) {
    const store = useItemSheetStore(props.context);
    provide('itemSheetStore', store);
  }
</script>

<style lang="scss">
  .tab {
    padding: 0.5rem 0.5rem 0 0;
    overflow: auto;
  }
</style>