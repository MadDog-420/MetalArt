<template>
    <div class="galeria-side-container position-fixed">
        <div class="galeria-side bg-dark p-3">
            <router-link to="/gallery">
                <span class="mx-2">GALERÍA</span>
                <span class="cuadrado mx-2">
                    <span class="p-1" style="width: 20px; border: 2px solid #fff; position: relative">
                        <span class="cuadrado-movil" style="left: 4px;"></span><span class="cuadrado-movil" style="left: 18px;"></span>
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
    left: -49px;
    z-index: 999;
    top: calc(50% - 28px);
}
.galeria-side{
    transform: rotate(-90deg);
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
    line-height: 16px;
    overflow: hidden;
}
.cuadrado>span{
    display: flex;
}
.cuadrado-movil{
    width: 8px; 
    height: 8px;
    position: absolute;
    background-color: #fff;
    transition-duration: .5s;
    transition-property: all;
}
.galeria-side a:hover .cuadrado-movil:first-child{
    left: -18px !important;
}
.galeria-side a:hover .cuadrado-movil:nth-child(2){
    left: 4px !important;
}
</style>