<template>
  <div class="contact main">
    <Header><GallerySide/></Header>
    <Banner title='CONTACTO'/>
    <div class="container-fluid">
      <div class="row p-4">
          <div class="my-col col-sm-6 p-1 p-lg-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.652587541332!2d-71.54652108531134!3d-16.391650588682428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a431291c897%3A0xc0d6195c2024707c!2sAmpatacocha%20217%2C%20Arequipa%2004013!5e0!3m2!1ses-419!2spe!4v1631499861189!5m2!1ses-419!2spe" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="my-col col-sm-6 p-1 p-lg-5">
            <div class="row py-2">
              <h4>CORREO</h4>
              <p>henry.paz.arte@hotmail.com</p>
            </div>
            <div class="row py-2">
              <h4>CELULAR - WHATSAPP</h4>
              <p>+51 959856919</p>
            </div>
            <div class="row py-2">
              <h4>DIRECCIÓN</h4>
              <p>Calle Ampatacocha 217 Yanahuara – Arequipa - Perú</p>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import GallerySide from '@/components/GallerySide.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer,
    GallerySide,
    Banner
  }
}
</script>

<style scoped>
.row img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.about img{
  background-color: rgba(81,81,81,1);
}
</style>
