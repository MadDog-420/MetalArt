<template>
    <header class="px-2 text-white">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">
                    <LogoIcon />
                </router-link>
                <div class="navbar-brand navbar-gallery">
                    <GallerySide class="d-sm-none" />
                </div>
                <button class="navbar-toggler menu-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto my-5 my-lg-0">
                        <li class="nav-item"><router-link to="/" class="nav-link mx-3 text-white">INICIO</router-link></li>
                        <li class="nav-item"><router-link to="/about" class="nav-link mx-3 text-white">LA MARCA</router-link></li>
                        <li class="nav-item"><a href="#" class="nav-link disable mx-3 text-white">APRENDE</a></li>
                        <li class="nav-item"><router-link to="/contact" class="nav-link mx-3 text-white">CONTACTO</router-link></li>
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
  data (){
    return {
        collapsed: false
    }
  },
  methods: {
    toggleClass: function(){
     
      this.collapsed = !this.collapsed;

    }
  },
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

header .nav-link{
    width: fit-content;
    text-shadow: 1px 2px 3px black;
}
header .nav-link::after{
    content: "";
    width: 0;
    display: block;
    height: 4px;
    transition: width .5s;
}
header .nav-link:hover::after, .router-link-active::after{
    width: 100%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
header .nav-link.disable{
    color: grey !important;
    cursor: auto;
}
header .nav-link.disable:hover::after{
    width: 0;
}
header .navbar-text{
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

header .galeria-side-container{
    position: relative;
    z-index: 999;
    top: calc(100% - 55px);
}
header .galeria-side{
    width: fit-content;
    transform: rotate(0) translate(0, 0) !important;
}

@media (max-width: 991px) {
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
    .navbar-nav{
        height: calc(100vh - 248.763px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .navbar-brand{
        margin-right: 0px;
    }
    .navbar-text{
        padding: 2rem 0;
    }
    .nav-item{
        font-size: 30px;
    }
}

</style>