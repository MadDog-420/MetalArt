<template>
    <div class="galeria-side-container">
        <div class="galeria-side bg-dark p-3">
            <router-link :to="setLink()">
                <span class="mx-2">GALERÍA</span>
                <span class="cuadrado mx-2">
                    <span class="p-1">
                        <span class="cuadrado-movil" /><span class="cuadrado-movil" />
                    </span>
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GallerySide',
  methods: {
    setLink() {
        if (this.$route.name !== 'Gallery') {
            return "/gallery";
        }
        return "";
    }
  }
}
</script>

<style scoped>
.galeria-side-container{
    position: sticky;
    z-index: 999;
    top: calc(100% - 69px);
}
.galeria-side{
    width: fit-content;
    transform: rotate(-90deg) translate(45px, -61px);
}
.galeria-side a{
    display: flex;
    text-decoration: none;
    color: white;
    font-size: 24px;
}
.cuadrado{
    display: inline-flex;
    width: 30px;
    height: 30px;
    margin: auto;
    line-height: 24px;
    overflow: hidden;
}
.cuadrado>span{
    width: 100%;
    display: flex;
    position: relative;
    border: 2px solid #fff;
}
.cuadrado-movil{
    width: calc(100% - .5rem); 
    height: calc(100% - .5rem);
    position: absolute;
    background-color: #fff;
    transition-duration: .5s;
    transition-property: all;
}
.cuadrado-movil:first-child{
    left: .25rem;
}
.cuadrado-movil:nth-child(2){
    left: calc(100% + .5rem);
}
.galeria-side>a:hover .cuadrado-movil:first-child{
    left: calc(-100% - .5rem);
}
.galeria-side>a:hover .cuadrado-movil:nth-child(2){
    left: .25rem;
}
</style>