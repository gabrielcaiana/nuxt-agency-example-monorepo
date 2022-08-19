<script setup>
  const log = (value) => console.log(value)
</script>

<template>
  <div>
   <AgencyButton @click:mybutton="log('hello word')">webapp</AgencyButton>
  </div>
</template>
