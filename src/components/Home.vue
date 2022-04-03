<template>
  <h1>Home</h1>
  <p>
    <img src="../assets/logo.png" alt="logo" />
  </p>
  <!-- How are we able to access store? -->
  <button @click="state.count++">count is: {{ state.count }}</button>
  <Button>CommonButton</Button>
  <div>
    encrypted message:
  </div>

  <ImportType />
</template>

<script setup>
import { reactive, defineAsyncComponent } from 'vue'
import Button from '../components/button'
function load(file) {
  return defineAsyncComponent(() => import(`../components/${file}.vue`))
}

// Asynchronously load component
const ImportType = load('ImportType')

const state = reactive({
  count: 0
})
</script>

<style scoped>
h1,
a {
  color: green;
}
</style>