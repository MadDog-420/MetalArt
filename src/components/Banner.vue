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
  name: 'Banner',
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
  height: 420px;
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
.banner h1{
  margin-top: 40px;
  text-shadow: 1px 2px 3px black;
}

@media (max-width: 575px){
  .banner-cont {
    display: none;
  }
}
</style>