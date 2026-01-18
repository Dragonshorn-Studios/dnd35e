<template>
  <div class="rich-text-editor flexcol">
    <label>{{ label }}</label>
    <div ref="editorRoot"></div>
  </div>
</template>

<script setup lang="ts">
  import { ItemSheetStore } from "@items/baseItem/index.mjs";
  import { onMounted, onBeforeUnmount, ref, inject } from "vue";

  const { field, label } = defineProps<{
    field: string;       // e.g. "system.description"
    label: string;
    // placeholder?: string; // TODO: Need to rethink this as no longer has a default API
  }>();

  const {
    documentGetters: {
      getProperty,
    },
    documentActions: {
      getFieldUpdater,
    },
    isEditable,
  } = inject('itemSheetStore') as ItemSheetStore;
  const updateField = getFieldUpdater(field);

  const raw = getProperty(field).value as string;

  const editorRoot = ref<HTMLElement | null>(null);
  let editor: any = null;

  async function createEditor() {
    if (!editorRoot.value) return;

    const initial = raw ?? "";

    editor = await foundry.applications.ux.TextEditor.create(
      {
        engine: "prosemirror",
        target: editorRoot.value,
        props: {
          editable: () => isEditable.value,
        },
      },
      initial,
    );

    editorRoot.value.replaceWith(editor.element);
    editorRoot.value = editor.element;

    // Listen for changes
    editor.element.addEventListener("focusout", async () => {
      const html = editor.save();
      await updateField(html);
    });
  }

  onMounted(createEditor);

  onBeforeUnmount(() => {
    editor?.destroy();
  });
</script>

<style scoped>
.rich-text-editor {
  width: 100%;
}
</style>
