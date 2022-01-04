<template>
    <div v-if=picture_src class="picture">
        <img v-if=imgsrc class="main-pic" :src="imgsrc">
        <Loading v-else/>
    </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
    name: 'GalleryPicture',
    components: {
        Loading
    },
    props: {
        picture_src: String
    },
    data: () => ({
        imgsrc: ""
    }),
    created() {
        if (this.picture_src !== "") {
            let myImage = new Image();
            myImage.src = this.picture_src;
            myImage.onload = () => {
                this.imgsrc = myImage.src
            }
        } else {
            this.imgsrc = ""
        }
    }
}
</script>

<style scoped>
.picture img{
    width: 100%;
}
.no-image, .picture .loading{
    height: 255px;
}
.main-pic{
    object-fit: contain;
    margin: auto;
    z-index: 99;
}
.no-image{
    background-color: rgba(81,81,81,1);
}

.picture .galeria-side-container{
    display: block;
    position: unset;
    height: fit-content;
    margin: auto;
}
.picture .galeria-side{
    width: fit-content;
    transform: rotate(0) translate(0, 0) !important;
    padding-right: .5rem !important;
    padding-left: .5rem !important;
    border: 1px solid #4A4A4A;
    border-top: 0;
    border-bottom: 0;
}
.picture .galeria-side a{
    font-size: 0.75rem;
    line-height: 1.3rem;
}
.picture .galeria-side .cuadrado{
    width: 17px;
    height: 17px;
}
.picture .galeria-side .cuadrado .cuadrado-movil{
    width: 6px;
    height: 6px;
}
</style>