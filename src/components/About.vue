 30 lines (27 sloc) 473 Bytes
<template>
  <h1>{{ msg }}</h1>
  <Button>CommonButton</Button>
</template>

<script>
import Button from './Button'
export default {
  async setup() {
    return {
      msg: 'About',
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>