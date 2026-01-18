<template>
<div>
  <!-- TODO: is this class needed?-->
  <span class="item-status">{{equippedStatusLabel}}</span>
</div>
</template>

<script lang="ts" setup>

// where is this being used??


const props = defineProps<{
  equippedStatusLabel: string;
}>();
const equippedStatusLabel = game.i18n.localize(props.equippedStatusLabel);
</script>