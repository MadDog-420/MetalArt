<template>
    <div v-if=picture_src class="picture">
        <img :src="require(`@/assets/img/${picture_src}`)" class="blur-image">
        <img :src="require(`@/assets/img/${picture_src}`)" class="main-pic">
    </div>
    <!-- shows when no picture src param exists -->
    <div v-else>
        <div class="no-image"></div>
    </div>
</template>

<script>
export default {
    name: 'Picture',
    props: {
        picture_low_q: String,
        picture_src: String
    }
}
</script>

<style scoped>
.picture{
    position: relative;
    display: flex;
    overflow: hidden;
}
img, .no-image, .blur-image{
    width: 100%;
    height: 255px;
}
.main-pic{
    object-fit: contain;
    margin: auto;
    z-index: 99;
}
.blur-image{
    width: 100%;
    position: absolute;
    margin: 0;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}
.no-image{
    background-color: rgba(81,81,81,1);
}
</style>