<template>
    <div class="first">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'First',
}
</script>

<style scoped>
.first{
  max-width: 70%;
  padding: 3em 0;
  margin: 0 auto;
}
@media (max-width: 768px){
  .first{
    padding: 2.5em 0;
    margin: 0 auto;
    max-width: 70%;
  }
}
@media (max-width: 576px){
  .first{
    padding: 2.5em 0;
    margin: 0 auto;
    max-width: 85% !important;
  }
}
</style>