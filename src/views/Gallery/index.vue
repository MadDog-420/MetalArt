<template>
  <div class="gallery main">
    <Banner title='GALERÍA'>
      <img src="@/assets/img/Enmascarar_grupo_15.jpg">
    </Banner>
    <!-- shows gallery by cat -->
    <div class="container-fluid" v-if="$route.params.cat">
      <Slider/>
    </div>
    <!-- shows when no cat param exists -->
    <div class="container-fluid" v-else>
      <First>
        <div class="row px-md-4">
          <div class="my-col col-sm-6 p-3">
            <div>
              <img src="@/assets/img/Enmascarar_grupo_15.jpg">
              <div class="lighten-bg">
                  <router-link to="/gallery/retratos">
                    <h3 class="center">RETRATOS</h3>
                  </router-link>
              </div>
            </div>
          </div>

          <div class="my-col col-sm-6 p-3">
            <div>
              <img src="@/assets/img/Enmascarar_grupo_15.jpg">
              <div class="lighten-bg">
                  <router-link to="/gallery/paisajes">
                    <h3 class="center">PAISAJES</h3>
                  </router-link>
              </div>
            </div>
          </div>

          <div class="my-col col-sm-6 p-3">
            <div>
              <img src="@/assets/img/Enmascarar_grupo_15.jpg">
              <div class="lighten-bg">
                  <router-link to="/gallery/lugares">
                    <h3 class="center">LUGARES<br/>EMBLEMÁTICOS</h3>
                  </router-link>
              </div>
            </div>
          </div>

          <div class="my-col col-sm-6 p-3">
            <div>
              <img src="@/assets/img/Enmascarar_grupo_15.jpg">
              <div class="lighten-bg">
                  <router-link to="/gallery/retratos">
                    <h3 class="center">RETRATOS</h3>
                  </router-link>
              </div>
            </div>
          </div>
        </div>
      </First>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Slider from '@/views/Gallery/Slider'
import First from '@/components/First'

export default {
  name: 'Gallery',
  components: {
    Banner,
    Slider,
    First
  },
}
</script>

<style scoped>
.main{
  margin-top: -112px;
}
.row img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery img{
  background-color: rgba(81,81,81,1);
}
.galeria-side-container{
  display: none;
}
.lighten-bg{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.lighten-bg>a{
  height: 100%;
  display: block;
}
.center{
  color: #7a7a7a;
  font-size: 1.3em;
  font-weight: normal;
  transition: all .5s linear;
}
.my-col > div{
  position: relative;
  border: 2px solid #7a7a7a;
}
.my-col > div img{
  opacity: 0;
  transition: all .5s linear;
}
.my-col > div:hover img{
  opacity: 100;
}
.my-col > div:hover .center{
  color: white;
}

@media (max-width: 576px){
  .main >.container-fluid{
    margin-top: 70px;
  }
}
</style>
