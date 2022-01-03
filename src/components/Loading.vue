<template>
    <div class="loading">
        <div class="galeria-side-container">
            <div class="galeria-side p-3">
                <div class="d-flex">
                    <span class="cuadrado mx-2">
                        <span class="p-2">
                            <span class="cuadrado-movil" /><span class="cuadrado-movil" />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GallerySide',
}
</script>

<style scoped>
.loading{
    width: 100%;
    height: 100%;
    display: flex;
}
.loading .galeria-side-container{
    display: block;
    position: unset;
    height: fit-content;
    margin: auto;
}
.loading .galeria-side{
    width: fit-content;
    transform: rotate(0) translate(0, 0) !important;
    padding-right: .5rem !important;
    padding-left: .5rem !important;
}
.loading .galeria-side a{
    font-size: 0.75rem;
    line-height: 1.3rem;
}
.cuadrado{
    display: inline-flex;
    width: 40px;
    height: 40px;
    margin: auto;
    line-height: 16px;
    overflow: hidden;
}
.cuadrado>span{
    width: 100%;
    display: flex;
    position: relative;
    border: 2px solid #000;
} 
.cuadrado-movil{
    width: calc(100% - 1rem); 
    height: calc(100% - 1rem);
    position: absolute;
    background-color: #000;
    /*transition: all 0.9s ease-out;*/
    animation: example 2s infinite;
}
.cuadrado-movil:first-child{
    left: .5rem;
}
.cuadrado-movil:nth-child(2){
    left: calc(100% + 1rem);
}
/*
.galeria-side>div:hover .cuadrado-movil:first-child{
    left: calc(-100% - 1rem);
}
.galeria-side>div:hover .cuadrado-movil:nth-child(2){
    left: .5rem;
} */
@keyframes example {
    0%   {left: calc(100% + 1rem); opacity: 0;}
    19%  {left: .5rem; opacity: 1;}
    59%  {left: .5rem; opacity: 1;}
    98%  {left: calc(-100% - 1rem); opacity: 0;}
    99%  {left: calc(100% + 1rem); opacity: 0;}
    100% {left: .5rem; opacity: 0;}
}
</style>