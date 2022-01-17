<template>
    <header class="px-2 text-white">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid accordion" id="navbarContainer">
                <router-link to="/" class="navbar-brand" href="#">
                    <LogoIcon />
                </router-link>
                <div v-if="onGalleryRoute" class="navbar-brand navbar-gallery d-sm-none">
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarGallery" aria-controls="navbarGallery" aria-expanded="false" aria-label="Toggle categories">
                        <GallerySide />
                    </button>
                </div>
                <div v-else class="navbar-brand navbar-gallery">
                    <GallerySide class="d-sm-none"/>
                </div>
                <button class="navbar-toggler menu-button collapsed" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText" data-parent="#navbarContainer">
                    <ul class="navbar-nav me-auto my-md-5 my-lg-0">
                        <li class="nav-item"><router-link to="/" class="nav-link mx-3 text-white" data-toggle="collapse" data-target=".navbar-collapse.show">Inicio</router-link></li>
                        <li class="nav-item"><router-link to="/about" class="nav-link mx-3 text-white" data-toggle="collapse" data-target=".navbar-collapse.show">La Marca</router-link></li>
                        <li class="nav-item"><a href="#" class="nav-link disable mx-3 text-white" data-toggle="collapse" data-target=".navbar-collapse.show">Aprende</a></li>
                        <li class="nav-item"><router-link to="/contact" class="nav-link mx-3 text-white" data-toggle="collapse" data-target=".navbar-collapse.show">Contacto</router-link></li>
                    </ul>
                    <span class="navbar-text text-white text-center">
                        <a href="https://www.facebook.com/pages/category/Arts---Crafts-Store/Metal-Art-433001477462190/" target="_blank"><FacebookSimpleIcon /></a>
                        <a href="https://wa.link/go0slp" target="_blank"><WhatsappSimpleIcon /></a>
                    </span>
                </div>
                <div v-if="isResponsive" class="collapse navbar-collapse" id="navbarGallery" data-parent="#navbarContainer">
                    <ul class="navbar-nav me-auto my-md-5 my-lg-0">
                        <li class="nav-item"><router-link to="/gallery/cult" class="nav-link mx-3 text-white" data-toggle="collapse" data-target=".navbar-collapse.show">Cultural</router-link></li>
                        <li class="nav-item"><router-link to="/gallery/reli" class="nav-link mx-3 text-white" data-toggle="collapse" data-target=".navbar-collapse.show">Religioso</router-link></li>
                        <li class="nav-item"><router-link to="/gallery/cust" class="nav-link mx-3 text-white" data-toggle="collapse" data-target=".navbar-collapse.show">Personalizado</router-link></li>
                    </ul>
                    <span class="navbar-text text-white text-center">
                        <a href="https://www.facebook.com/pages/category/Arts---Crafts-Store/Metal-Art-433001477462190/" target="_blank"><FacebookSimpleIcon /></a>
                        <a href="https://wa.link/go0slp" target="_blank"><WhatsappSimpleIcon /></a>
                    </span>
                </div>
            </div>
        </nav>
        <slot></slot>
    </header>
</template>

<script>
import LogoIcon from '@/components/icons/LogoIcon.vue'
import FacebookSimpleIcon from '@/components/icons/FacebookSimpleIcon.vue'
import WhatsappSimpleIcon from '@/components/icons/WhatsappSimpleIcon.vue'
import GallerySide from '@/components/GallerySide.vue'

export default {
  name: 'Header',
  components: {
    LogoIcon,
    FacebookSimpleIcon,
    WhatsappSimpleIcon,
    GallerySide
  },
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
  created() {
    window.addEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    }
  },
  computed: {
    onGalleryRoute() {
        return this.$route.name === 'Gallery'
    },
    isResponsive() {
        return this.width <= 576
    }
  }
}
</script>

<style>
header{
    width: 100%;
    position: absolute;
    z-index: 99;
}
.navbar{
    padding-left: 4%;
    padding-right: 4%;
}
.navbar-collapse{
    flex-grow: 0;
}
.nav-item{
    width: fit-content;
    margin: 0 auto;
    text-transform: uppercase;
}
.navbar-gallery a{
    font-size: 1rem;
}
.navbar-brand svg{
    width: 140px;
}
.navbar-text{
    display: none;
}

.navbar-gallery{
    margin-left: auto;
    margin-right: 1.5rem !important;
}
.navbar-nav .nav-link{
    width: fit-content;
    text-shadow: 1px 2px 3px black;
}
.navbar-nav .nav-link::after{
    content: "";
    width: 0;
    display: block;
    height: 4px;
    transition: width .5s;
}
.navbar-nav .nav-link:hover::after, .router-link-active::after, .router-link-exact-active::after{
    width: 100% !important;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.navbar-nav .nav-link.disable{
    color: grey !important;
    cursor: auto;
}
.navbar-nav .nav-link.disable:hover::after{
    width: 0 !important;
}
.navbar-nav .navbar-text{
    display: none;
}

/* ----burger menu------*/
.menu-button:not(.collapsed) .icon-menu span:nth-child(1){
    width: 100%;
    -webkit-transform: rotate(45deg) translate(2px,2px);
    transform: rotate(45deg) translate(2px,2px);
    transition: all .5s;
}
.menu-button:not(.collapsed) .icon-menu span:nth-child(2){
    opacity: 0;
    transition: all .5s;
}
.menu-button:not(.collapsed) .icon-menu span:nth-child(3){
    width: 100%;
    -webkit-transform: rotate(-45deg) translate(4px,-4px);
    transform: rotate(-45deg) translate(4px,-4px);
    transition: all .5s;
}

.navbar-toggler{
    padding: 0 !important;
}
.icon-menu {
    width: 17px;
    height: 10px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.icon-menu span:nth-child(1) {
    width: 100%;
    height: 1.5px;
    display: block;
    background-color: white;
    transform: rotate(0deg);
    transition: all .5s;
}
.icon-menu span:nth-child(2) {
    width: 100%;
    height: 1.5px;
    display: block;
    background-color: white;
    transition: all .5s;
}
.icon-menu span:nth-child(3) {
    width: 70%;
    height: 1.5px;
    display: block;
    background-color: white;
    transform: rotate(0deg);
    transition: all .5s;
}
/* ----burger menu------*/

a svg{
    fill: rgba(255,255,255,1);
}

.navbar-gallery .galeria-side-container{
    position: relative;
    z-index: 999;
    top: calc(100% - 55px);
}
.navbar-gallery .galeria-side{
    width: fit-content;
    transform: rotate(0) translate(0, 0) !important;
    padding-right: .5rem !important;
    padding-left: .5rem !important;
    border: 1px solid #4A4A4A;
    border-top: 0;
    border-bottom: 0;
}
.navbar-gallery .galeria-side a{
    font-size: 0.75rem;
    line-height: 1.3rem;
}
.navbar-gallery .galeria-side .cuadrado{
    width: 17px;
    height: 17px;
}
.navbar-gallery .galeria-side .cuadrado .cuadrado-movil{
    width: 6px;
    height: 6px;
}

@media (max-width: 991.9px) {
    header{
        position: fixed;
        background-color: black;
        z-index: 999;
    }
    .navbar-text{
        display: block !important;
    }
    .navbar-text a{
        margin: 10px;
    }
}
@media (max-width: 768px) {
    .navbar-brand svg{
        width: 78.5px;
    }
}
@media (max-width: 576px) {
    .navbar .container-fluid{
        justify-content: start;
    }
    .navbar-nav{
        height: calc(100vh - 406.763px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 7rem 0;
    }
    .navbar-brand{
        padding-top: 0;
        padding-bottom: 0;
        margin-right: 0px;
    }
    .navbar-text{
        padding-bottom: 5rem;
    }
    .nav-item{
        font-size: 30px;
        text-transform: capitalize;
    }
}

</style>