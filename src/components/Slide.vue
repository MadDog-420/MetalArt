<template>
    <div class="banner-cont">
      <slot></slot>
      <div class="banner overflow-hidden text-center">
        <div class="col-md-5 m-auto">
          <h1 class="display-4 fw-normal text-white">{{title}}</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    title: String,
  }
}
</script>

<style scoped>
*{
    color: white;
}
.banner-cont{
  position: relative;
  height: 400px;
  overflow: hidden;
}
.banner{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  background-color: rgba(0,0,0,0.5);
}
</style>