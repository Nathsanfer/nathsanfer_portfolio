<script setup>
import { computed } from 'vue'

// Recebe o markup SVG bruto (importado com ?raw) e o embute inline.
// Os fills originais são removidos e o ícone herda a cor do texto,
// o que funciona nos temas claro e escuro.
const props = defineProps({
  svg: { type: String, required: true },
  label: { type: String, default: '' },
})

const markup = computed(() =>
  props.svg
    .replace(/\sfill="[^"]*"/g, '')
    .replace(/<svg/, '<svg fill="currentColor" focusable="false"'),
)
</script>

<template>
  <span
    class="svg-icon"
    :role="label ? 'img' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : 'true'"
    v-html="markup"
  ></span>
</template>

<style scoped>
.svg-icon {
  display: inline-flex;
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  color: inherit;
}

.svg-icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
