<template>
  <div class="contact main">
    <Banner title='CONTACTO'>
      <img src="@/assets/img/Enmascarar_grupo_24.jpg">
    </Banner>
    <div class="container-fluid">
      <First>
        <div class="row">
          <div class="col-6 py-5">
            <h4 class="text-center">CORREO</h4>
            <h4 class="text-center mt-5"><a href="mailto:henry.paz.arte@hotmail.com" style="font-weight: normal;">henry.paz.arte@hotmail.com</a></h4>
          </div>
          <div class="col-6 py-5">
            <h4 class="text-center">CELULAR - WHATSAPP</h4>
            <h4 class="text-center mt-5" style="font-weight: normal;">+51 959856919</h4>
          </div>
        </div>
      </First>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import First from '@/components/First.vue'

export default {
  name: 'Contact',
  components: {
    Banner,
    First
  },
  mounted() {
    document.title = 'Metal Art | Contacto'
  },
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
a{
  color: unset;
  text-decoration: none;
}
a:hover{
  color: #0d6efd;
  text-decoration: underline; 
}

@media (max-width: 576px){
  .main >.container-fluid{
    margin-top: 70px;
  }
  .contact.main h4{
    font-size: 1rem;
  }
}
</style>
