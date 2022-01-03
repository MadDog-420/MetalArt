<template>
    <div class="galeria-side-container">
        <div class="galeria-side bg-dark p-3">
            <router-link to="/gallery">
                <span class="mx-2">GALERÍA</span>
                <span class="cuadrado mx-2">
                    <span class="p-1">
                        <span class="cuadrado-movil"></span><span class="cuadrado-movil"></span>
                    </span>
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GallerySide',
}
</script>

<style scoped>
.galeria-side-container{
    position: sticky;
    z-index: 999;
    top: calc(100% - 55px);
}
.galeria-side{
    width: fit-content;
    transform: rotate(-90deg) translate(45px, -46px);
}
.galeria-side a{
    display: flex;
    text-decoration: none;
    color: white;
}
.cuadrado{
    display: inline-flex;
    width: 20px;
    height: 20px;
    margin: auto;
    line-height: 16px;
    overflow: hidden;
}
.cuadrado>span{
    width: 20px;
    display: flex;
    border: 2px solid #fff; 
    position: relative;
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