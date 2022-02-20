<template>
    <div v-if=picture_src class="picture">
        <img v-if=imgsrc class="main-pic" :src="imgsrc" data-bs-toggle="modal" :data-bs-target="'#modal_'+index">
        <Loading v-else/>
    </div>

    <!-- Modal -->
    <div class="modal fade" :id="'modal_'+index" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <First>
                        <div class="row h-100">
                            <div class="col d-flex picture-cont">
                                <img v-if=imgsrc class="main-pic" :src="imgsrc">
                            </div>
                            <div class="col d-flex description-cont">
                                <div class="description ps-lg-5 pe-0">
                                    <h3 class="mb-5">{{item.title}}</h3>
                                    <p>Los trabajos son repujados en láminas de cobre, aluminio y bronce de acuerdo a la medida acordada.</p>
                                    <p>El trabajo acabado será entregado con un marco o moldura de madera, cuyas proporciones serán de acuerdo a la medidas del cuadro.</p>
                                    <p>Por otro lado también incluye un paspatour o remarco interior al marco o moldura, este será en cuero o texturado en madera.</p>
                                    <p class="mt-5" style="font-size: 10px"><i>*El tamaño varía de acuerdo a las necesidades del cliente. Para tener más información comunicarse al +51 959856919 o enviar un mensaje de WhatsApp.</i></p>
                                    <p style="font-size: 10px"><i>*El marco queda a consideración del cliente, de acuerdo al tipo de marco o color</i></p>
                                </div>
                            </div>
                        </div>
                    </First>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import First from '@/components/First.vue'
export default {
    name: 'GalleryPicture',
    components: {
        Loading,
        First
    },
    props: {
        picture_src: String,
        item: Object,
        index: String,
    },
    data: () => ({
        imgsrc: "",
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }),
    created() {
        window.addEventListener("resize", this.getDimensions);
        if (this.picture_src !== "") {
            let myImage = new Image();
            myImage.src = this.picture_src;
            myImage.onload = () => {
                this.imgsrc = myImage.src
            }
        } else {
            this.imgsrc = ""
        }
    },
    methods: {
        getDimensions() {
            this.width = document.documentElement.clientWidth;
            this.height = document.documentElement.clientHeight;
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
    width: 100%;
    object-fit: contain;
    margin: auto;
    z-index: 99;
    cursor: pointer;
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

.modal{
    background-color: rgba(0,0,0,0.8);
}
.modal-dialog{
    max-width: 100%;
    height: 100%;
    margin: 0;
}
.modal-content{
    height: 100%;
    border: 0;
    border-radius: 0;
    background-color: transparent;
}
.modal-content .btn-close{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: 30px;
    filter: brightness(1) invert(1);
    background-size: contain;
    opacity: 1;
}
.modal-content p, .modal-content h3{
    color: white;
}
.modal-content p{
    font-size: 13px;
}
.modal-body{
    display: flex;
    padding: 30px 0;
}
.modal-body .description{
    width: 406px;
    height: fit-content;
    margin: auto 0 auto auto;
}
.description-cont{
    flex: 0;
}

@media (max-width: 992px){
    .modal-body .description{
        width: 346px;
        height: fit-content;
        margin: auto 0 auto auto;
    }
    .modal-body .col{
        flex: 0 0 auto;
    }
    .modal-body .description{
        margin: auto 0;
        padding-top: 3rem;
    }
}
</style>