<template>
  <nav
    :class="navClass"
    :aria-roledescription="navDescription"
  >
    <a v-for="tab in tabs"
      :key="tab.id"
      :data-tab="tab.id"
      :class="tab.cssClass"
      :data-tooltip="tab.tooltip"
      :aria-selected="tab.id === activeTabId ? 'true' : 'false'"
      @click.prevent="onTabClick"
    >
      <i v-if="tab.icon" :class="tab.icon" inert></i>
      <span v-if="tab.label">{{ $t(tab.label) }}</span>
    </a>
  </nav>
</template>

<script lang="ts" setup>
import { computed, defineProps} from 'vue';

const {
  tabs: {
    tabGetters: { tabs, activeTabId },
    tabActions: { activateTab },
  },
} = inject<ItemSheetStore>('itemSheetStore');

const { verticalTabs } = defineProps<{
  verticalTabs?: boolean;
}>();

const navDescription = game.i18n.localize("SHEETS.FormNavLabel");
const navClass = computed(() => {
  return {
    'sheet-tabs': true,
    'tabs': true,
    'vertical': verticalTabs,
  };
});

function onTabClick(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  const tabId = target.dataset.tab;
  if (tabId) {
    activateTab(tabId);
  }
}
</script>