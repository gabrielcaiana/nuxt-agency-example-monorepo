<script lang="ts" setup>
  defineProps<{
    disabled?: boolean;
  }>()

  defineEmits<{
    (e: 'click:mybutton', value: string): void;
  }>()
</script>

<template>
  <button :disabled="disabled" @click="$emit('click:mybutton', 'hello from button')">
    <slot />
  </button>
</template>

<style scoped>
  .button {
    padding: 1rem;
    border: none;
    background-color: aquamarine;
    color: black;
    font-family: sans-serif;
  }
</style>