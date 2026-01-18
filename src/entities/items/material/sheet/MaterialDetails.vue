<template>
  <section
    class="tab flexcol material-details"
    v-show="isActiveTab"
    data-group="primary"
    data-tab="material-details"
  >
    <div class="form-container">

      <!-- Hardness -->
      <FormGroup
        label="D35E.Hardness"
        type="text"
        :value="system.bonusHardness"
        :editable="context.isEditable"
        :onUpdate="v => update('system.bonusHardness', v)"
      />

      <!-- HP per Inch -->
      <FormGroup
        label="D35E.HpPerInch"
        type="text"
        :value="system.bonusHpPerInch"
        :editable="context.isEditable"
        :onUpdate="v => update('system.bonusHpPerInch', v)"
      />

      <!-- Magic Equivalent -->
      <h3 class="form-header">{{ t("D35E.MagicEquivalent") }}</h3>

      <FormGroup
        label="D35E.MagicEquivalent"
        type="text"
        :value="system.magicEquivalent"
        :editable="context.isEditable"
        :onUpdate="v => update('system.magicEquivalent', v)"
      />

      <span class="notes">
        <em>{{ t("D35E.MagicEquivalentDescription") }}</em>
      </span>

      <!-- Material Equivalents -->
      <FormGroup
        label="D35E.MaterialAlchemicalSilverEquivalent"
        type="checkbox"
        :value="system.isAlchemicalSilverEquivalent"
        :editable="context.isEditable"
        :onUpdate="v => update('system.isAlchemicalSilverEquivalent', v)"
      />

      <FormGroup
        label="D35E.MaterialAdamantineEquivalent"
        type="checkbox"
        :value="system.isAdamantineEquivalent"
        :editable="context.isEditable"
        :onUpdate="v => update('system.isAdamantineEquivalent', v)"
      />

      <FormGroup
        label="D35E.MaterialColdIronEquivalent"
        type="checkbox"
        :value="system.isColdIronEquivalent"
        :editable="context.isEditable"
        :onUpdate="v => update('system.isColdIronEquivalent', v)"
      />

      <!-- GM‑Only Section -->
      <template v-if="userIsGM">
        <h3 class="form-header">{{ t("D35E.SystemProperties") }}</h3>

        <ToggleSwitch
          name="system.isIdentifiable"
          label="D35E.IsIdentifiable"
          true-label="D35E.Yes"
          false-label="D35E.No"
          :checked="system.isIdentifiable"
          :editable="context.isEditable"
          @update="v => update('system.isIdentifiable', v)"
        />

        <UniqueId />
      </template>

    </div>
  </section>
</template>

<script setup lang="ts">
  import { FormGroup, ToggleSwitch, UniqueId } from "@vc/Fields/index.mjs";
  import { MaterialStore } from "./materialStore.mjs";
  import { inject } from "vue";

  const {
    tabs: {
      tabGetters: { getIsTabOpen },
    },
    documentGetters
  } = inject('itemSheetStore') as MaterialStore;

  const isActiveTab = getIsTabOpen('description');
  const system = props.document.system;
  const userIsGM = game.user.isGM;

  function t(key: string) {
    return game.i18n.localize(key);
  }

  async function update(path: string, value: any) {
    await props.document.update({ [path]: value });
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
