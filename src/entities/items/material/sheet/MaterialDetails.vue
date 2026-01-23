<template>
  <section
    class="flexcol material-details"
    v-show="isActiveTab"
    data-group="primary"
    data-tab="material-details"
  >
    <div class="form-container">

      <!-- Hardness -->
      <FormGroup
        label="D35E.Hardness"
        type="text"
        :value="bonusHardness"
        :editable="isEditable"
        :onUpdate="getFieldUpdater('system.bonusHardness')"
      />

      <!-- HP per Inch -->
      <FormGroup
        label="D35E.HpPerInch"
        type="text"
        :value="bonusHpPerInch"
        :editable="isEditable"
        :onUpdate="getFieldUpdater('system.bonusHpPerInch')"
      />

      <!-- Magic Equivalent -->
      <h3 class="form-header">{{ t("D35E.MagicEquivalent") }}</h3>

      <FormGroup
        label="D35E.MagicEquivalent"
        type="text"
        :value="magicEquivalent"
        :editable="isEditable"
        :onUpdate="getFieldUpdater('system.magicEquivalent')"
      />

      <span class="notes">
        <em>{{ t("D35E.MagicEquivalentDescription") }}</em>
      </span>

      <!-- Material Equivalents -->
      <FormGroup
        label="D35E.MaterialAlchemicalSilverEquivalent"
        type="checkbox"
        :value="isAlchemicalSilverEquivalent"
        :editable="isEditable"
        :onUpdate="getFieldUpdater('system.isAlchemicalSilverEquivalent')"
      />

      <FormGroup
        label="D35E.MaterialAdamantineEquivalent"
        type="checkbox"
        :value="isAdamantineEquivalent"
        :editable="isEditable"
        :onUpdate="getFieldUpdater('system.isAdamantineEquivalent')"
      />

      <FormGroup
        label="D35E.MaterialColdIronEquivalent"
        type="checkbox"
        :value="isColdIronEquivalent"
        :editable="isEditable"
        :onUpdate="getFieldUpdater('system.isColdIronEquivalent')"
      />

      <!-- GM‑Only Section -->
      <template v-if="userIsGM">
        <h3 class="form-header">{{ t("D35E.SystemProperties") }}</h3>

        <ToggleSwitch
          name="system.isIdentifiable"
          label="D35E.IsIdentifiable"
          true-label="D35E.Yes"
          false-label="D35E.No"
          :checked="isIdentifiable"
          :editable="isEditable"
          @update="getFieldUpdater('system.isIdentifiable')"
        />

        <UniqueId />
      </template>

    </div>
  </section>
</template>

<script setup lang="ts">
  import { FormGroup, ToggleSwitch, UniqueId } from "@vc/Fields/index.mjs";
  import type { MaterialStore } from "./index.mjs";
  import { inject } from "vue";

  const {
    tabs: {
      tabGetters: { getIsTabOpen },
    },
    identifableGetters: {
      isIdentifiable,
    },
    materialGetters: {
      bonusHardness,
      bonusHpPerInch,
      magicEquivalent,
      isAlchemicalSilverEquivalent,
      isAdamantineEquivalent,
      isColdIronEquivalent,
    },
    documentActions: {
      getFieldUpdater,
    },
    isEditable,
  } = inject('itemSheetStore') as MaterialStore;

  const isActiveTab = getIsTabOpen('description');
  const userIsGM = game.user.isGM;

  function t(key: string) {
    return game.i18n.localize(key);
  }
</script>

<style scoped>
.form-container {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem 3rem;
  align-items: center;
}

.form-header {
  grid-column: span 2;
  margin: 1rem 0 0.25rem;
  text-decoration: underline;
}

.notes {
  margin: -0.75rem 0 0.125rem;
  grid-column: span 2;
}

.form-group {
  display: contents;
}
</style>
